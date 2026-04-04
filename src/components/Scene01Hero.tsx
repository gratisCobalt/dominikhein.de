import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import heroImg from '../assets/hero/dominik_hero.jpeg'

const nameWords = ['DOMINIK', 'HEIN']

const PIXEL_SIZE = 5
const DOT_RADIUS = 1.25

// Physics tuning
const SPRING_FORCE = 0.002
const FRICTION = 0.93
const RANDOM_FORCE = 0.1
const CURSOR_RADIUS = 35
const CURSOR_FORCE = 0.2

// Max trail interpolation steps to cap cost
const MAX_TRAIL_STEPS = 12

/** Precompute circle mask offsets: relative (dx, dy) pairs within DOT_RADIUS */
function buildCircleMask(radius: number): Int8Array {
  const r = Math.ceil(radius)
  const offsets: number[] = []
  const rSq = radius * radius
  for (let dy = -r; dy <= r; dy++) {
    for (let dx = -r; dx <= r; dx++) {
      if (dx * dx + dy * dy <= rSq) {
        offsets.push(dx, dy)
      }
    }
  }
  return new Int8Array(offsets)
}

const CIRCLE_MASK = buildCircleMask(DOT_RADIUS)
const MASK_LEN = CIRCLE_MASK.length

function PixelFluid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const readyRef = useRef(false)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const prevMouseRef = useRef({ x: -9999, y: -9999 })

  // Struct-of-arrays for cache-friendly access
  const dataRef = useRef<{
    hx: Float32Array
    hy: Float32Array
    x: Float32Array
    y: Float32Array
    vx: Float32Array
    vy: Float32Array
    r: Uint8Array
    g: Uint8Array
    b: Uint8Array
    count: number
  } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let running = true

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = heroImg

    function init() {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas!.width = w
      canvas!.height = h

      const tempCanvas = document.createElement('canvas')
      tempCanvas.width = w
      tempCanvas.height = h
      const tempCtx = tempCanvas.getContext('2d')!

      const imgAspect = img.naturalWidth / img.naturalHeight
      const screenAspect = w / h
      let drawW: number, drawH: number, drawX: number, drawY: number

      if (screenAspect > imgAspect) {
        drawW = w
        drawH = w / imgAspect
        drawX = 0
        drawY = 0
      } else {
        drawH = h
        drawW = h * imgAspect
        drawX = (w - drawW) / 2
        drawY = 0
      }

      tempCtx.drawImage(img, drawX, drawY, drawW, drawH)
      const srcData = tempCtx.getImageData(0, 0, w, h).data

      const cols = Math.ceil(w / PIXEL_SIZE)
      const rows = Math.ceil(h / PIXEL_SIZE)
      void (cols * rows) // maxCount unused after dark-pixel culling

      // Temp arrays — we'll trim after filtering dark pixels
      const tmpHx: number[] = []
      const tmpHy: number[] = []
      const tmpR: number[] = []
      const tmpG: number[] = []
      const tmpB: number[] = []

      const DARK_THRESHOLD = 18 // r+g+b below this = skip

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const px = col * PIXEL_SIZE
          const py = row * PIXEL_SIZE
          const sx = Math.round(px + PIXEL_SIZE * 0.5)
          const sy = Math.round(py + PIXEL_SIZE * 0.5)
          const idx = (Math.min(sy, h - 1) * w + Math.min(sx, w - 1)) * 4

          const pr = srcData[idx]
          const pg = srcData[idx + 1]
          const pb = srcData[idx + 2]

          if (pr + pg + pb < DARK_THRESHOLD) continue

          tmpHx.push(px)
          tmpHy.push(py)
          tmpR.push(pr)
          tmpG.push(pg)
          tmpB.push(pb)
        }
      }

      const count = tmpHx.length
      const hx = new Float32Array(tmpHx)
      const hy = new Float32Array(tmpHy)
      const x = Float32Array.from(tmpHx)
      const y = Float32Array.from(tmpHy)
      const vx = new Float32Array(count)
      const vy = new Float32Array(count)
      const r = new Uint8Array(tmpR)
      const g = new Uint8Array(tmpG)
      const b = new Uint8Array(tmpB)

      dataRef.current = { hx, hy, x, y, vx, vy, r, g, b, count }
      readyRef.current = true
    }

    function animate() {
      if (!running) return
      if (!readyRef.current || !dataRef.current) {
        raf = requestAnimationFrame(animate)
        return
      }

      const w = canvas!.width
      const h = canvas!.height
      const d = dataRef.current
      const n = d.count
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const pmx = prevMouseRef.current.x
      const pmy = prevMouseRef.current.y

      // Trail interpolation
      const trailDx = mx - pmx
      const trailDy = my - pmy
      const trailDist = Math.sqrt(trailDx * trailDx + trailDy * trailDy)
      const trailSteps = Math.min(MAX_TRAIL_STEPS, Math.max(1, Math.ceil(trailDist / (CURSOR_RADIUS * 0.4))))
      const cursorRadiusSq = CURSOR_RADIUS * CURSOR_RADIUS

      // Precompute trail points
      const trailX = new Float32Array(trailSteps)
      const trailY = new Float32Array(trailSteps)
      for (let s = 0; s < trailSteps; s++) {
        const t = trailSteps === 1 ? 1 : s / (trailSteps - 1)
        trailX[s] = pmx + trailDx * t
        trailY[s] = pmy + trailDy * t
      }

      // Physics step
      const { hx, hy, x, y, vx, vy } = d
      for (let i = 0; i < n; i++) {
        // Random impulse
        vx[i] += (Math.random() - 0.5) * RANDOM_FORCE
        vy[i] += (Math.random() - 0.5) * RANDOM_FORCE

        // Spring
        vx[i] += (hx[i] - x[i]) * SPRING_FORCE
        vy[i] += (hy[i] - y[i]) * SPRING_FORCE

        // Cursor repulsion — trail points
        for (let s = 0; s < trailSteps; s++) {
          const dx = x[i] - trailX[s]
          const dy = y[i] - trailY[s]
          const distSq = dx * dx + dy * dy
          if (distSq < cursorRadiusSq && distSq > 1) {
            const invDist = 1 / Math.sqrt(distSq)
            const force = (1 - Math.sqrt(distSq) * (1 / CURSOR_RADIUS)) * CURSOR_FORCE
            vx[i] += dx * invDist * force
            vy[i] += dy * invDist * force
          }
        }

        // Friction + integrate
        vx[i] *= FRICTION
        vy[i] *= FRICTION
        x[i] += vx[i]
        y[i] += vy[i]
      }

      prevMouseRef.current.x = mx
      prevMouseRef.current.y = my

      // Render via ImageData — stamp precomputed circle mask
      const imageData = ctx!.createImageData(w, h)
      const buf = imageData.data
      const halfPx = PIXEL_SIZE * 0.5

      for (let i = 0; i < n; i++) {
        const cx = Math.round(x[i] + halfPx)
        const cy = Math.round(y[i] + halfPx)
        const cr = d.r[i]
        const cg = d.g[i]
        const cb = d.b[i]

        for (let m = 0; m < MASK_LEN; m += 2) {
          const fx = cx + CIRCLE_MASK[m]
          const fy = cy + CIRCLE_MASK[m + 1]
          if (fx >= 0 && fx < w && fy >= 0 && fy < h) {
            const idx = (fy * w + fx) << 2
            buf[idx] = cr
            buf[idx + 1] = cg
            buf[idx + 2] = cb
            buf[idx + 3] = 255
          }
        }
      }

      ctx!.putImageData(imageData, 0, 0)
      raf = requestAnimationFrame(animate)
    }

    function handleMouseMove(e: MouseEvent) {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    function handleMouseLeave() {
      mouseRef.current.x = -9999
      mouseRef.current.y = -9999
    }

    img.onload = () => {
      init()
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', () => {
      if (img.complete && img.naturalWidth > 0) init()
    })

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}

