'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WorkforcePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 pt-20">
        <section className="eclipse-gradient text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 stellar-text">400,000 People Worked on Apollo</h1>
            <p className="text-2xl text-gray-100 font-light leading-relaxed">
              The largest peacetime workforce mobilization in human history
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="glass-morphism cosmic-glow p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-300 mb-2">400,000</div>
              <div className="text-sm text-gray-600">Total Workers</div>
            </div>
            <div className="glass-morphism nebula-glow p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-green-300 mb-2">20,000</div>
              <div className="text-sm text-gray-600">Companies & Universities</div>
            </div>
            <div className="glass-morphism p-6 rounded-xl text-center bg-white bg-opacity-10">
              <div className="text-5xl font-bold text-yellow-300 mb-2">377,000</div>
              <div className="text-sm text-gray-600">Private Contractors</div>
            </div>
            <div className="glass-morphism cosmic-glow p-6 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-300 mb-2">33,200</div>
              <div className="text-sm text-gray-600">NASA Employees</div>
            </div>
          </div>

          {/* Impossibility of Silence */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Proves the Moon Landings Were Real</h2>
            
            <div className="grid gap-6">
              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🤐 Impossible to Keep Secret</h3>
                <p className="text-gray-800 leading-relaxed">
                  Conspiracy theories require that 400,000 people - including engineers, scientists, contractors, and their families - have kept silent for over 50 years. This includes people from rival companies, different political backgrounds, and international partners who had no loyalty to NASA or the U.S. government.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Supporting Research:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://www.nasa.gov/the-apollo-program/" target="_blank" rel="noopener noreferrer" className="hover:underline">NASA: Official Apollo Program documentation</a></li>
                    <li>• <a href="https://www.orlandosentinel.com/2019/07/08/over-400000-apollo-workers-helped-the-us-land-on-the-moon-here-are-some-of-their-stories/" target="_blank" rel="noopener noreferrer" className="hover:underline">Orlando Sentinel: Over 400,000 Apollo workers helped the U.S. land on the moon</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🏭 Distributed Across the Nation</h3>
                <p className="text-gray-800 leading-relaxed">
                  Work was spread across every U.S. state and involved over 20,000 separate companies and universities. From Boeing building the Saturn V first stage in New Orleans to MIT creating the guidance computer in Cambridge, the program&apos;s scale made deception impossible.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Supporting Research:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://apollo11space.com/the-workforce-behind-apollo-exploring-the-400000-people-who-made-the-moon-landing-possible/" target="_blank" rel="noopener noreferrer" className="hover:underline">Apollo11Space: The Workforce Behind Apollo</a></li>
                    <li>• <a href="https://apollo11space.com/apollo-program-and-private-companies/" target="_blank" rel="noopener noreferrer" className="hover:underline">Apollo11Space: Apollo Program and Private Companies</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">📊 Peak Employment Statistics</h3>
                <p className="text-gray-800 leading-relaxed">
                  At its peak in the mid-1960s, Apollo accounted for more than half of NASA&apos;s total spending. The program employed 33,200 federal employees and 377,000 contractors, making it the largest peacetime mobilization of human resources in history.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Supporting Research:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://en.wikipedia.org/wiki/Apollo_program" target="_blank" rel="noopener noreferrer" className="hover:underline">Wikipedia: Apollo program workforce statistics</a></li>
                    <li>• <a href="https://appel.nasa.gov/critical-knowledge/apollo-era-resources/" target="_blank" rel="noopener noreferrer" className="hover:underline">NASA APPEL: Apollo Era Resources</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🎖️ Individual Recognition</h3>
                <p className="text-gray-800 leading-relaxed">
                  These weren&apos;t anonymous workers - many have been interviewed, written books, received awards, and shared their stories publicly for decades. From Margaret Hamilton who led the software team to the thousands of engineers at contractors like North American Aviation and Grumman, their individual contributions are well-documented.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Supporting Research:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://www.nasa.gov/history/the-first-step-langleys-contributions-to-apollo/" target="_blank" rel="noopener noreferrer" className="hover:underline">NASA: The First Step - Langley&apos;s Contributions to Apollo</a></li>
                    <li>• <a href="https://www.nasa.gov/history/60-years-ago-nasa-signs-contract-for-apollo-command-and-service-modules/" target="_blank" rel="noopener noreferrer" className="hover:underline">NASA: Contract for Apollo Command and Service Modules</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contractor Breakdown */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Major Contractors and Their Roles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Spacecraft Manufacturers</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• North American Aviation - Command/Service Module</li>
                  <li>• Grumman Aircraft - Lunar Module</li>
                  <li>• Boeing - Saturn V First Stage</li>
                  <li>• North American - Saturn V Second Stage</li>
                  <li>• Douglas Aircraft - Saturn V Third Stage</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Technology Partners</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• MIT - Apollo Guidance Computer</li>
                  <li>• IBM - Saturn V Instrument Unit</li>
                  <li>• Rocketdyne - F-1 and J-2 Engines</li>
                  <li>• Hamilton Standard - Life Support Systems</li>
                  <li>• ILC Dover - Spacesuits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Verification Sources */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Official Documentation</h2>
            
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">
                  <a href="https://www.nasa.gov/wp-content/uploads/2023/03/sp-4102.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    NASA SP-4102: Managing NASA in the Apollo Era
                  </a>
                </h4>
                <p className="text-sm text-gray-600">Official NASA historical document detailing workforce management and contractor relationships during Apollo.</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">
                  <a href="https://www.quora.com/People-often-quote-400-000-as-the-number-of-employees-and-contractors-who-worked-on-the-Apollo-project-but-this-figure-doesnt-seem-realistic-to-me-So-is-it-actually-accurate-What-data-is-there-to-back-it-up" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Verification of 400,000 Figure
                  </a>
                </h4>
                <p className="text-sm text-gray-600">Analysis of the 400,000 workforce figure with supporting data and historical context.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}