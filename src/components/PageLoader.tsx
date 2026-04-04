import { useState, useEffect } from 'react'

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [counter, setCounter] = useState('00')
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const duration = 2000
    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const pct = Math.min(elapsed / duration, 1)
      setProgress(pct * 100)

      if (pct >= 0.5) {
        setCounter('01')
      }

      if (pct < 1) {
        requestAnimationFrame(tick)
      } else {
        setExiting(true)
        setTimeout(onComplete, 800)
      }
    }

    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col">
      {/* Top clapper */}
      <div
        className="flex-1 bg-[#050505] flex items-end justify-center pb-8 transition-transform"
        style={{
          transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="text-center">
          <p
            className="text-[clamp(4rem,12vw,10rem)] leading-none tracking-tight"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)' }}
          >
            {counter}
          </p>
        </div>
      </div>

      {/* Bottom clapper */}
      <div
        className="flex-1 bg-[#050505] flex items-start justify-center pt-8 transition-transform"
        style={{
          transform: exiting ? 'translateY(100%)' : 'translateY(0)',
          transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="text-center">
          <p
            className="text-sm tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
          >
            Film ab
            <span style={{ animation: 'blink-cursor 1s steps(1) infinite' }}>_</span>
          </p>
          {/* Progress bar */}
          <div className="mt-6 w-48 h-[2px] bg-[rgba(240,236,228,0.1)] mx-auto overflow-hidden">
            <div
              className="h-full bg-[var(--color-accent)] transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