export function Scene01Hero() {
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = heroImg
    img.onload = () => setImgLoaded(true)
  }, [])

  return (
    <section
      data-scene="01"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-bg-primary)' }}
    >
      <div className="absolute inset-0">
        {imgLoaded && <PixelFluid />}
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="overflow-hidden">
          <h1 className="mega-text flex flex-wrap justify-center gap-x-[0.3em]" style={{ mixBlendMode: 'difference' }}>
            {nameWords.map((word, wi) => (
              <motion.span
                key={wi}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.4 + wi * 0.15,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.6 }}
          className="mt-6 flex items-center justify-center"
        >
          <span
            className="text-sm md:text-base tracking-[0.2em] uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-text-secondary)',
            }}
          >
            Software Developer. Bundessieger. Builder.
          </span>
          <span
            className="inline-block w-[2px] h-[1.1em] ml-1"
            style={{
              background: 'var(--color-text-secondary)',
              animation: 'blink-cursor 1s steps(1) infinite',
            }}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-6 z-10 scene-number">
        <span style={{ color: 'var(--color-accent)' }}>01</span> — Opening
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <div
          className="w-[1px] h-8"
          style={{
            background: 'var(--color-text-secondary)',
            animation: 'scroll-pulse 2s ease-in-out infinite',
          }}
        />
      </motion.div>
    </section>
  )
}
