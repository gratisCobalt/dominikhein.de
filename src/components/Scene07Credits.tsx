import { Link } from 'react-router-dom'

export function Scene07Credits() {
  return (
    <section
      data-scene="07"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        borderTop: '1px solid rgba(240, 236, 228, 0.06)',
      }}
    >
      <div className="container text-center">
        {/* Credits text */}
        <div className="mb-12">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}
          >
            Credits
          </p>
          <p
            className="text-sm mb-1"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Design, Development & Direction
          </p>
          <p
            className="text-lg font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Dominik Hein
          </p>
        </div>

        {/* Legal links */}
        <div
          className="flex items-center justify-center gap-6 mb-8 text-sm"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          <Link to="/impressum" className="hover:text-[var(--color-text-primary)] transition-colors">
            Impressum
          </Link>
          <span style={{ color: 'rgba(240, 236, 228, 0.15)' }}>|</span>
          <Link to="/datenschutz" className="hover:text-[var(--color-text-primary)] transition-colors">
            Datenschutz
          </Link>
        </div>

        {/* Copyright */}
        <p
          className="text-xs"
          style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}
        >
          &copy; 2026 Dominik Hein
        </p>

        {/* Easter egg */}
        <p
          className="mt-6 text-[10px] tracking-wider uppercase"
          style={{ color: 'rgba(240, 236, 228, 0.15)', fontFamily: 'var(--font-mono)' }}
        >
          No CGI was used in the making of this website.
        </p>
      </div>
    </section>
  )
}
