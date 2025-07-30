'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DebateTipsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="space-gradient text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">How To Debate More Effectively</h1>
            <p className="text-xl text-gray-200">
              Master the art of productive dialogue and evidence-based discussion
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              
              {/* Introduction */}
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  In an age where misinformation spreads quickly and social media has become the modern-day coliseum of ideas, knowing how to <em>debate well</em> is more important than ever. This guide won&apos;t focus on any one claim or conspiracy — instead, it&apos;s here to help you sharpen your communication skills and improve how you engage in dialogue, especially when the stakes are high and the tempers hot.
                </p>
              </div>

              {/* Section 1 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Know Your Goal: Persuasion vs. Performance</h2>
                <p className="text-gray-700 mb-4">Before entering a debate, ask yourself:</p>
                <blockquote className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-2 italic text-blue-800 mb-4">
                  &ldquo;Am I trying to persuade this person, or am I trying to inform the audience watching?&rdquo;
                </blockquote>
                <p className="text-gray-700 mb-4">This distinction is everything.</p>
                <p className="text-gray-700 mb-4">On social media, you&apos;re often not changing the mind of the person you&apos;re arguing with — you&apos;re planting seeds for the people quietly watching. That means tone and clarity matter <em>as much</em> as accuracy.</p>
                <p className="text-gray-700">And remember, <em>performing with integrity</em> — showing calm, confidence, and clarity — often speaks louder than any one fact or rebuttal.</p>
              </div>

              {/* Section 2 */}
              <div className="border-l-4 border-emerald-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. The Invisible Audience: Speak to the Fence-Sitters</h2>
                <p className="text-gray-700 mb-4">Debating online isn&apos;t just about the person replying to you. It&apos;s about the <em>dozens, hundreds, or even thousands</em> of silent readers who see the thread — especially those who are undecided or unsure.</p>
                <p className="text-gray-700 mb-4">These are the <em>fence-sitters</em>, the people who might not comment but are paying close attention to tone, clarity, and evidence.</p>
                <p className="text-gray-700 mb-4 font-semibold">Focus on them.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Be kind, even when others aren&apos;t.</li>
                  <li>Be clear, even when the topic is messy.</li>
                  <li>Be credible, even if others mock you.</li>
                </ul>
                <p className="text-gray-700 mb-4">Your opponent may never change their mind — and that&apos;s okay. But if one silent reader walks away with a better understanding or a new perspective, <strong>you&apos;ve won something real</strong>.</p>
                <p className="text-gray-700 font-semibold">In public debate, <strong>the true victory is persuasion by example</strong>, not domination by volume.</p>
              </div>

              {/* Section 3 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Stay Calm, Stay Cool</h2>
                <p className="text-gray-700 mb-4">If you lose your temper, you lose credibility. No matter how outrageous someone else&apos;s claim may be, keep your tone professional, factual, and calm. A composed tone builds trust with your audience and subtly positions you as the more reasonable party.</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">🔁 <em>Reminder: You don&apos;t need to respond instantly. Take time to think.</em></p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Read, Don&apos;t React</h2>
                <p className="text-gray-700 mb-4">Don&apos;t just skim — <em>read</em> what your opponent is saying. Are they venting? Asking a real question? Confused? Arguing for the sake of it? Understanding intent helps you respond with precision and empathy.</p>
                <p className="text-gray-700">Responding thoughtfully — not impulsively — is your power move.</p>
              </div>

              {/* Section 5 */}
              <div className="border-l-4 border-red-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Ask Questions, Don&apos;t Just Make Points</h2>
                <p className="text-gray-700 mb-4">Instead of leading with accusations or rebuttals, try this:</p>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2 mb-4">
                  <p className="text-gray-600">&ldquo;What source are you using for that?&rdquo;</p>
                  <p className="text-gray-600">&ldquo;What would change your mind?&rdquo;</p>
                  <p className="text-gray-600">&ldquo;Have you seen the counterargument that&hellip;&rdquo;</p>
                </div>
                <p className="text-gray-700">Genuine questions often disrupt rehearsed rants and force critical thinking. They also make you look curious instead of combative — a key advantage online.</p>
              </div>

              {/* Section 6 */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Use the Steelman Technique</h2>
                <p className="text-gray-700 mb-4">Rather than mock their position, <em>summarize it better than they can</em>. This is called <em>steelmanning</em>, and it does three things:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  <li>Shows you&apos;re listening.</li>
                  <li>Earns respect.</li>
                  <li>Creates space for them to do the same.</li>
                </ul>
                <p className="text-gray-700 mb-2">Example:</p>
                <blockquote className="bg-indigo-50 border-l-4 border-indigo-500 pl-4 py-2 italic text-indigo-800 mb-4">
                  &ldquo;If I understand you correctly, you&apos;re saying that NASA couldn&apos;t have hidden a hoax that big without someone leaking it, right?&rdquo;
                </blockquote>
                <p className="text-gray-700">Now you can address the claim <em>without</em> strawmanning it.</p>
              </div>

              {/* Section 7 */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Don&apos;t Flood with Facts</h2>
                <p className="text-gray-700 mb-4">Piling on links, PDFs, and stats might feel powerful — but it rarely works. Why?</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  <li>People shut down when overwhelmed.</li>
                  <li>It feels like lecturing, not debating.</li>
                  <li>Most people won&apos;t read your 12 links.</li>
                </ul>
                <p className="text-gray-700">Instead, offer <strong>one clear fact</strong> at a time, and <strong>contextualize</strong> it. Make it digestible. Make it stick.</p>
              </div>

              {/* Section 8 */}
              <div className="border-l-4 border-green-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Tell a Story</h2>
                <p className="text-gray-700 mb-4">Facts inform. Stories persuade.</p>
                <p className="text-gray-700 mb-4">When possible, use real-world anecdotes, analogies, or even personal experiences to frame your argument. Stories are memorable — and they bypass defensive thinking.</p>
                <blockquote className="bg-green-50 border-l-4 border-green-500 pl-4 py-2 italic text-green-800 mb-4">
                  &ldquo;My uncle worked on early satellite projects and explained how telemetry was cross-checked across multiple tracking stations&hellip;&rdquo;
                </blockquote>
                <p className="text-gray-700">This creates connection and credibility.</p>
              </div>

              {/* Section 9 */}
              <div className="border-l-4 border-pink-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Spot Fallacies Without Sounding Like a Snob</h2>
                <p className="text-gray-700 mb-4">Pointing out logical fallacies is important — but do it with care.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-800 font-semibold">❌ &ldquo;That&apos;s a strawman, idiot.&rdquo;</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800 font-semibold">✅ &ldquo;I think there&apos;s been a mix-up — I didn&apos;t say that. Let me clarify&hellip;&rdquo;</p>
                  </div>
                </div>
                <p className="text-gray-700">Use plain language. Skip the philosophy jargon unless you&apos;re in a space that welcomes it.</p>
              </div>

              {/* Section 10 */}
              <div className="border-l-4 border-teal-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Choose the Right Battlefield</h2>
                <p className="text-gray-700 mb-4">Some conversations are better in DMs than in public threads. Some are better left alone entirely.</p>
                <p className="text-gray-700 mb-4">Ask yourself:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  <li>Is this person debating in good faith?</li>
                  <li>Is there a silent audience that might benefit from what I say?</li>
                  <li>Would a private message be more productive?</li>
                </ul>
                <p className="text-gray-700">Strategic debates require choosing your venue wisely.</p>
              </div>

              {/* Section 11 */}
              <div className="border-l-4 border-gray-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Know When to Walk Away</h2>
                <p className="text-gray-700 mb-4">Winning a debate isn&apos;t always about &ldquo;getting the last word.&rdquo; Sometimes, it&apos;s knowing when to stop.</p>
                <p className="text-gray-700 mb-4">Ending with class might look like:</p>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2 mb-4">
                  <p className="text-gray-600">&ldquo;Appreciate the discussion — I think we&apos;ll have to agree to disagree for now.&rdquo;</p>
                  <p className="text-gray-600">&ldquo;Thanks for sharing your thoughts. I&apos;m stepping away from the thread but leaving these links in case others are curious.&rdquo;</p>
                </div>
                <p className="text-gray-700">Polite exits leave a lasting impression.</p>
              </div>

              {/* Final Thought */}
              <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thought</h2>
                <p className="text-gray-700 mb-4">Debating effectively isn&apos;t just about being right. It&apos;s about <strong>being heard</strong>, <strong>being thoughtful</strong>, and <strong>leaving the door open for dialogue</strong>.</p>
                <p className="text-gray-700">Whether you&apos;re discussing the moon landings or any other hot topic, remember: the goal isn&apos;t to &ldquo;own&rdquo; someone. The goal is to <em>engage in a way that encourages learning and understanding</em> — even if that takes time.</p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}