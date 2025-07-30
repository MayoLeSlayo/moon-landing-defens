'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MissionsPage() {
  const missions = [
    { name: 'Apollo 11', date: 'July 20, 1969', crew: 'Armstrong, Aldrin, Collins', site: 'Sea of Tranquility' },
    { name: 'Apollo 12', date: 'November 19, 1969', crew: 'Conrad, Bean, Gordon', site: 'Ocean of Storms' },
    { name: 'Apollo 14', date: 'February 5, 1971', crew: 'Shepard, Mitchell, Roosa', site: 'Fra Mauro' },
    { name: 'Apollo 15', date: 'July 30, 1971', crew: 'Scott, Irwin, Worden', site: 'Hadley-Apennine' },
    { name: 'Apollo 16', date: 'April 21, 1972', crew: 'Young, Duke, Mattingly', site: 'Descartes Highlands' },
    { name: 'Apollo 17', date: 'December 11, 1972', crew: 'Cernan, Schmitt, Evans', site: 'Taurus-Littrow Valley' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 pt-20">
        <section className="space-gradient text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">6 Successful Moon Landings</h1>
            <p className="text-xl text-gray-200">
              Six crewed missions successfully landed on and returned from the moon
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid gap-6">
            {missions.map((mission, index) => (
              <div key={mission.name} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-evidence-green">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{mission.name}</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Date:</strong> {mission.date}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Crew:</strong> {mission.crew}
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Landing Site:</strong> {mission.site}
                    </p>
                  </div>
                  <div className="ml-6 text-right">
                    <div className="text-3xl font-bold text-evidence-green mb-2">
                      {index + 1}
                    </div>
                    <div className="text-sm text-gray-600">Mission</div>
                  </div>
                </div>
                
                {mission.name === 'Apollo 11' && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Historic First:</strong> Neil Armstrong and Buzz Aldrin became the first humans to walk on another celestial body, spending 21 hours on the lunar surface.
                    </p>
                  </div>
                )}
                
                {mission.name === 'Apollo 17' && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-800 text-sm">
                      <strong>Final Mission:</strong> Eugene Cernan and Harrison Schmitt (the only scientist-astronaut) spent the longest time on the moon - 75 hours on the surface.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission Achievements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-apollo-blue mb-2">12</div>
                <div className="text-sm text-gray-600">Humans Walked on Moon</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-evidence-green mb-2">842</div>
                <div className="text-sm text-gray-600">Pounds of Samples</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-700 mb-2">300+</div>
                <div className="text-sm text-gray-600">Hours on Surface</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}