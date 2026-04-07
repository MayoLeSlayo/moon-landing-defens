import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Retroreflectors on the Moon — Active Proof the Apollo Landings Happened',
  description: 'Laser retroreflectors placed on the moon by Apollo astronauts are actively used by observatories worldwide today. Scientists bounce lasers off them daily with millimeter precision — this alone proves the moon landing happened.',
  keywords: 'retroreflectors moon landing proof, apollo laser reflectors, lunar retroreflector experiment, proof moon landing happened today, lunar laser ranging apollo',
  openGraph: {
    title: 'Retroreflectors on the Moon — Active Proof the Apollo Landings Happened',
    description: 'Apollo retroreflectors are used by observatories worldwide today — undeniable proof the landings happened.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are lunar retroreflectors and why do they prove the moon landing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retroreflectors are arrays of corner-cube prisms placed on the lunar surface by Apollo astronauts. They reflect laser beams directly back to their source with extreme precision. The fact that observatories worldwide can bounce lasers off exact points on the Moon corresponding to Apollo landing sites — and receive photons back within milliseconds — proves physical objects are there. No hoax could place equipment on the Moon without going there."
      }
    },
    {
      "@type": "Question",
      "name": "Couldn't robotic probes have placed the retroreflectors without astronauts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Soviet Union tried exactly that — their Lunokhod rovers deployed two retroreflectors on the Moon. Those Soviet reflectors are still used today and are acknowledged by everyone. But acknowledging Soviet robotic missions proves that landing things on the Moon is real, and the Apollo retroreflectors are far larger and more precisely positioned than anything a 1960s robot could have deployed. Additionally, no one has ever suggested or documented a secret robotic Apollo program."
      }
    },
    {
      "@type": "Question",
      "name": "How precise are the measurements from Apollo retroreflectors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern lunar laser ranging achieves millimeter-level precision — measuring the Earth-Moon distance (roughly 384,400 km) to within 1 millimeter. That's accuracy to 1 part in 384 billion. The Apache Point Observatory Lunar Laser-ranging Operation (APOLLO) achieves this routinely. This precision requires a physical retroreflector at the exact coordinates of the Apollo landing sites."
      }
    },
    {
      "@type": "Question",
      "name": "Which observatories are currently using the Apollo retroreflectors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multiple independent observatories worldwide actively range off Apollo retroreflectors, including: Apache Point Observatory (APOLLO project) in New Mexico, Grasse Observatory in France, Matera Laser Ranging Observatory in Italy, Wettzell Observatory in Germany, and Haleakala Observatory in Hawaii. These are completely independent institutions in different countries with no connection to NASA."
      }
    },
    {
      "@type": "Question",
      "name": "Why can't you just bounce a laser off the bare lunar surface without a retroreflector?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can — and astronomers did so before Apollo. But the return signal from bare lunar regolith scatters in all directions, returning about 1 photon per 100 billion fired. Apollo retroreflectors return a focused, precisely-timed signal orders of magnitude stronger. The difference in return signal between a retroreflector location and surrounding bare surface is measurable and confirms a physical device is there."
      }
    }
  ]
};

const faqItems = [
  {
    q: "What are lunar retroreflectors and why do they prove the moon landing?",
    a: "Retroreflectors are arrays of corner-cube prisms placed on the lunar surface by Apollo astronauts. They reflect laser beams directly back to their source with extreme precision. The fact that observatories worldwide can bounce lasers off exact points on the Moon corresponding to Apollo landing sites — and receive photons back within milliseconds — proves physical objects are there. No hoax could place equipment on the Moon without going there."
  },
  {
    q: "Couldn't robotic probes have placed the retroreflectors without astronauts?",
    a: "The Soviet Union tried exactly that — their Lunokhod rovers deployed two retroreflectors on the Moon. Those Soviet reflectors are still used today and are acknowledged by everyone. But acknowledging Soviet robotic missions proves that landing things on the Moon is real, and the Apollo retroreflectors are far larger and more precisely positioned than anything a 1960s robot could have deployed. Additionally, no one has ever suggested or documented a secret robotic Apollo program."
  },
  {
    q: "How precise are the measurements from Apollo retroreflectors?",
    a: "Modern lunar laser ranging achieves millimeter-level precision — measuring the Earth-Moon distance (roughly 384,400 km) to within 1 millimeter. That's accuracy to 1 part in 384 billion. The Apache Point Observatory Lunar Laser-ranging Operation (APOLLO) achieves this routinely. This precision requires a physical retroreflector at the exact coordinates of the Apollo landing sites."
  },
  {
    q: "Which observatories are currently using the Apollo retroreflectors?",
    a: "Multiple independent observatories worldwide actively range off Apollo retroreflectors, including: Apache Point Observatory (APOLLO project) in New Mexico, Grasse Observatory in France, Matera Laser Ranging Observatory in Italy, Wettzell Observatory in Germany, and Haleakala Observatory in Hawaii. These are completely independent institutions in different countries with no connection to NASA."
  },
  {
    q: "Why can't you just bounce a laser off the bare lunar surface without a retroreflector?",
    a: "You can — and astronomers did so before Apollo. But the return signal from bare lunar regolith scatters in all directions, returning about 1 photon per 100 billion fired. Apollo retroreflectors return a focused, precisely-timed signal orders of magnitude stronger. The difference in return signal between a retroreflector location and surrounding bare surface is measurable and confirms a physical device is there."
  }
];

