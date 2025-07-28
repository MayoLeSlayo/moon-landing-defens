'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChatMessage } from '@/types';

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your Moon Landing Defense AI assistant. I have access to comprehensive evidence about the Apollo missions and can help you counter conspiracy theories. What would you like to know?',
      timestamp: new Date(),
      sources: []
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock AI response - in production this would call OpenAI/Claude API
  const generateResponse = async (userMessage: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple keyword matching for demo
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('flag') || lowerMessage.includes('waving')) {
      return "The \"waving flag\" is a classic misconception! There's no wind on the moon - that's exactly why the flag looks the way it does. The flag only appears to 'wave' when astronauts are physically moving it during setup, then it stops completely because there's no air to make it flutter. The flag has a horizontal rod at the top to keep it extended, and the wrinkles from being folded stay frozen in place because there's no atmosphere. If you watch the actual footage, whenever astronauts aren't touching the flag, it's perfectly motionless - exactly what you'd expect in a vacuum.";
    }
    
    if (lowerMessage.includes('star') || lowerMessage.includes('sky')) {
      return "The 'no stars' argument misunderstands basic photography. The lunar surface is extremely bright (like snow on a sunny day), and astronauts are brightly lit by direct sunlight. To photograph these bright subjects, cameras must use fast shutter speeds and small apertures, which makes dim stars invisible in the photos. It's like trying to photograph stars with your phone while standing under a bright streetlight - you won't see any stars even though they're there.";
    }
    
    if (lowerMessage.includes('radiation') || lowerMessage.includes('van allen')) {
      return "The Van Allen Belt claim shows a misunderstanding of radiation physics. Apollo missions spent about 1 hour total passing through the belts and received roughly 11.4 rems of radiation - equivalent to a few medical X-rays. The 'deadly radiation' myth comes from not understanding dosage vs. time. The spacecraft hull provides radiation shielding, and the belts are dangerous for PROLONGED exposure, not quick pass-throughs.";
    }
    
    if (lowerMessage.includes('rock') || lowerMessage.includes('sample')) {
      return "Moon rocks provide some of the strongest evidence! We have 842 pounds of lunar samples that have been analyzed by independent laboratories worldwide for 50+ years. These rocks have unique characteristics that can't be replicated on Earth: formed in a vacuum, different isotope ratios, no water content, unique mineral combinations, and micrometeorite impacts. The isotopic signatures are completely different from Earth rocks.";
    }
    
    // Default response
    return "I can help you with evidence about moon landing conspiracy theories. Try asking about specific claims like 'waving flags', 'no stars in photos', 'Van Allen radiation', 'moon rocks', 'shadows', or any other conspiracy theory you've encountered. I have detailed scientific responses backed by authoritative sources.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await generateResponse(input);
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        sources: [] // In production, this would include relevant sources
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
        sources: []
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="bg-apollo-blue text-white p-4 rounded-t-xl">
              <h1 className="text-xl font-semibold">Moon Landing Defense AI</h1>
              <p className="text-sm text-gray-200">Ask me about conspiracy theories and get evidence-based responses</p>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-apollo-blue text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs mt-2 opacity-70">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about a conspiracy theory..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apollo-blue focus:border-apollo-blue outline-none"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-apollo-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Quick Prompts */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Try asking about:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Why is the flag waving?',
                'Where are the stars?',
                'Van Allen radiation belt',
                'Moon rock evidence',
                'Shadow directions',
                'Lunar module design',
                'Soviet Union tracking',
                'Retroreflector experiments'
              ].map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setInput(prompt)}
                  className="p-3 bg-white border border-gray-200 rounded-lg hover:border-apollo-blue hover:bg-blue-50 transition-colors text-left text-sm"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}