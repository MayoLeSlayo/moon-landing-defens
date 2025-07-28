'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CountriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        <section className="space-gradient text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">30+ Countries Confirmed</h1>
            <p className="text-xl text-gray-200">
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
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🇬🇧 United Kingdom - Jodrell Bank Observatory</h3>
                <p className="text-gray-800">
                  Jodrell Bank independently tracked Apollo 11 descent, following the Eagle Lander down to the lunar surface and listening as the first humans walked on the moon.
                </p>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">🇦🇺 Australia - Parkes Observatory</h3>
                <p className="text-gray-800">
                  The Parkes radio telescope received and relayed television broadcasts from the moon, providing independent confirmation of the missions to the world.
                </p>
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