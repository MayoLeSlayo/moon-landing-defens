import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: '400,000 People Built Apollo — Why the Moon Landing Can\'t Be a Hoax',
  description: 'Over 400,000 engineers and workers across 20,000 companies built the Apollo program. A conspiracy requiring this many people cannot stay secret for 50+ years — and no one has ever come forward.',
  keywords: 'apollo workforce 400000, moon landing secret conspiracy impossible, how many people worked on apollo, apollo program workers, moon landing hoax debunked',
  openGraph: {
    title: '400,000 People Built Apollo — Why the Moon Landing Can\'t Be a Hoax',
    description: 'A conspiracy requiring 400,000 people across 20,000 companies cannot stay secret for 50+ years.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many people worked on the Apollo moon landing program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At its peak in the mid-1960s, the Apollo program employed approximately 400,000 people — 33,200 NASA federal employees and roughly 377,000 private contractors across more than 20,000 companies and universities. This made it the largest peacetime mobilization of human resources in American history."
      }
    },
    {
      "@type": "Question",
      "name": "Why does the large workforce prove the moon landings weren't faked?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For the moon landing to be a hoax, all 400,000 workers would need to know they were faking it and agree to lie about it — forever. In reality, most workers built real hardware for a real mission: spacecraft, engines, computers, spacesuits, launch equipment. The number of people who would need to actively lie (vs. simply build what they were contracted to build) is still enormous. And in 55+ years, not one credible whistleblower has emerged."
      }
    },
    {
      "@type": "Question",
      "name": "Has anyone from the Apollo program ever claimed the moon landing was faked?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No credible Apollo insider has ever claimed the landings were faked. Thousands of engineers, contractors, and NASA employees have been interviewed, written memoirs, and given public talks for decades. None have alleged a hoax. The closest anyone gets are retired workers expressing minor frustrations about bureaucracy — not claims of fabrication."
      }
    },
    {
      "@type": "Question",
      "name": "Who were the major companies involved in building the Apollo spacecraft?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "North American Aviation built the Command and Service Module. Grumman Aircraft built the Lunar Module. Boeing, North American, and Douglas built the three stages of the Saturn V rocket. MIT built the Apollo Guidance Computer. Rocketdyne built the F-1 and J-2 engines. IBM built the Saturn V instrument unit. These were major corporations with thousands of employees each — not small secretive operations."
      }
    },
    {
      "@type": "Question",
      "name": "Could a small inner group have faked the landings while the rest of the workforce was kept in the dark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The physical hardware built for Apollo — Saturn V rockets, lunar modules, spacesuits, ground control systems — was real. Engineers tested it, broke it, fixed it, and watched it launch. The Lunar Module alone was built by 7,000 Grumman employees over years of real development. You cannot fake 55 years of documented engineering history across 20,000 companies with a small inner circle."
      }
    }
  ]
};

const faqItems = [
  {
    q: "How many people worked on the Apollo moon landing program?",
    a: "At its peak in the mid-1960s, the Apollo program employed approximately 400,000 people — 33,200 NASA federal employees and roughly 377,000 private contractors across more than 20,000 companies and universities. This made it the largest peacetime mobilization of human resources in American history."
  },
  {
    q: "Why does the large workforce prove the moon landings weren't faked?",
    a: "For the moon landing to be a hoax, all 400,000 workers would need to know they were faking it and agree to lie about it — forever. In reality, most workers built real hardware for a real mission: spacecraft, engines, computers, spacesuits, launch equipment. The number of people who would need to actively lie (vs. simply build what they were contracted to build) is still enormous. And in 55+ years, not one credible whistleblower has emerged."
  },
  {
    q: "Has anyone from the Apollo program ever claimed the moon landing was faked?",
    a: "No credible Apollo insider has ever claimed the landings were faked. Thousands of engineers, contractors, and NASA employees have been interviewed, written memoirs, and given public talks for decades. None have alleged a hoax. The closest anyone gets are retired workers expressing minor frustrations about bureaucracy — not claims of fabrication."
  },
  {
    q: "Who were the major companies involved in building the Apollo spacecraft?",
    a: "North American Aviation built the Command and Service Module. Grumman Aircraft built the Lunar Module. Boeing, North American, and Douglas built the three stages of the Saturn V rocket. MIT built the Apollo Guidance Computer. Rocketdyne built the F-1 and J-2 engines. IBM built the Saturn V instrument unit. These were major corporations with thousands of employees each — not small secretive operations."
  },
  {
    q: "Could a small inner group have faked the landings while the rest of the workforce was kept in the dark?",
    a: "No. The physical hardware built for Apollo — Saturn V rockets, lunar modules, spacesuits, ground control systems — was real. Engineers tested it, broke it, fixed it, and watched it launch. The Lunar Module alone was built by 7,000 Grumman employees over years of real development. You cannot fake 55 years of documented engineering history across 20,000 companies with a small inner circle."
  }
];

export default function WorkforcePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={true} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex-1 bg-gray-50">
        <section className="page-hero text-white hero-section-lg px-4">
          <div className="page-hero-content max-w-5xl mx-auto text-center">
            <h1 className="hero-h1-lg stellar-text">400,000 People Worked on Apollo — That&apos;s Why It Can&apos;t Be a Hoax</h1>
            <p className="text-2xl text-gray-100 font-light leading-relaxed">
              The largest peacetime workforce mobilization in human history. 400,000 people. 20,000 companies. 55+ years of silence — because there was nothing to hide.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Intro Block */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Secrets don&apos;t survive 400,000 people for 55 years. This one hasn&apos;t leaked because there&apos;s nothing to leak.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The Apollo program was the largest engineering project in human history. At its peak, over 400,000 Americans worked on it — engineers, machinists, software developers, seamstresses sewing spacesuits, welders building rocket stages. They worked at Boeing in New Orleans, Grumman on Long Island, MIT in Cambridge, and thousands of other locations across every U.S. state.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Conspiracy theories require that every one of these people either knew they were faking the moon landing and stayed silent, or was somehow deceived without noticing. Neither is plausible. These workers built real hardware — hardware that launched, flew, and returned. The Saturn V rocket alone stands 363 feet tall. You can&apos;t fake that with a film set.
            </p>
          </div>

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
                  Conspiracy theories require that 400,000 people — including engineers, scientists, contractors, and their families — have kept silent for over 50 years. This includes people from rival companies, different political backgrounds, and international partners who had no loyalty to NASA or the U.S. government.
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
                  These weren&apos;t anonymous workers — many have been interviewed, written books, received awards, and shared their stories publicly for decades. From Margaret Hamilton who led the software team to the thousands of engineers at contractors like North American Aviation and Grumman, their individual contributions are well-documented.
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

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <FaqAccordion items={faqItems} />
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
