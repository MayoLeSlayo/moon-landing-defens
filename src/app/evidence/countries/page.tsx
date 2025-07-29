'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CountriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        <section className="nebula-gradient text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 stellar-text">30+ Countries Confirmed</h1>
            <p className="text-2xl text-gray-100 font-light leading-relaxed">
              International verification from allies and rivals alike
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Independent Tracking & Verification</h2>
            
            <div className="grid gap-6">
              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🇷🇺 Soviet Union (Cold War Rival)</h3>
                <p className="text-gray-800">
                  The USSR tracked Apollo missions with their Space Transmissions Corps, equipped with the latest surveillance technology. If anyone had motivation and capability to expose American deception, it was the Soviets during the height of the Cold War.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Official Sources:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://en.roscosmos.ru/" target="_blank" rel="noopener noreferrer" className="hover:underline">Roscosmos State Corporation (Russian Space Agency)</a></li>
                    <li>• <a href="https://space.stackexchange.com/questions/28211/in-what-ways-did-the-soviet-union-observe-the-apollo-moon-landings-closely" target="_blank" rel="noopener noreferrer" className="hover:underline">Space Exploration: Soviet Union tracking of Apollo missions</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🇬🇧 United Kingdom - Jodrell Bank Observatory</h3>
                <p className="text-gray-800">
                  Jodrell Bank independently tracked Apollo 11 descent, following the Eagle Lander down to the lunar surface and listening as the first humans walked on the moon.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Official Sources:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://www.gov.uk/government/organisations/uk-space-agency" target="_blank" rel="noopener noreferrer" className="hover:underline">UK Space Agency</a></li>
                    <li>• <a href="https://www.jb.man.ac.uk/history/tracking/part2.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Jodrell Bank&apos;s role in early space tracking activities</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🇦🇺 Australia - Parkes Observatory</h3>
                <p className="text-gray-800">
                  The Parkes radio telescope received and relayed television broadcasts from the moon, providing independent confirmation of the missions to the world.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Official Sources:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://www.space.gov.au/" target="_blank" rel="noopener noreferrer" className="hover:underline">Australian Space Agency</a></li>
                    <li>• <a href="https://www.csiro.au/en/about/facilities-collections/atnf/parkes-radio-telescope-murriyang/apollo-11-moon-landing" target="_blank" rel="noopener noreferrer" className="hover:underline">CSIRO: Apollo 11 Moon landing confirmation</a></li>
                  </ul>
                </div>
              </div>
              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🇫🇷 France - CNES Space Agency</h3>
                <p className="text-gray-800">
                  France&apos;s CNES space agency has been a strong supporter of lunar exploration and recently signed the Artemis Accords, reaffirming commitment to sustainable space exploration principles.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Official Sources:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://cnes.fr/en" target="_blank" rel="noopener noreferrer" className="hover:underline">CNES - Centre national d&apos;études spatiales</a></li>
                    <li>• <a href="https://www.nasa.gov/humans-in-space/france-signs-artemis-accords-as-french-space-agency-marks-milestone/" target="_blank" rel="noopener noreferrer" className="hover:underline">NASA: France signs Artemis Accords supporting lunar exploration</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🇩🇪 Germany - DLR Space Agency</h3>
                <p className="text-gray-800">
                  German facilities, including Bochum Observatory, independently tracked Apollo missions. Professor Heinz Kaminski provided confirmation of events independent of both Russian and U.S. space agencies.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Official Sources:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://www.dlr.de/en" target="_blank" rel="noopener noreferrer" className="hover:underline">DLR - German Aerospace Center</a></li>
                    <li>• <a href="https://www.dlr.de/en/latest/news/2024/return-to-the-moon" target="_blank" rel="noopener noreferrer" className="hover:underline">DLR: European Moon Mission control centre</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🇯🇵 Japan - JAXA Space Agency</h3>
                <p className="text-gray-800">
                  JAXA&apos;s SELENE mission provided direct photographic evidence of Apollo landing sites, including detection of the &quot;halo&quot; created by Apollo 15&apos;s lunar module engine exhaust plume.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Official Sources:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://global.jaxa.jp/" target="_blank" rel="noopener noreferrer" className="hover:underline">JAXA - Japan Aerospace Exploration Agency</a></li>
                    <li>• <a href="https://global.jaxa.jp/press/2008/05/20080520_kaguya_e.html" target="_blank" rel="noopener noreferrer" className="hover:underline">JAXA: Apollo 15 landing site &quot;halo&quot; observed by SELENE</a></li>
                  </ul>
                </div>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🇨🇦 Canada - CSA Space Agency</h3>
                <p className="text-gray-800">
                  Canadian engineers and companies made crucial contributions to Apollo missions, including building the Eagle lunar module&apos;s landing gear and providing spacecraft antenna technology.
                </p>
                <div className="mt-3 p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-blue-800 mb-2">Official Sources:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <a href="https://www.asc-csa.gc.ca/eng/" target="_blank" rel="noopener noreferrer" className="hover:underline">CSA - Canadian Space Agency</a></li>
                    <li>• <a href="https://www.asc-csa.gc.ca/eng/astronomy/moon-exploration/canada-role.asp" target="_blank" rel="noopener noreferrer" className="hover:underline">CSA: Canada&apos;s role in Moon exploration</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Countries That Received Lunar Samples</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Soviet Union', 'United Kingdom', 'France', 'Germany', 'Japan', 'Australia', 
                'Canada', 'Switzerland', 'Belgium', 'Netherlands', 'Italy', 'Sweden',
                'Norway', 'Spain', 'Austria', 'Denmark'
              ].map((country) => (
                <div key={country} className="p-3 bg-gray-50 rounded-lg text-center">
                  <span className="text-sm font-medium text-gray-800">{country}</span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600 mt-6 text-center">
              Every nation that analyzed Apollo samples confirmed their extraterrestrial origin
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}