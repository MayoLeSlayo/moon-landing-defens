import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: '842 Pounds of Moon Rocks — Proof the Apollo Missions Were Real',
  description: 'Moon rocks from Apollo missions have been independently analyzed by scientists in labs worldwide. Their unique properties — absent in any Earth rock — prove they came from the moon. Even Soviet and Chinese scientists agree.',
  keywords: 'moon rocks evidence, apollo lunar samples, are moon rocks real, moon rock analysis proof, 842 pounds moon rocks, lunar samples apollo proof',
  openGraph: {
    title: '842 Pounds of Moon Rocks — Proof the Apollo Missions Were Real',
    description: 'Independently analyzed by scientists worldwide — moon rocks prove Apollo happened.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do scientists know moon rocks are actually from the moon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Moon rocks have multiple properties that are impossible to fake: they are completely anhydrous (no water in their crystal structures, unlike all Earth rocks), show micrometeorite impact damage from billions of years without atmospheric protection, have unique isotopic ratios, and show vacuum crystallization patterns. Independent labs on multiple continents — including Soviet Cold War rivals — have all confirmed these properties."
      }
    },
    {
      "@type": "Question",
      "name": "Could NASA have faked the moon rocks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Moon rocks were distributed to scientists worldwide, including the Soviet Union during the height of the Cold War. Soviet geologists — who had every political motivation to expose a fake — analyzed the samples and never disputed their authenticity. Additionally, natural lunar meteorites found on Earth (from asteroid impacts on the Moon) have identical properties to Apollo samples, providing independent confirmation of what genuine lunar material looks like."
      }
    },
    {
      "@type": "Question",
      "name": "How many moon rocks did Apollo bring back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The six Apollo landing missions brought back approximately 382 kilograms (842 pounds) of lunar material across 2,415 individual samples. These ranged from tiny soil samples to a 26-pound rock brought back by Apollo 17. They are stored at the Lunar Sample Laboratory Facility at Johnson Space Center and have been studied continuously since 1969."
      }
    },
    {
      "@type": "Question",
      "name": "What makes moon rocks different from Earth rocks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Several key differences: (1) Complete absence of water in mineral crystal structures — all Earth rocks have trace water. (2) Micrometeorite impact craters visible under electron microscopes from 4+ billion years of unshielded space exposure. (3) Unique titanium and chromium isotope ratios inconsistent with any Earth formation process. (4) Evidence of vacuum crystallization in basalt minerals. (5) Paleomagnetic signatures from an ancient lunar magnetic field that no longer exists."
      }
    },
    {
      "@type": "Question",
      "name": "Have other countries confirmed Apollo moon rocks are real?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Soviet Union received Apollo samples and their geologists confirmed the lunar origin — despite being in direct geopolitical competition with the U.S. More recently, China's Chang'e 5 mission (2020) returned its own lunar samples, which have identical characteristics to Apollo samples. This modern independent verification from China puts the final nail in any faking theory."
      }
    }
  ]
};

const faqItems = [
  {
    q: "How do scientists know moon rocks are actually from the moon?",
    a: "Moon rocks have multiple properties that are impossible to fake: they are completely anhydrous (no water in their crystal structures, unlike all Earth rocks), show micrometeorite impact damage from billions of years without atmospheric protection, have unique isotopic ratios, and show vacuum crystallization patterns. Independent labs on multiple continents — including Soviet Cold War rivals — have all confirmed these properties."
  },
  {
    q: "Could NASA have faked the moon rocks?",
    a: "No. Moon rocks were distributed to scientists worldwide, including the Soviet Union during the height of the Cold War. Soviet geologists — who had every political motivation to expose a fake — analyzed the samples and never disputed their authenticity. Additionally, natural lunar meteorites found on Earth (from asteroid impacts on the Moon) have identical properties to Apollo samples, providing independent confirmation of what genuine lunar material looks like."
  },
  {
    q: "How many moon rocks did Apollo bring back?",
    a: "The six Apollo landing missions brought back approximately 382 kilograms (842 pounds) of lunar material across 2,415 individual samples. These ranged from tiny soil samples to a 26-pound rock brought back by Apollo 17. They are stored at the Lunar Sample Laboratory Facility at Johnson Space Center and have been studied continuously since 1969."
  },
  {
    q: "What makes moon rocks different from Earth rocks?",
    a: "Several key differences: (1) Complete absence of water in mineral crystal structures — all Earth rocks have trace water. (2) Micrometeorite impact craters visible under electron microscopes from 4+ billion years of unshielded space exposure. (3) Unique titanium and chromium isotope ratios inconsistent with any Earth formation process. (4) Evidence of vacuum crystallization in basalt minerals. (5) Paleomagnetic signatures from an ancient lunar magnetic field that no longer exists."
  },
  {
    q: "Have other countries confirmed Apollo moon rocks are real?",
    a: "Yes. The Soviet Union received Apollo samples and their geologists confirmed the lunar origin — despite being in direct geopolitical competition with the U.S. More recently, China's Chang'e 5 mission (2020) returned its own lunar samples, which have identical characteristics to Apollo samples. This modern independent verification from China puts the final nail in any faking theory."
  }
];

