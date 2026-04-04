import sculptImg from '../assets/sculpt/Sculpt-App-Screenshot.webp'

const features = [
  'KI-gestützte Trainingsplanerstellung',
  'Personalisierte Übungsempfehlungen',
  'Fortschritts-Tracking & Analysen',
  'Intuitive Benutzeroberfläche',
]

const techStack = ['React Native', 'TypeScript', 'Node.js', 'OpenAI']

export function Scene03Craft() {
  return (
    <section data-scene="03" className="relative py-32 md:py-48 overflow-hidden">
      {/* Big scene number background */}
      <div
        className="absolute top-1/4 left-0 scene-transition select-none pointer-events-none"
        aria-hidden="true"
      >
        03
      </div>

      {/* Section title */}
      <div className="container mb-20">
        <p className="scene-number mb-4">
          <span style={{ color: 'var(--color-accent)' }}>03</span> — The Craft
        </p>
        <h2
          className="text-4xl md:text-6xl font-bold"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Sculpt
        </h2>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Phone mockup */}
          <div className="scene-element flex justify-center">
            <div
              className="relative"
              style={{
                animation: 'phone-float 6s ease-in-out infinite',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Phone frame */}
              <div
                className="relative rounded-[2.5rem] p-2 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)',
                  border: '2px solid rgba(240, 236, 228, 0.1)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(196, 77, 63, 0.1)',
                  width: 'min(280px, 70vw)',
                }}
              >
                {/* Notch */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 rounded-b-2xl z-10"
                  style={{ background: '#0a0a0a' }}
                />
                {/* Screen */}
                <div className="rounded-[2rem] overflow-hidden">
                  <img
                    src={sculptImg}
                    alt="Sculpt App — KI-Fitness-Trainer"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <p
              className="text-lg leading-relaxed mb-8 scene-element"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Eine KI-gestützte Fitness-App, die personalisierte Trainingspläne erstellt
              und sich an dein Leistungsniveau anpasst.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {features.map((feature, i) => (
                <div
                  key={feature}
                  className="scene-element flex items-center gap-3"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'var(--color-accent)' }}
                  />
                  <span style={{ color: 'var(--color-text-primary)' }}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 scene-element">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs tracking-wider uppercase"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text-secondary)',
                    border: '1px solid rgba(240, 236, 228, 0.1)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
