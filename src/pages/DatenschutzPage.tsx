import { motion } from 'framer-motion'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export function DatenschutzPage() {
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
              Datenschutzerklärung
            </h1>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
                1. Datenschutz auf einen Blick
              </h2>

              <h3 className="text-xl font-medium mt-6 mb-3">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
                Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
                identifiziert werden können.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">
                Datenerfassung auf dieser Website
              </h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                <br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
                Website entnehmen.
              </p>

              <p>
                <strong>Wie erfassen wir Ihre Daten?</strong>
                <br />
                Diese Website ist eine statische Portfolio-Seite und erfasst keine
                personenbezogenen Daten aktiv. Es werden keine Cookies gesetzt, keine
                Tracking-Tools verwendet und keine Formulardaten gespeichert.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
                2. Hosting
              </h2>
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf
                dieser Website erfasst werden, werden auf den Servern des Hosters
                gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
                Website generiert werden, handeln.
              </p>
              <p>
                Der Einsatz des Hosters erfolgt im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots durch einen
                professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="text-xl font-medium mt-6 mb-3">Datenschutz</h3>
              <p>
                Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten
                sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
                entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
                Datenschutzerklärung.
              </p>
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei
                der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
                lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                möglich.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
                ist:
              </p>
              <p>
                Dominik Hein
                <br />
                E-Mail:{' '}
                <a href="mailto:info@dominikhein.de" className="text-accent hover:underline">
                  info@dominikhein.de
                </a>
              </p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die
                allein oder gemeinsam mit anderen über die Zwecke und Mittel der
                Verarbeitung von personenbezogenen Daten entscheidet.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
                Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
                jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde zu. Das Beschwerderecht
                besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">
                Recht auf Datenübertragbarkeit
              </h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
                oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
                oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                aushändigen zu lassen.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">
                Auskunft, Löschung und Berichtigung
              </h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
                das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
                personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
                Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung
                dieser Daten.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
                4. Datenerfassung auf dieser Website
              </h2>

              <h3 className="text-xl font-medium mt-6 mb-3">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen
                in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
                übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 text-text-secondary">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
                vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art.
                6 Abs. 1 lit. f DSGVO.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Keine Cookies</h3>
              <p>
                Diese Website verwendet keine Cookies und setzt keine Tracking-Tools
                ein. Es findet keine Analyse des Nutzerverhaltens statt.
              </p>

              <h3 className="text-xl font-medium mt-6 mb-3">Kontaktaufnahme per E-Mail</h3>
              <p>
                Wenn Sie mir per E-Mail Anfragen zukommen lassen, werden Ihre Angaben
                aus der Anfrage inklusive der von Ihnen dort angegebenen Kontaktdaten
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei
                mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung
                weiter.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
                5. Externe Links
              </h2>
              <p>
                Diese Website enthält Links zu externen Websites (z.B. GitHub,
                LinkedIn). Beim Klick auf diese Links werden Sie zu den jeweiligen
                Websites weitergeleitet, die eigene Datenschutzrichtlinien haben. Für
                die Datenverarbeitung auf diesen externen Websites bin ich nicht
                verantwortlich.
              </p>

              <p className="mt-8 text-text-muted text-sm">
                Stand: Dezember 2025
              </p>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
