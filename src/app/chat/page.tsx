'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChatMessage } from '@/types';
import { moonLandingAI } from '@/services/aiChat';

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your Moon Landing Defense AI assistant. I have access to comprehensive evidence about the Apollo missions and can help you counter 31 different conspiracy theories. I can handle both short questions like "why no return?" and detailed follow-ups. What would you like to know?',
      timestamp: new Date(),
      sources: []
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      const aiResponse = await moonLandingAI.generateResponse(userMessage.content, messages);
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse.content,
        timestamp: new Date(),
        sources: aiResponse.sources
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try asking your question again, or try rephrasing your question about moon landing conspiracy theories.',
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
      
      <main className="flex-1 bg-gray-50 pt-20">
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
                  <div className={`max-w-[85%] p-3 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-apollo-blue text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{
                      __html: message.content.replace(
                        /\*\*\[(.*?)\]\((.*?)\)\*\*/g,
                        '<strong><a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a></strong>'
                      )
                    }} />
                    
                    {/* Sources display for assistant messages */}
                    {message.role === 'assistant' && message.sources && message.sources.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-300">
                        <p className="text-xs font-semibold text-gray-600 mb-2">Sources:</p>
                        <div className="space-y-1">
                          {message.sources.slice(0, 3).map((source: any, index: number) => (
                            <a 
                              key={index}
                              href={source.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block text-xs text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              📄 {source.title} - {source.organization}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    
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
                  placeholder="Try: 'why no return?', 'van allen radiation', 'flag waving', etc."
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
                'Why haven\'t we returned?',
                'Van Allen radiation',
                'Flag waving',
                'No stars in photos',
                'Who filmed first step?',
                'Shadows are wrong',
                'Why didn\'t Russia expose it?',
                'Live video in 1969?',
                'No blast crater',
                'Movements too normal',
                'Missing data & footage',
                'Whistleblowers say fake',
                'Kubrick could\'ve faked it?',
                'Moon rocks fake?',
                'Buzz Aldrin quotes',
                'Why did missions stop?'
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