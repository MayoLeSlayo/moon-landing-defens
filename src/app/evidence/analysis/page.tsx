'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AnalysisPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        <section className="space-gradient text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">50+ Years of Scientific Analysis</h1>
            <p className="text-xl text-gray-200">
              Half a century of continuous research validates Apollo achievements
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ongoing Research Timeline</h2>
            
            <div className="space-y-6">
              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">1969-1975: Initial Analysis</h3>
                <p className="text-gray-800">
                  Immediate post-mission analysis confirmed extraterrestrial origin. Initial studies focused on basic composition, age dating, and comparison with Earth materials.
                </p>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">1980s-1990s: Advanced Techniques</h3>
                <p className="text-gray-800">
                  New analytical techniques like ion microprobes and electron microscopy revealed microscopic details impossible to see in the 1970s, further confirming lunar origin.
                </p>
              </div>

              <div className="evidence-highlight">
                <h3 className="text-xl font-semibold mb-3">2000s-Present: Modern Technology</h3>
                <p className="text-gray-800">
                  Laser ablation mass spectrometry, advanced isotopic analysis, and nanoscale imaging continue to reveal new details about lunar formation and history.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Research Institutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">NASA Johnson Space Center</h4>
                <p className="text-sm text-gray-600">Lunar Sample Laboratory - Primary curator and research facility</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">Smithsonian Institution</h4>
                <p className="text-sm text-gray-600">National Museum of Natural History - Independent analysis</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">Universities Worldwide</h4>
                <p className="text-sm text-gray-600">MIT, Caltech, Harvard, and 200+ international institutions</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-apollo-blue mb-2">International Labs</h4>
                <p className="text-sm text-gray-600">Max Planck Institute, CNRS France, University of Tokyo</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}