import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How to Debate Moon Landing Conspiracy Theorists',
  description: 'Practical guide to debating moon landing conspiracy theories effectively. Win over the silent audience — not just the person you\'re arguing with.',
  keywords: 'how to debate conspiracy theorists, moon landing debate, debunking moon landing hoax, conspiracy theory argument tips',
  openGraph: {
    title: 'How to Debate Moon Landing Conspiracy Theorists',
    description: 'Win over the silent audience — not just the person you\'re arguing with.',
  },
};

export default function DebateTipsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={true} />

      <main className="flex-1 bg-gray-50">

        {/* Hero */}
        <section className="page-hero text-white hero-section-lg px-4">
          <div className="page-hero-content max-w-4xl mx-auto text-center">
            <h1 className="hero-h1-lg stellar-text">How to Win a Moon Landing Debate</h1>
            <p className="text-2xl text-gray-100 font-light leading-relaxed">
              Not by shouting louder. Not by burying them in links. By being the calmest, clearest, most credible voice in the room.
            </p>
          </div>
        </section>

        {/* Featured Intro */}
        <section className="py-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4">The core principle</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                You&apos;re not debating <em>them</em>.
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-400 leading-tight mt-2">
                You&apos;re debating for everyone watching.
              </h2>
            </div>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed border-l-2 border-gray-100 pl-10">
              <p>The scrollers. The ones who haven&apos;t committed their belief yet. They&apos;re watching — and that&apos;s who you&apos;re really talking to.</p>
              <p>We can&apos;t change the flat earther&apos;s mind. Debating them is like debating a fish on whether it needs water. The conclusion was never up for grabs.</p>
              <p>But the person three comments down who stumbled into the thread? They haven&apos;t decided yet. <strong className="text-gray-900">Your calm, sourced response is the one they&apos;ll remember.</strong></p>
            </div>
          </div>
        </section>

        {/* Quick Reference Cheat Sheet */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">The Cheat Sheet</h2>
            <p className="text-gray-500 text-center mb-10">11 principles. Master these and you&apos;ll win more than you lose.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: '01', label: 'Know Your Goal', href: '#tip-1' },
                { num: '02', label: 'Speak to the Fence-Sitters', href: '#tip-2' },
                { num: '03', label: 'Stay Calm', href: '#tip-3' },
                { num: '04', label: 'Read, Don\'t React', href: '#tip-4' },
                { num: '05', label: 'Ask Questions', href: '#tip-5' },
                { num: '06', label: 'Steelman Their Position', href: '#tip-6' },
                { num: '07', label: 'One Fact at a Time', href: '#tip-7' },
                { num: '08', label: 'Tell a Story', href: '#tip-8' },
                { num: '09', label: 'Spot Fallacies Gracefully', href: '#tip-9' },
                { num: '10', label: 'Choose Your Battlefield', href: '#tip-10' },
                { num: '11', label: 'Know When to Walk Away', href: '#tip-11' },
                { num: '→', label: 'Win the Invisible Audience', href: '#tip-2' },
              ].map(({ num, label, href }) => (
                <a key={num} href={href} className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-3 hover:bg-blue-50 hover:border-blue-300 transition-colors group">
                  <span className="text-2xl font-bold text-blue-500 flex-shrink-0 w-8 group-hover:text-blue-600">{num}</span>
                  <span className="text-sm font-semibold text-gray-700 leading-tight group-hover:text-blue-700">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Tips — main content */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Tip 1 */}
            <div id="tip-1" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-blue-600 px-8 py-5 flex items-center gap-4">
                <span className="text-6xl font-black text-blue-400 opacity-50 leading-none">01</span>
                <h2 className="text-2xl font-bold text-white">Know Your Goal: Persuasion vs. Performance</h2>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-4">Before entering a debate, ask yourself:</p>
                <blockquote className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 text-blue-900 text-lg font-medium italic mb-6">
                  &ldquo;Am I trying to persuade this person — or inform the audience watching?&rdquo;
                </blockquote>
                <p className="text-gray-700 mb-3">This distinction is everything. On social media, you&apos;re often not changing the mind of the person you&apos;re arguing with — you&apos;re planting seeds for the people quietly watching.</p>
                <p className="text-gray-700">Tone and clarity matter <em>as much</em> as accuracy. Performing with integrity — staying calm, confident, and clear — often speaks louder than any single fact.</p>
              </div>
            </div>

            {/* Tip 2 */}
            <div id="tip-2" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-emerald-600 px-8 py-5 flex items-center gap-4">
                <span className="text-6xl font-black text-emerald-400 opacity-50 leading-none">02</span>
                <h2 className="text-2xl font-bold text-white">The Invisible Audience: Speak to the Fence-Sitters</h2>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-4">Debating online isn&apos;t just about the person replying to you. It&apos;s about the <em>dozens, hundreds, or even thousands</em> of silent readers who see the thread — especially those who are undecided or unsure.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  {['Be kind, even when others aren\'t.', 'Be clear, even when the topic is messy.', 'Be credible, even if others mock you.'].map((tip) => (
                    <div key={tip} className="bg-emerald-50 rounded-xl p-4 text-emerald-800 font-medium text-sm text-center">{tip}</div>
                  ))}
                </div>
                <p className="text-gray-700">Your opponent may never change their mind — and that&apos;s fine. If one silent reader walks away with a better understanding, <strong>you&apos;ve won something real</strong>. In public debate, the true victory is persuasion by example, not domination by volume.</p>
              </div>
            </div>

            {/* Tips 3 & 4 — side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div id="tip-3" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-purple-600 px-6 py-4 flex items-center gap-3">
                  <span className="text-5xl font-black text-purple-400 opacity-50 leading-none">03</span>
                  <h2 className="text-xl font-bold text-white">Stay Calm, Stay Cool</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">If you lose your temper, you lose credibility. No matter how outrageous the claim, keep your tone professional, factual, and composed. A calm response builds trust with the audience and subtly positions you as the more reasonable party.</p>
                  <div className="bg-purple-50 rounded-xl p-4 text-purple-800 text-sm font-medium">
                    🔁 You don&apos;t need to respond instantly. Take time to think. Coming in calm is a power move.
                  </div>
                </div>
              </div>

              <div id="tip-4" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-orange-500 px-6 py-4 flex items-center gap-3">
                  <span className="text-5xl font-black text-orange-300 opacity-50 leading-none">04</span>
                  <h2 className="text-xl font-bold text-white">Read, Don&apos;t React</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">Don&apos;t just skim — <em>read</em> what your opponent is actually saying. Are they venting? Asking a genuine question? Confused? Just looking for a fight? Understanding their intent helps you respond with precision instead of noise.</p>
                  <div className="bg-orange-50 rounded-xl p-4 text-orange-800 text-sm font-medium">
                    Responding thoughtfully — not impulsively — is your power move.
                  </div>
                </div>
              </div>
            </div>

            {/* Tip 5 */}
            <div id="tip-5" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-red-600 px-8 py-5 flex items-center gap-4">
                <span className="text-6xl font-black text-red-400 opacity-50 leading-none">05</span>
                <h2 className="text-2xl font-bold text-white">Ask Questions, Don&apos;t Just Make Points</h2>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6">Instead of leading with rebuttals, try questions. They disrupt rehearsed rants, force critical thinking, and make you look curious instead of combative.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    '"What source are you using for that?"',
                    '"What would change your mind?"',
                    '"Have you seen the counterargument that…"',
                  ].map((q) => (
                    <div key={q} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-700 text-sm italic">{q}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tip 6 */}
            <div id="tip-6" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-indigo-600 px-8 py-5 flex items-center gap-4">
                <span className="text-6xl font-black text-indigo-400 opacity-50 leading-none">06</span>
                <h2 className="text-2xl font-bold text-white">Use the Steelman Technique</h2>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-4">Rather than mock their position, <em>summarize it better than they can</em>. This is called steelmanning — and it does three things: shows you&apos;re listening, earns respect, and creates space for real dialogue.</p>
                <blockquote className="bg-indigo-50 border-l-4 border-indigo-500 pl-6 py-4 text-indigo-900 text-lg italic mb-4">
                  &ldquo;If I understand you correctly, you&apos;re saying NASA couldn&apos;t have hidden a hoax that big without someone leaking it — right?&rdquo;
                </blockquote>
                <p className="text-gray-700">Now you can address the claim directly — without strawmanning it. The audience notices the difference.</p>
              </div>
            </div>

            {/* Tips 7 & 8 — side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div id="tip-7" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-yellow-500 px-6 py-4 flex items-center gap-3">
                  <span className="text-5xl font-black text-yellow-300 opacity-50 leading-none">07</span>
                  <h2 className="text-xl font-bold text-white">Don&apos;t Flood with Facts</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">Piling on links and stats feels powerful — but it rarely works. People shut down when overwhelmed. It feels like lecturing, not debating. Most people won&apos;t read your 12 links.</p>
                  <div className="bg-yellow-50 rounded-xl p-4 text-yellow-800 text-sm font-medium">
                    One clear fact, contextualized. Make it digestible. Make it stick.
                  </div>
                </div>
              </div>

              <div id="tip-8" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-green-600 px-6 py-4 flex items-center gap-3">
                  <span className="text-5xl font-black text-green-400 opacity-50 leading-none">08</span>
                  <h2 className="text-xl font-bold text-white">Tell a Story</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">Facts inform. Stories persuade. Use real-world anecdotes, analogies, or personal experiences to frame your argument. Stories are memorable — and they bypass defensive thinking.</p>
                  <blockquote className="bg-green-50 border-l-4 border-green-500 pl-4 py-3 text-green-800 text-sm italic">
                    &ldquo;My uncle worked on early satellite projects and explained how telemetry was cross-checked across multiple tracking stations…&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Tip 9 */}
            <div id="tip-9" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-pink-600 px-8 py-5 flex items-center gap-4">
                <span className="text-6xl font-black text-pink-400 opacity-50 leading-none">09</span>
                <h2 className="text-2xl font-bold text-white">Spot Fallacies Without Sounding Like a Snob</h2>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6">Pointing out logical fallacies is important — but do it with care. Philosophy jargon in the wrong context makes you look condescending, not credible.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <p className="text-red-600 text-xs font-bold uppercase tracking-wide mb-2">Don&apos;t say this</p>
                    <p className="text-red-800 font-semibold">&ldquo;That&apos;s a strawman, idiot.&rdquo;</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <p className="text-green-600 text-xs font-bold uppercase tracking-wide mb-2">Say this instead</p>
                    <p className="text-green-800 font-semibold">&ldquo;I think there&apos;s been a mix-up — I didn&apos;t say that. Let me clarify…&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips 10 & 11 — side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div id="tip-10" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-teal-600 px-6 py-4 flex items-center gap-3">
                  <span className="text-5xl font-black text-teal-400 opacity-50 leading-none">10</span>
                  <h2 className="text-xl font-bold text-white">Choose the Right Battlefield</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">Some conversations are better in DMs. Some are better left alone entirely. Ask yourself: Is this person debating in good faith? Is there a silent audience that benefits? Would a private message be more productive?</p>
                  <div className="bg-teal-50 rounded-xl p-4 text-teal-800 text-sm font-medium">
                    Strategic debating means choosing your venue as carefully as your argument.
                  </div>
                </div>
              </div>

              <div id="tip-11" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-gray-700 px-6 py-4 flex items-center gap-3">
                  <span className="text-5xl font-black text-gray-500 opacity-50 leading-none">11</span>
                  <h2 className="text-xl font-bold text-white">Know When to Walk Away</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">Winning isn&apos;t always about getting the last word. Sometimes it&apos;s knowing when to stop. Polite exits leave a lasting impression — especially on the audience.</p>
                  <div className="bg-gray-50 rounded-xl p-4 text-gray-600 text-sm italic space-y-2">
                    <p>&ldquo;I think we&apos;ll have to agree to disagree for now.&rdquo;</p>
                    <p>&ldquo;Stepping away but leaving these links for anyone curious.&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Final Thought */}
        <section className="bg-gray-900 py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-6">Final Thought</p>
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Debating effectively isn&apos;t about being right.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-blue-400 leading-tight mb-10">
              It&apos;s about being <em>heard</em>.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed">
              Whether you&apos;re discussing the moon landings or any other contested truth, the goal isn&apos;t to own someone. It&apos;s to engage in a way that encourages learning — even if that takes time, even if you never see the result. Someone is always watching. Make it worth their while.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
