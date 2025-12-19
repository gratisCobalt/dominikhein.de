// revolutionAIR Image Gallery
import titelbild from '../assets/jufo/Jugend_forscht_revolutionAIR_Titelbild_jpg.webp'
import appScreenshot from '../assets/jufo/Jugend_forscht_revolutionAIR_App_Screenshot_png.webp'
import nahaufnahme from '../assets/jufo/Jugend_forscht_revolutionAIR_Nahaufnahme_Luftdesinfektionsger_t_jpeg.webp'
import heraeusLab from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_auf_dem_Labor_von_Heraeus_von_der_Spekrumsanalyse_JPG.webp'
import vorbereitung from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_vom_Bundeswettbewerb_Zusammenarbeit_Vorbereitung_jpg.webp'
import afterparty from '../assets/jufo/Jugend_forscht_revolutionAIR_Bundeswettbewerb_Afterparty_jpg.webp'
import habeck1 from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_mit_Robert_Habeck_Wirtschaftsminister_JPG.webp'
import habeck2 from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_mit_Robert_Habeck_Wirtschaftsminister_2_JPG.webp'
import lindner1 from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_mit_Christian_Lindner_jpg.webp'
import lindner2 from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_mit_Christian_Lindner_2_jpg.webp'
import lindnerGespraech from '../assets/jufo/Jugend_forscht_revolutionAIR_Gespr_ch_mit_Christian_Lindner_jpg.webp'
import amthor from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_mit_Philipp_Amthor_jpeg.webp'
import nadineSchoen from '../assets/jufo/Jugend_forscht_revolutionAIR_Bild_mit_Nadine_Sch_n_Bundestag_jpg.webp'
import peterHeidt from '../assets/jufo/Gespr_ch_mit_Peter_Heidt_Bundestag_jpg.webp'
import oberbuergermeister from '../assets/jufo/Jugend_forscht_revolutionAIR_Oberb_rgermeister_jpg.webp'
import ralf from '../assets/jufo/Dominik_Bild_mit_Ralf_von_Wissen_macht_Ahh_JPG.webp'
import hannoverGruppenbild from '../assets/jufo/Jugend_forscht_revolutionAIR_Gruppenbild_Hannovermesse_Alle_Mitgleider_vom_Stand_des_Forschungsministeriums_jpg.webp'
import hannoverMinisterin from '../assets/jufo/Jugend_forscht_revolutionAIR_Hannover_Messe_Forschungsministerin_jpeg.webp'

export interface GalleryImage {
  src: string
  alt: string
  caption: string
  isPortrait?: boolean
}

export interface StorySection {
  title: string
  content: string
  images: GalleryImage[]
}

export const revolutionairImages = {
  titelbild,
  appScreenshot,
  nahaufnahme,
  heraeusLab,
  vorbereitung,
  afterparty,
  habeck1,
  habeck2,
  lindner1,
  lindner2,
  lindnerGespraech,
  amthor,
  nadineSchoen,
  peterHeidt,
  oberbuergermeister,
  ralf,
  hannoverGruppenbild,
  hannoverMinisterin,
}

