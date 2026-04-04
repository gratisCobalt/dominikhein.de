import { useState, useCallback } from 'react'
import { PageLoader } from '../components/PageLoader'
import { Navigation } from '../components/Navigation'
import { Scene01Hero } from '../components/Scene01Hero'
import { Scene02Origin } from '../components/Scene02Origin'
import { Scene03Craft } from '../components/Scene03Craft'
import { Scene04Commerce } from '../components/Scene04Commerce'
import { Scene05Story } from '../components/Scene05Story'
import { Scene06Signal } from '../components/Scene06Signal'
import { Scene07Credits } from '../components/Scene07Credits'

export function HomePage() {
  const [loaded, setLoaded] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {!loaded && <PageLoader onComplete={handleLoadComplete} />}
      <div
        className="relative"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
          background: 'var(--color-bg-primary)',
        }}
      >
        <Navigation />
        <main>
          <Scene01Hero />
          <Scene02Origin />
          <Scene03Craft />
          <Scene04Commerce />
          <Scene05Story />
          <Scene06Signal />
          <Scene07Credits />
        </main>
      </div>
    </>
  )
}
