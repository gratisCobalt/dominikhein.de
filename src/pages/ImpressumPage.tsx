import { motion } from 'framer-motion'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export function ImpressumPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-text-primary mb-8">
              Impressum
            </h1>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                Dominik Hein
                <br />
                Am Bobenhäuser 9
                <br />
                63773 Goldbach
                <br />
                Deutschland
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
                Kontakt
              </h2>
              <p>
                E-Mail:{' '}
                <a href="mailto:info@dominikhein.de" className="text-accent hover:underline">
                  info@dominikhein.de
                </a>
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Dominik Hein
                <br />
                Am Bobenhäuser 9
                <br />
                63773 Goldbach
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
                Haftungsausschluss
              </h2>

              <h3 className="text-xl font-medium mt-6 mb-3">Haftung für Inhalte</h3>
              <p>
                Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch
                keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs. 1
                TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch
                nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
                zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Haftung für Links</h3>
              <p>
                Diese Website enthält Links zu externen Webseiten Dritter, auf deren
                Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
                Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Urheberrecht</h3>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
                sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