export default function MoonRocksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={true} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="page-hero text-white py-16 px-4 pt-28">
          <div className="page-hero-content max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">842 Pounds of Moon Rocks — Proof the Apollo Missions Were Real</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Independently analyzed by scientists worldwide, including Cold War rivals. Every lab confirms the same thing: these rocks came from the moon.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Intro Block */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Soviet Union analyzed Apollo moon rocks — and confirmed they were real. You can&apos;t fake that.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Six Apollo missions returned 842 pounds of lunar material in 2,415 individual samples. These weren&apos;t locked in a NASA vault — they were distributed to scientists worldwide, including the Soviet Union at the height of the Cold War. Soviet geologists had every political incentive to expose a fake. They never did, because the rocks are unmistakably not from Earth.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Moon rocks are completely anhydrous — not a trace of water in their crystal structures. Every Earth rock contains trace water. They carry micrometeorite impact scars from billions of years of unshielded space exposure. Their isotope ratios match no known Earth formation process. China&apos;s Chang&apos;e 5 mission (2020) returned independent lunar samples with identical properties. The evidence from multiple nations, across 55 years, is unanimous.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="card-modern p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">842</div>
              <div className="text-sm text-gray-600">Pounds Collected</div>
            </div>
            <div className="card-modern p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">6</div>
              <div className="text-sm text-gray-600">Apollo Missions</div>
            </div>
            <div className="card-modern p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">2415</div>
              <div className="text-sm text-gray-600">Individual Samples</div>
            </div>
            <div className="card-modern p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Years of Analysis</div>
            </div>
          </div>

          {/* Scientific Analysis */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Unique Characteristics Prove Lunar Origin</h2>

            <div className="grid gap-6">
              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🔬 Isotopic Signatures</h3>
                <p className="text-gray-800 leading-relaxed">
                  Moon rocks have oxygen isotope ratios identical to Earth but with different titanium, chromium, and tungsten isotope ratios. This proves they formed in the same part of the solar system as Earth but under different conditions - exactly what the Giant Impact hypothesis predicts for lunar formation.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">University Research Sources:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://www.pnas.org/doi/10.1073/pnas.2321070121" target="_blank" rel="noopener noreferrer" className="hover:underline">PNAS Study: &quot;Oxygen isotope identity of Earth and Moon&quot; - University research showing isotopic match at sub-ppm level</a></li>
                    <li>• <a href="https://openscholarship.wustl.edu/art_sci_etds/3314/" target="_blank" rel="noopener noreferrer" className="hover:underline">Washington University: &quot;Elemental and Isotopic Studies on Apollo Samples&quot; - 2024 doctoral research</a></li>
                    <li>• <a href="https://spj.science.org/doi/10.34133/space.0170" target="_blank" rel="noopener noreferrer" className="hover:underline">Space Journal: &quot;Isotopic Geochronological Constraints on Moon Formation&quot;</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🌋 Vacuum Formation</h3>
                <p className="text-gray-800 leading-relaxed">
                  Lunar basalts show clear signs of crystallization in a vacuum - gas bubbles that would never form under Earth&apos;s atmospheric pressure. The mineral structures are impossible to replicate in Earth laboratories without specialized vacuum chambers.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">University Research Sources:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2020GL088334" target="_blank" rel="noopener noreferrer" className="hover:underline">Brown University: &quot;Rethinking Lunar Mare Basalt Regolith Formation&quot; - Research on lava flow crystallization in vacuum</a></li>
                    <li>• <a href="https://www.nature.com/articles/s41598-024-79504-x" target="_blank" rel="noopener noreferrer" className="hover:underline">Scientific Reports: &quot;Vacuum heating to basaltic regolith simulant&quot; - Experimental vacuum effects on basalt</a></li>
                    <li>• <a href="https://www.sciencedirect.com/science/article/abs/pii/S0272884218331110" target="_blank" rel="noopener noreferrer" className="hover:underline">ScienceDirect: &quot;Vacuum sintered lunar regolith simulant&quot; - Study of vacuum crystallization processes</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">💧 Complete Absence of Water</h3>
                <p className="text-gray-800 leading-relaxed">
                  Moon rocks are completely anhydrous (water-free) at the mineral level. Earth rocks always contain trace water in their crystal structures. This fundamental difference would be impossible to fake and proves formation in the lunar environment.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">University Research Sources:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://www.lpi.usra.edu/publications/books/lunar_sourcebook/pdf/Chapter05.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Lunar and Planetary Institute: &quot;No hydrous minerals have ever been found in Moon samples&quot;</a></li>
                    <li>• <a href="https://sites.wustl.edu/meteoritesite/items/how-do-we-know-that-its-a-rock-from-the-moon/" target="_blank" rel="noopener noreferrer" className="hover:underline">Washington University: &quot;How we know it&apos;s a rock from the moon&quot; - Anhydrous mineral identification</a></li>
                    <li>• <a href="https://www.sciencedirect.com/science/article/abs/pii/S0377027309004028" target="_blank" rel="noopener noreferrer" className="hover:underline">ScienceDirect: &quot;Water contents of nominally anhydrous natural minerals&quot; - Comparative study</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">☄️ Micrometeorite Impact Features</h3>
                <p className="text-gray-800 leading-relaxed">
                  Lunar samples show extensive micrometeorite bombardment damage - tiny impact craters and glass spherules created by billions of years of exposure to space without atmospheric protection. This damage pattern is consistent with lunar surface exposure.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">University Research Sources:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://www.nature.com/articles/s41598-024-83392-6" target="_blank" rel="noopener noreferrer" className="hover:underline">Scientific Reports: &quot;Nanoscale characterization of space weathering in lunar samples&quot;</a></li>
                    <li>• <a href="https://reveals.gatech.edu/micrometeorite-impact-simulation" target="_blank" rel="noopener noreferrer" className="hover:underline">Georgia Tech: &quot;Micrometeorite Impact Simulation&quot; - Laboratory studies of impact features</a></li>
                    <li>• <a href="https://www.sciencedirect.com/science/article/abs/pii/S0012821X1930576X" target="_blank" rel="noopener noreferrer" className="hover:underline">Earth and Planetary Science Letters: &quot;Space weathering by simulated micrometeorite bombardment&quot;</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🧲 Magnetic Properties</h3>
                <p className="text-gray-800 leading-relaxed">
                  Some lunar rocks are magnetized, indicating they cooled in the presence of an ancient lunar magnetic field that no longer exists. This paleomagnetic signature provides evidence of the moon&apos;s geological history and early magnetic dynamo.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">University Research Sources:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/2023GL105152" target="_blank" rel="noopener noreferrer" className="hover:underline">Stanford/Brown Universities: &quot;Establishing a Lunar Origin for Paleomagnetic Records in Apollo Samples&quot;</a></li>
                    <li>• <a href="https://www.rochester.edu/newscenter/moons-magnetic-shield-lunar-samples-484972/" target="_blank" rel="noopener noreferrer" className="hover:underline">University of Rochester: &quot;Lunar samples solve mystery of moon&apos;s magnetic shield&quot;</a></li>
                    <li>• <a href="https://news.mit.edu/2020/3-questions-ancient-moons-missing-magnetism-1222" target="_blank" rel="noopener noreferrer" className="hover:underline">MIT: &quot;3 Questions on the ancient moon&apos;s missing magnetism&quot; - Paleomagnetic research</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* International Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Global Scientific Analysis</h2>
            <p className="text-gray-700 mb-6">
              Moon rock samples have been distributed to and analyzed by laboratories in countries around the world, including nations that were geopolitical rivals of the United States during the Cold War.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Countries with Apollo Samples</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Soviet Union/Russia</li>
                  <li>• United Kingdom</li>
                  <li>• France</li>
                  <li>• Germany</li>
                  <li>• Japan</li>
                  <li>• Australia</li>
                  <li>• Canada</li>
                  <li>• Switzerland</li>
                  <li>• Belgium</li>
                  <li>• And many others...</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Independent Confirmation</h4>
                <p className="text-sm text-gray-700">
                  Every laboratory that has analyzed Apollo samples has confirmed their extraterrestrial origin. Soviet scientists, despite being Cold War adversaries, never disputed the authenticity of the samples they received and analyzed.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison with Other Samples */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Confirmation from Other Sources</h2>

            <div className="grid gap-6">
              <div className="p-6 border-l-4 border-evidence-green bg-green-50">
                <h3 className="text-xl font-semibold mb-3">Luna Program Samples (Soviet Union)</h3>
                <p className="text-gray-800">
                  The Soviet Luna 16, 20, and 24 missions returned small amounts of lunar material (326 grams total). These samples have identical characteristics to Apollo samples, providing independent confirmation of lunar composition from a rival space program.
                </p>
              </div>

              <div className="p-6 border-l-4 border-apollo-blue bg-blue-50">
                <h3 className="text-xl font-semibold mb-3">Chang&apos;e Samples (China)</h3>
                <p className="text-gray-800">
                  China&apos;s Chang&apos;e 5 mission (2020) returned 1.7 kg of lunar samples. Analysis by Chinese scientists confirms the same unique properties as Apollo and Luna samples, providing modern verification of lunar characteristics.
                </p>
              </div>

              <div className="p-6 border-l-4 border-gray-400 bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">Lunar Meteorites</h3>
                <p className="text-gray-800">
                  Natural lunar meteorites found on Earth (ejected by asteroid impacts) have identical isotopic signatures and mineral compositions to Apollo samples. These provide an independent source of lunar material for comparison.
                </p>
              </div>
            </div>
          </div>

          {/* Research Applications */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ongoing Scientific Research</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Current Studies</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lunar formation and early history</li>
                  <li>• Solar system evolution</li>
                  <li>• Impact cratering processes</li>
                  <li>• Volcanic activity on the moon</li>
                  <li>• Resource potential for future missions</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Future Applications</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Planning for lunar base construction</li>
                  <li>• Understanding space weathering</li>
                  <li>• Developing lunar resource extraction</li>
                  <li>• Comparative planetology studies</li>
                  <li>• Calibrating remote sensing instruments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <FaqAccordion items={faqItems} />
          </div>

          {/* Key Sources */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Authoritative Sources</h2>

            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">
                  <a href="https://curator.jsc.nasa.gov/lunar/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    NASA Lunar Sample Laboratory Facility
                  </a>
                </h4>
                <p className="text-sm text-gray-600">Official repository and curator of Apollo lunar samples with detailed databases and research publications.</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">
                  <a href="https://www.lpi.usra.edu/lunar/samples/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Lunar and Planetary Institute Sample Database
                  </a>
                </h4>
                <p className="text-sm text-gray-600">Comprehensive database of lunar sample analyses and research publications from laboratories worldwide.</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">
                  <a href="https://www.nature.com/articles/s41561-019-0486-3" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Nature Geoscience: &quot;Apollo sample 73002&quot;
                  </a>
                </h4>
                <p className="text-sm text-gray-600">Recent peer-reviewed research on pristine Apollo samples, demonstrating ongoing scientific value and authenticity.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
