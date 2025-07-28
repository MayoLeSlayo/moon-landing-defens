'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MoonRocksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="space-gradient text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">842 Pounds of Moon Rocks</h1>
            <p className="text-xl text-gray-200">
              Comprehensive analysis of lunar samples proves extraterrestrial origin
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-apollo-blue mb-2">842</div>
              <div className="text-sm text-gray-600">Pounds Collected</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-evidence-green mb-2">6</div>
              <div className="text-sm text-gray-600">Apollo Missions</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-gray-700 mb-2">2415</div>
              <div className="text-sm text-gray-600">Individual Samples</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-apollo-blue mb-2">50+</div>
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
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🌋 Vacuum Formation</h3>
                <p className="text-gray-800 leading-relaxed">
                  Lunar basalts show clear signs of crystallization in a vacuum - gas bubbles that would never form under Earth&apos;s atmospheric pressure. The mineral structures are impossible to replicate in Earth laboratories without specialized vacuum chambers.
                </p>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">💧 Complete Absence of Water</h3>
                <p className="text-gray-800 leading-relaxed">
                  Moon rocks are completely anhydrous (water-free) at the mineral level. Earth rocks always contain trace water in their crystal structures. This fundamental difference would be impossible to fake and proves formation in the lunar environment.
                </p>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">☄️ Micrometeorite Impact Features</h3>
                <p className="text-gray-800 leading-relaxed">
                  Lunar samples show extensive micrometeorite bombardment damage - tiny impact craters and glass spherules created by billions of years of exposure to space without atmospheric protection. This damage pattern is consistent with lunar surface exposure.
                </p>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🧲 Magnetic Properties</h3>
                <p className="text-gray-800 leading-relaxed">
                  Some lunar rocks are magnetized, indicating they cooled in the presence of an ancient lunar magnetic field that no longer exists. This paleomagnetic signature provides evidence of the moon&apos;s geological history and early magnetic dynamo.
                </p>
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