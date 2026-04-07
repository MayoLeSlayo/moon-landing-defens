import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: '30+ Countries Confirmed the 60s Moon Landings — Including Russia',
  description: 'Independent verification of the 1960s Apollo moon landings by over 30 nations worldwide, including Cold War rivals the Soviet Union and China.',
  keywords: 'countries confirmed 60s moon landings, russia confirmed apollo, soviet union moon landing verification, who confirmed the moon landing',
  openGraph: {
    title: '30+ Countries Confirmed the 60s Moon Landings — Including Russia',
    description: 'Cold War rivals the Soviet Union tracked and confirmed every 1960s Apollo mission in real time.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Did Russia confirm the 1960s moon landings?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Soviet Union independently tracked every Apollo mission using their Space Transmissions Corps. As America's primary Cold War adversary and the most technically capable rival in the space race, the USSR had every motive and ability to expose a hoax — and never did. Soviet scientists and officials have since confirmed the landings were real." }
    },
    {
      "@type": "Question",
      "name": "Why didn't Russia expose the moon landing hoax if it was faked?",
      "acceptedAnswer": { "@type": "Answer", "text": "Because there was nothing to expose. The Soviet Union was operating the most advanced space surveillance network in the world at the time and tracked Apollo missions in real time. Had any evidence of fraud existed, the propaganda value for the USSR during the Cold War would have been enormous. Their silence was not complicity — it was confirmation." }
    },
    {
      "@type": "Question",
      "name": "Which countries independently verified the Apollo moon landings?",
      "acceptedAnswer": { "@type": "Answer", "text": "Over 30 countries independently tracked or verified the Apollo missions, including the Soviet Union, United Kingdom (Jodrell Bank Observatory), Australia (Parkes Observatory), Japan (JAXA's later SELENE mission), Germany (Bochum Observatory), France, and Canada. Many of these nations also received and independently analyzed Apollo lunar samples." }
    },
    {
      "@type": "Question",
      "name": "Did China confirm the moon landings?",
      "acceptedAnswer": { "@type": "Answer", "text": "China has never disputed the Apollo moon landings. China's own lunar exploration program (Chang'e missions) has built upon and referenced Apollo-era science. Chinese scientists have studied Apollo lunar samples and the China National Space Administration has not challenged the historical record of the 1969 landings." }
    },
    {
      "@type": "Question",
      "name": "How many countries received moon rocks from Apollo?",
      "acceptedAnswer": { "@type": "Answer", "text": "NASA distributed Apollo lunar samples to scientists in over 30 countries, including Cold War rivals such as the Soviet Union. Every independent laboratory that analyzed these samples confirmed their extraterrestrial origin — the unique isotopic composition and mineral structure of lunar rocks cannot be replicated on Earth." }
    },
    {
      "@type": "Question",
      "name": "Could the 60s moon landings have been faked without other countries knowing?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. The technology required to fake a live moon landing broadcast — convincingly, in real time, across independent tracking stations in multiple countries simultaneously — did not exist in 1969. Countries including the Soviet Union, Australia, and the UK were tracking the missions with their own independent equipment and receiving signals directly from the spacecraft and lunar surface." }
    }
  ]
};