export default function RetroreflectorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={true} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex-1 bg-gray-50">
        <section className="page-hero text-white py-20 px-4 pt-28">
          <div className="page-hero-content max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 stellar-text">Retroreflectors on the Moon — Active Proof the Apollo Landings Happened</h1>
            <p className="text-2xl text-gray-100 font-light leading-relaxed">
              Scientists bounce lasers off Apollo equipment RIGHT NOW with millimeter precision. Any observatory in the world can verify this today — and dozens do.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Intro Block */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              You can verify the moon landings happened right now — with a laser and a telescope.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Apollo 11, 14, and 15 astronauts left retroreflector arrays on the lunar surface — precision instruments that bounce laser light directly back to its source. Since 1969, observatories on every continent have fired lasers at the Moon and received return pulses from the exact coordinates of the Apollo landing sites. This isn&apos;t a historical claim. It&apos;s happening today.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The measurement precision is now 1 millimeter over a 384,000-kilometer distance. That&apos;s not a rounding error — it&apos;s 1 part in 384 billion. Faking this from Earth is physically impossible. The retroreflectors are there because Apollo astronauts put them there.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="glass-morphism cosmic-glow p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-300 mb-2">5</div>
              <div className="text-sm text-gray-600">Active Arrays on Moon</div>
            </div>
            <div className="glass-morphism nebula-glow p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-green-300 mb-2">50+</div>
              <div className="text-sm text-gray-600">Years Operating</div>
            </div>
            <div className="glass-morphism p-6 rounded-xl text-center bg-white bg-opacity-10">
              <div className="text-5xl font-bold text-yellow-300 mb-2">1mm</div>
              <div className="text-sm text-gray-600">Precision Achieved</div>
            </div>
            <div className="glass-morphism cosmic-glow p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-300 mb-2">Daily</div>
              <div className="text-sm text-gray-600">Current Operations</div>
            </div>
          </div>

          {/* Current Active Proof */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-Time Verification Happening Now</h2>

            <div className="grid gap-6">
              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🔬 Active Scientific Experiments</h3>
                <p className="text-gray-800 leading-relaxed">
                  Scientists at observatories around the world bounce laser beams off retroreflectors left by Apollo 11, 14, and 15 missions every single day. These experiments achieve millimeter-level precision in measuring the Earth-Moon distance and continue to provide crucial data for testing Einstein&apos;s theory of relativity.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Current Operating Facilities:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://tmurphy.physics.ucsd.edu/apollo/apollo.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Apache Point Observatory (APOLLO) - New Mexico</a></li>
                    <li>• <a href="https://en.wikipedia.org/wiki/Apache_Point_Observatory_Lunar_Laser-ranging_Operation" target="_blank" rel="noopener noreferrer" className="hover:underline">APOLLO Project - Millimeter-precision ranging</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">📡 International Verification</h3>
                <p className="text-gray-800 leading-relaxed">
                  Multiple countries operate lunar laser ranging stations that independently verify the presence of Apollo retroreflectors. The French station at Grasse Observatory and other international facilities provide completely independent confirmation that these devices exist on the Moon.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">International Stations:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://earth-planets-space.springeropen.com/articles/10.1186/s40623-020-01243-w" target="_blank" rel="noopener noreferrer" className="hover:underline">Grasse Observatory, France - Two-way laser ranging success</a></li>
                    <li>• <a href="https://lunar.colorado.edu/laserranging.php" target="_blank" rel="noopener noreferrer" className="hover:underline">University of Colorado: Lunar Laser Ranging Network</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">⚡ Impossible to Fake</h3>
                <p className="text-gray-800 leading-relaxed">
                  The retroreflectors return laser light with unique signatures that prove they are physical objects on the lunar surface. Their precise positions match Apollo landing sites, and their degradation over 50+ years shows real space weathering effects that cannot be simulated from Earth.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Technical Verification:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://www.space.com/apollo-retroreflector-experiment-still-going-50-years-later.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Space.com: Why Apollo Reflector Experiment Still Operating 50 Years Later</a></li>
                    <li>• <a href="https://www.mdpi.com/2304-6732/10/11/1215" target="_blank" rel="noopener noreferrer" className="hover:underline">Tutorial on Retroreflectors Used in Lunar Laser Ranging</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">📈 Continuous Improvement</h3>
                <p className="text-gray-800 leading-relaxed">
                  Modern laser ranging has achieved unprecedented precision, routinely measuring the Earth-Moon distance to within 1 millimeter. This level of accuracy was impossible when Apollo missions first placed the retroreflectors, proving they are real physical objects that scientists continue to study and improve upon.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Scientific Achievements:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://iopscience.iop.org/article/10.1086/596748" target="_blank" rel="noopener noreferrer" className="hover:underline">IOPScience: Two Years of Millimeter-Precision Measurements</a></li>
                    <li>• <a href="https://spie.org/news/12-09-laser-ranging" target="_blank" rel="noopener noreferrer" className="hover:underline">SPIE: Lunar laser ranging - 40 years of high-level science</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Retroreflector Arrays on the Moon</h2>

            <div className="grid gap-6">
              <div className="p-6 border-l-4 border-evidence-green bg-green-50">
                <h3 className="text-xl font-semibold mb-3">Apollo 11 Array</h3>
                <p className="text-gray-800 mb-2">
                  <strong>Deployed:</strong> July 21, 1969 | <strong>Location:</strong> Sea of Tranquility
                </p>
                <p className="text-gray-800 mb-2">
                  <strong>Size:</strong> 100 corner cubes, 46cm × 46cm panel
                </p>
                <p className="text-gray-700">
                  The first retroreflector placed on the Moon, still actively returning laser signals after 50+ years.
                </p>
              </div>

              <div className="p-6 border-l-4 border-apollo-blue bg-blue-50">
                <h3 className="text-xl font-semibold mb-3">Apollo 14 Array</h3>
                <p className="text-gray-800 mb-2">
                  <strong>Deployed:</strong> February 5, 1971 | <strong>Location:</strong> Fra Mauro
                </p>
                <p className="text-gray-800 mb-2">
                  <strong>Size:</strong> 100 corner cubes, 46cm × 46cm panel
                </p>
                <p className="text-gray-700">
                  Second retroreflector array, providing additional ranging targets for increased precision.
                </p>
              </div>

              <div className="p-6 border-l-4 border-gray-400 bg-gray-50">
                <h3 className="text-xl font-semibold mb-3">Apollo 15 Array</h3>
                <p className="text-gray-800 mb-2">
                  <strong>Deployed:</strong> July 31, 1971 | <strong>Location:</strong> Hadley-Apennine
                </p>
                <p className="text-gray-800 mb-2">
                  <strong>Size:</strong> 300 corner cubes, 60cm × 60cm panel
                </p>
                <p className="text-gray-700">
                  Largest Apollo retroreflector, produces the strongest return signals and most precise measurements.
                </p>
              </div>
            </div>
          </div>

          {/* Scientific Applications */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Scientific Research</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Fundamental Physics</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Testing Einstein&apos;s theory of general relativity</li>
                  <li>• Measuring variations in Newton&apos;s gravitational constant</li>
                  <li>• Verifying the equivalence principle</li>
                  <li>• Studying lunar core dynamics</li>
                  <li>• Measuring Earth&apos;s rotation variations</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Ongoing Research</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lunar libration and tidal effects</li>
                  <li>• Gravitational wave detection preparation</li>
                  <li>• Solar system dynamics</li>
                  <li>• Lunar atmosphere studies</li>
                  <li>• Retroreflector aging analysis</li>
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
                  <a href="https://space-geodesy.nasa.gov/NSGN/sites/Apache_Point/Apache_Point.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    NASA: Apache Point Lunar Laser Ranging Station
                  </a>
                </h4>
                <p className="text-sm text-gray-600">Official NASA documentation of current lunar laser ranging operations and capabilities.</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">
                  <a href="https://ilrs.gsfc.nasa.gov/science/scienceContributions/lunar.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    International Laser Ranging Service: Lunar Laser Ranging
                  </a>
                </h4>
                <p className="text-sm text-gray-600">International coordination of lunar laser ranging science and technology developments.</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">
                  <a href="https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1969-059C-04" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    NASA NSSDCA: Laser Ranging Retroreflector
                  </a>
                </h4>
                <p className="text-sm text-gray-600">Official technical specifications and mission data for Apollo retroreflector experiments.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
