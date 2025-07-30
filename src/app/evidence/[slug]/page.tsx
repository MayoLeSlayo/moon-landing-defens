import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { conspiracyTheories, evidenceResponses, sources } from '@/data/conspiracies';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

// Generate static params for all conspiracy theories
export async function generateStaticParams() {
  return conspiracyTheories.map((theory) => ({
    slug: theory.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const theory = conspiracyTheories.find(t => t.id === params.slug);
  
  if (!theory) {
    return {
      title: 'Evidence Not Found',
      description: 'The requested evidence page could not be found.'
    };
  }

  const description = `Scientific evidence debunking the moon landing conspiracy theory: "${theory.claim}". Comprehensive analysis with authoritative sources from NASA, academic institutions, and space agencies.`;

  return {
    title: `Moon Landing Evidence: ${theory.title} - Debunked`,
    description,
    keywords: `moon landing, ${theory.tags.join(', ')}, apollo missions, space conspiracy, scientific evidence`,
    openGraph: {
      title: `${theory.title} - Moon Landing Evidence`,
      description,
      type: 'article',
      siteName: 'Moon Landing Defense'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${theory.title} - Moon Landing Evidence`,
      description
    },
    alternates: {
      canonical: `/evidence/${params.slug}`
    }
  };
}

export default function EvidencePage({ params }: Props) {
  const theory = conspiracyTheories.find(t => t.id === params.slug);
  
  if (!theory) {
    notFound();
  }

  // Get all responses for this theory
  const responses = evidenceResponses.filter(r => r.conspiracyId === theory.id);
  const shortResponse = responses.find(r => r.responseType === 'short');
  const comprehensiveResponse = responses.find(r => r.responseType === 'comprehensive');
  const educationalResponse = responses.find(r => r.responseType === 'educational');

  // Get all unique sources from responses
  const allSourceIds = new Set<string>();
  responses.forEach(response => {
    response.scientificSources?.forEach(sourceId => {
      if (typeof sourceId === 'string') {
        allSourceIds.add(sourceId);
      }
    });
  });

  const evidenceSources = Array.from(allSourceIds)
    .map(sourceId => sources.find(s => s.id === sourceId))
    .filter(Boolean)
    .sort((a, b) => (b?.credibilityScore || 0) - (a?.credibilityScore || 0));

  // Find related theories in the same category
  const relatedTheories = conspiracyTheories
    .filter(t => t.id !== theory.id && t.category === theory.category)
    .slice(0, 3);

  // Generate structured data for search engines and AI crawlers
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": {
      "@type": "Question",
      "name": theory.claim,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": shortResponse?.content || "Scientific evidence contradicts this conspiracy theory claim.",
        "author": {
          "@type": "Organization",
          "name": "Moon Landing Defense"
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="flex-1 bg-gray-50 pt-20">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <nav className="flex text-sm text-gray-600">
              <Link href="/" className="hover:text-apollo-blue">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/evidence" className="hover:text-apollo-blue">Evidence Library</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{theory.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="space-gradient text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium capitalize">
                {theory.category}
              </span>
              <div className="flex gap-2">
                {theory.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white bg-opacity-10 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {theory.title}
            </h1>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-3 text-red-200">❌ The Claim:</h2>
              <p className="text-lg leading-relaxed">&ldquo;{theory.claim}&rdquo;</p>
            </div>
            {theory.commonVariations.length > 0 && (
              <div className="text-gray-200">
                <p className="font-semibold mb-2">Common variations of this claim:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {theory.commonVariations.map((variation, index) => (
                    <li key={index}>&ldquo;{variation}&rdquo;</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Evidence Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Quick Answer */}
                {shortResponse && (
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xl">✓</span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Quick Answer</h2>
                    </div>
                    <div className="prose max-w-none">
                      <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {shortResponse.content}
                      </p>
                    </div>
                  </div>
                )}

                {/* Comprehensive Analysis */}
                {comprehensiveResponse && (
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Analysis</h2>
                    <div className="prose max-w-none">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {comprehensiveResponse.content}
                      </div>
                    </div>
                  </div>
                )}

                {/* Educational Context */}
                {educationalResponse && (
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Educational Context</h2>
                    <div className="prose max-w-none">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {educationalResponse.content}
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Scientific Sources */}
                {evidenceSources.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Scientific Sources</h3>
                    <div className="space-y-4">
                      {evidenceSources.map((source) => (
                        <div key={source?.id} className="border-l-4 border-blue-500 pl-4">
                          <a 
                            href={source?.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block hover:bg-gray-50 -ml-4 pl-4 py-2 rounded transition-colors"
                          >
                            <h4 className="font-semibold text-gray-900 hover:text-apollo-blue">
                              {source?.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-1">{source?.organization}</p>
                            <p className="text-xs text-gray-500">{source?.summary}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded capitalize">
                                {source?.type}
                              </span>
                              <span className="text-xs text-gray-500">
                                Credibility: {source?.credibilityScore}/10
                              </span>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Claims */}
                {relatedTheories.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Related Claims</h3>
                    <div className="space-y-3">
                      {relatedTheories.map((relatedTheory) => (
                        <Link 
                          key={relatedTheory.id}
                          href={`/evidence/${relatedTheory.id}`}
                          className="block p-3 border border-gray-200 rounded-lg hover:border-apollo-blue hover:bg-blue-50 transition-colors"
                        >
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">
                            {relatedTheory.title}
                          </h4>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {relatedTheory.claim}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ask AI Assistant */}
                <div className="bg-apollo-blue text-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Need More Help?</h3>
                  <p className="text-gray-200 mb-4 text-sm">
                    Ask our AI assistant for personalized responses or follow-up questions about this claim.
                  </p>
                  <Link 
                    href={`/chat?q=${encodeURIComponent(theory.title)}`}
                    className="block w-full bg-white text-apollo-blue text-center py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Ask AI Assistant
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}