export default function CountriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={true} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="flex-1 bg-gray-50">
        <section className="page-hero text-white hero-section-lg px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="hero-h1-lg stellar-text">30+ Countries Confirmed the 60s Moon Landings</h1>
            <p className="text-xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto">
              When America landed on the moon in 1969, the world was watching — including its enemies. Allies, rivals, and neutral nations alike independently tracked, recorded, and confirmed the Apollo missions in real time. This is their testimony.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Intro */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">If the moon landings were faked, Russia would have exposed it. They didn&apos;t — because they couldn&apos;t.</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              One of the most overlooked pieces of evidence for the Apollo moon landings is just how many independent eyes were watching. The United States wasn&apos;t operating in a vacuum — it was in the middle of a space race with the Soviet Union, the most technically capable and politically motivated adversary imaginable. Both sides had every incentive to expose the other&apos;s failures and fabrications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over 30 nations — including Cold War rivals, neutral countries, and allies alike — independently tracked, confirmed, and in many cases received physical evidence from the Apollo missions. Their collective verification spans radio observatories, independent telemetry stations, lunar sample laboratories, and space agency records that still exist today. No coordinated global conspiracy has ever held for 50+ years. This one didn&apos;t need to — because it actually happened.
            </p>
          </div>

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

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <FaqAccordion items={[
              {
                q: "Did Russia confirm the 1960s moon landings?",
                a: "Yes. The Soviet Union independently tracked every Apollo mission using their Space Transmissions Corps. As America's primary Cold War adversary and the most technically capable rival in the space race, the USSR had every motive and ability to expose a hoax — and never did. Soviet scientists and officials have since confirmed the landings were real."
              },
              {
                q: "Why didn't Russia expose the moon landing hoax if it was faked?",
                a: "Because there was nothing to expose. The Soviet Union was operating the most advanced space surveillance network in the world at the time and tracked Apollo missions in real time. Had any evidence of fraud existed, the propaganda value for the USSR during the Cold War would have been enormous. Their silence was not complicity — it was confirmation."
              },
              {
                q: "Which countries independently verified the Apollo moon landings?",
                a: "Over 30 countries independently tracked or verified the Apollo missions, including the Soviet Union, United Kingdom (Jodrell Bank Observatory), Australia (Parkes Observatory), Japan (JAXA's later SELENE mission), Germany (Bochum Observatory), France, and Canada. Many of these nations also received and independently analyzed Apollo lunar samples."
              },
              {
                q: "Did China confirm the moon landings?",
                a: "China has never disputed the Apollo moon landings. China's own lunar exploration program (Chang'e missions) has built upon and referenced Apollo-era science. Chinese scientists have studied Apollo lunar samples and the China National Space Administration has not challenged the historical record of the 1969 landings."
              },
              {
                q: "How many countries received moon rocks from Apollo?",
                a: "NASA distributed Apollo lunar samples to scientists in over 30 countries, including Cold War rivals such as the Soviet Union. Every independent laboratory that analyzed these samples confirmed their extraterrestrial origin — the unique isotopic composition and mineral structure of lunar rocks cannot be replicated on Earth."
              },
              {
                q: "Could the 60s moon landings have been faked without other countries knowing?",
                a: "No. The technology required to fake a live moon landing broadcast — convincingly, in real time, across independent tracking stations in multiple countries simultaneously — did not exist in 1969. Countries including the Soviet Union, Australia, and the UK were tracking the missions with their own independent equipment and receiving signals directly from the spacecraft and lunar surface."
              },
            ]} />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Countries That Received Lunar Samples</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Soviet Union (Russia)', url: 'https://www.roscosmos.ru/' },
                { name: 'United Kingdom', url: 'https://www.gov.uk/government/organisations/uk-space-agency' },
                { name: 'France', url: 'https://cnes.fr/' },
                { name: 'Germany', url: 'https://www.dlr.de/' },
                { name: 'Japan', url: 'https://global.jaxa.jp/' },
                { name: 'Australia', url: 'https://www.space.gov.au/' },
                { name: 'Canada', url: 'https://www.asc-csa.gc.ca/' },
                { name: 'Switzerland', url: 'https://www.sbfi.admin.ch/sbfi/en/home/research-and-innovation/international-research-and-innovation-cooperation/swiss-space-office.html' },
                { name: 'Belgium', url: 'https://www.belspo.be/' },
                { name: 'Netherlands', url: 'https://www.spaceoffice.nl/' },
                { name: 'Italy', url: 'https://www.asi.it/' },
                { name: 'Sweden', url: 'https://www.snsb.se/' },
                { name: 'Norway', url: 'https://www.romsenter.no/en/' },
                { name: 'Spain', url: 'https://www.aee.gob.es/' },
                { name: 'Austria', url: 'https://www.ffg.at/en/austrian-space-agency' },
                { name: 'Denmark', url: 'https://ufm.dk/en/research-and-innovation/international-cooperation/esa' },
              ].map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 rounded-lg text-center hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-800 hover:text-blue-700">{name}</span>
                </a>
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