export const revolutionairStory: StorySection[] = [
  {
    title: 'Die Idee',
    content: `Alles begann mitten in der Corona-Pandemie. Während die Welt über Masken und Abstandsregeln debattierte, fragten wir uns: Warum bekämpfen wir das Virus nicht direkt in der Luft? Schulen sollten regelmäßig lüften, aber im Winter war das kaum praktikabel. Luftfilter waren teuer und ineffizient. Wir wollten etwas Besseres entwickeln.

Die Idee: UVC-Licht zur Desinfektion von Raumluft. Aber nicht mit den klobigen, quecksilberhaltigen UV-Röhren – sondern mit modernen UVC-LEDs. Kompakt, sicher, effizient. So entstand revolutionAIR.`,
    images: [
      { src: titelbild, alt: 'revolutionAIR Titelbild', caption: 'Das revolutionAIR Team: Dominik Hein, Jaro Filip und Max Pfannkuch' },
    ],
  },
  {
    title: 'Die Entwicklung',
    content: `Monatelange Entwicklungsarbeit folgte. Wir designten ein modulares Gehäuse, entwickelten eine spezielle LED-Anordnung für maximale Desinfektion und programmierten die smarte Steuerung. Das Herzstück: 14 UVC-LEDs, angeordnet auf einem Aluminium-Kühlkörper, der gleichzeitig für Turbulenzen in der durchströmenden Luft sorgt – so gibt es keine toten Winkel.

Die eigentliche Innovation war aber die intelligente Steuerung: Ein Machine-Learning-Modell erkennt Muster im Raumnutzungsverhalten und passt die Desinfektionsleistung automatisch an. Bei einer Konferenz läuft das Gerät auf Hochtouren, nachts im leeren Büro nur minimal – das spart Energie und erhöht die LED-Lebensdauer.`,
    images: [
      { src: nahaufnahme, alt: 'Nahaufnahme des Luftdesinfektionsgeräts', caption: 'Das Herzstück: 14 UVC-LEDs auf einem Aluminium-Kühlkörper' },
      { src: appScreenshot, alt: 'revolutionAIR App Screenshot', caption: 'Die Smartphone-App zur Steuerung und Überwachung', isPortrait: true },
    ],
  },
  {
    title: 'Die Wissenschaft',
    content: `Um unsere Behauptungen zu belegen, brauchten wir harte Daten. Wir führten mikrobiologische Tests durch und konnten eine Reduktion von 99,27% der Bakterien nachweisen. Bei Heraeus Noblelight durften wir unsere LEDs im professionellen Labor vermessen lassen – ein unvergessliches Erlebnis, das uns die Spektralanalyse unserer LEDs ermöglichte.

Die Ergebnisse übertrafen unsere Erwartungen: Bei 120 Sekunden Expositionszeit erreichten wir eine Log2-Desinfektion. Da die getesteten Bakterien resistenter sind als SARS-CoV-2, ist die tatsächliche Wirkung gegen Coronaviren noch höher.`,
    images: [
      { src: heraeusLab, alt: 'Spektrumsanalyse bei Heraeus', caption: 'Spektrumsanalyse unserer UVC-LEDs im Labor von Heraeus Noblelight' },
      { src: vorbereitung, alt: 'Vorbereitung auf den Bundeswettbewerb', caption: 'Letzte Vorbereitungen vor dem Bundeswettbewerb' },
    ],
  },
  {
    title: 'Der Bundeswettbewerb',
    content: `Mai 2022: Der Bundeswettbewerb von Jugend forscht in Lübeck. Fünf Tage intensive Präsentationen, Jury-Gespräche und der Austausch mit anderen jungen Forschern aus ganz Deutschland. Die Anspannung war greifbar, aber auch die Begeisterung für die vielen innovativen Projekte um uns herum.

Dann der große Moment: Bundessieg im Bereich Technik. Wir konnten es kaum fassen. All die Arbeit, die durchwachten Nächte, die gescheiterten Experimente – sie hatten sich ausgezahlt.`,
    images: [
      { src: afterparty, alt: 'Bundeswettbewerb Afterparty', caption: 'Feier nach der Preisverleihung – ein unvergesslicher Abend' },
    ],
  },
  {
    title: 'Berlin: Politik trifft Innovation',
    content: `Als Bundessieger wurden wir nach Berlin eingeladen. Was folgte, übertraf alle Erwartungen: Wir präsentierten revolutionAIR im Bundestag und trafen hochrangige Politiker, die sich für unser Projekt interessierten.

Robert Habeck, der Bundeswirtschaftsminister, nahm sich Zeit für ein ausführliches Gespräch über erneuerbare Energien und Innovationsförderung. Christian Lindner diskutierte mit uns über Unternehmertum und die Förderung junger Talente. Philipp Amthor, Nadine Schön und Peter Heidt zeigten echtes Interesse an den technischen Details unserer Entwicklung.`,
    images: [
      { src: habeck1, alt: 'Mit Robert Habeck', caption: 'Im Gespräch mit Bundeswirtschaftsminister Robert Habeck' },
      { src: habeck2, alt: 'Präsentation bei Robert Habeck', caption: 'Präsentation von revolutionAIR' },
      { src: lindnerGespraech, alt: 'Gespräch mit Christian Lindner', caption: 'Diskussion mit Bundesfinanzminister Christian Lindner' },
      { src: lindner1, alt: 'Mit Christian Lindner', caption: 'Mit Christian Lindner im Bundestag' },
      { src: lindner2, alt: 'Team mit Christian Lindner', caption: '' },
      { src: amthor, alt: 'Mit Philipp Amthor', caption: 'Mit MdB Philipp Amthor' },
      { src: nadineSchoen, alt: 'Mit Nadine Schön', caption: 'Mit MdB Nadine Schön' },
      { src: peterHeidt, alt: 'Gespräch mit Peter Heidt', caption: 'Im Gespräch mit MdB Peter Heidt' },
    ],
  },
  {
    title: 'Hannover Messe 2023',
    content: `Im April 2023 folgte der nächste Höhepunkt: Die Hannover Messe, die weltweit größte Industriemesse. Als Teil des Stands des Bundesministeriums für Bildung und Forschung durften wir revolutionAIR einem internationalen Fachpublikum präsentieren.

Besonders geehrt fühlten wir uns durch den Besuch der Bundesforschungsministerin, die sich Zeit nahm, um unser Projekt kennenzulernen und mit uns über die Zukunft der Luftdesinfektion zu sprechen.`,
    images: [
      { src: hannoverMinisterin, alt: 'Mit der Forschungsministerin', caption: 'Präsentation vor der Bundesforschungsministerin' },
      { src: hannoverGruppenbild, alt: 'Gruppenbild Hannover Messe', caption: 'Das gesamte Team am Stand des Forschungsministeriums' },
    ],
  },
  {
    title: 'Weitere Highlights',
    content: `Die Reise brachte noch viele weitere besondere Momente. Wir trafen den Oberbürgermeister unserer Stadt und bekamen die Gelegenheit, bei exklusiven Events unser Projekt zu präsentieren. Besonders in Erinnerung geblieben ist das Treffen mit Ralf Caspers von "Wissen macht Ah!" – ein Kindheitsheld, der sich ehrlich für unsere Forschung interessierte.`,
    images: [
      { src: oberbuergermeister, alt: 'Mit dem Oberbürgermeister', caption: 'Empfang beim Oberbürgermeister' },
      { src: ralf, alt: 'Mit Ralf von Wissen macht Ah!', caption: 'Mit Ralf Caspers von "Wissen macht Ah!"' },
    ],
  },
]

export const revolutionairTechSpecs = [
  { label: 'Desinfektionsrate', value: '99,27%' },
  { label: 'Luftdurchsatz', value: '144 m³/h' },
  { label: 'UVC-Wellenlänge', value: '275 nm' },
  { label: 'Anzahl LEDs', value: '14 Stück' },
  { label: 'Bakterienreduktion (120s)', value: 'Log2' },
  { label: 'Stromversorgung', value: '12V USB-PD' },
]
