'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ConspiracyTheory, EvidenceResponse } from '@/types';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [activeTab, setActiveTab] = useState<'conspiracies' | 'responses' | 'sources'>('conspiracies');
  
  // Mock authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would call an authentication API
    if (loginForm.email === 'admin@moondefense.com' && loginForm.password === 'apollo11') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Try admin@moondefense.com / apollo11');
    }
  };

  const [newConspiracy, setNewConspiracy] = useState<Partial<ConspiracyTheory>>({
    title: '',
    claim: '',
    category: 'physics',
    commonVariations: [],
    tags: []
  });

  const [newResponse, setNewResponse] = useState<Partial<EvidenceResponse>>({
    conspiracyId: '',
    responseType: 'short',
    content: '',
    effectiveness: 5
  });

  const handleAddConspiracy = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would save to database
    console.log('Adding conspiracy:', newConspiracy);
    alert('Conspiracy theory added! (Demo mode - not actually saved)');
    setNewConspiracy({
      title: '',
      claim: '',
      category: 'physics',
      commonVariations: [],
      tags: []
    });
  };

  const handleAddResponse = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would save to database
    console.log('Adding response:', newResponse);
    alert('Response added! (Demo mode - not actually saved)');
    setNewResponse({
      conspiracyId: '',
      responseType: 'short',
      content: '',
      effectiveness: 5
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 bg-gray-50 flex items-center justify-center pt-20">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Login</h1>
              <p className="text-gray-600">Access the content management system</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apollo-blue focus:border-apollo-blue outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apollo-blue focus:border-apollo-blue outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-apollo-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Login
              </button>
            </form>

          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Manage conspiracy theories, responses, and sources</p>
              </div>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-lg">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'conspiracies', label: 'Conspiracy Theories' },
                  { id: 'responses', label: 'Evidence Responses' },
                  { id: 'sources', label: 'Scientific Sources' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-apollo-blue text-apollo-blue'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {/* Conspiracy Theories Tab */}
              {activeTab === 'conspiracies' && (
                <div>
                  <h2 className="text-lg font-semibold mb-6">Add New Conspiracy Theory</h2>
                  <form onSubmit={handleAddConspiracy} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          value={newConspiracy.title || ''}
                          onChange={(e) => setNewConspiracy(prev => ({ ...prev, title: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apollo-blue focus:border-apollo-blue outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category
                        </label>
                        <select
                          value={newConspiracy.category || 'physics'}
                          onChange={(e) => setNewConspiracy(prev => ({ ...prev, category: e.target.value as any }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apollo-blue focus:border-apollo-blue outline-none"
                        >
                          <option value="physics">Physics</option>
                          <option value="photography">Photography</option>
                          <option value="technology">Technology</option>
                          <option value="historical">Historical</option>
                          <option value="logical">Logical</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Claim Description
                      </label>
                      <textarea
                        value={newConspiracy.claim || ''}
                        onChange={(e) => setNewConspiracy(prev => ({ ...prev, claim: e.target.value }))}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apollo-blue focus:border-apollo-blue outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tags (comma-separated)
                      </label>
                      <input
                        type="text"
                        placeholder="flag, wind, atmosphere, physics"
                        onChange={(e) => setNewConspiracy(prev => ({ 
                          ...prev, 
                          tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean)
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apollo-blue focus:border-apollo-blue outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-apollo-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Add Conspiracy Theory
                    </button>
                  </form>
                </div>
              )}

              {/* Evidence Responses Tab */}
              {activeTab === 'responses' && (
                <div>
                  <h2 className="text-lg font-semibold mb-6">Add New Evidence Response</h2>
                  <form onSubmit={handleAddResponse} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Conspiracy Theory ID
                        </label>
                        <input
                          type="text"
                          value={newResponse.conspiracyId || ''}
                          onChange={(e) => setNewResponse(prev => ({ ...prev, conspiracyId: e.target.value }))}
                          placeholder="e.g., waving-flag"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apollo-blue focus:border-apollo-blue outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Response Type
                        </label>
                        <select
                          value={newResponse.responseType || 'short'}
                          onChange={(e) => setNewResponse(prev => ({ ...prev, responseType: e.target.value as any }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apollo-blue focus:border-apollo-blue outline-none"
                        >
                          <option value="short">Short (Social Media)</option>
                          <option value="comprehensive">Comprehensive</option>
                          <option value="educational">Educational</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Response Content
                      </label>
                      <textarea
                        value={newResponse.content || ''}
                        onChange={(e) => setNewResponse(prev => ({ ...prev, content: e.target.value }))}
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apollo-blue focus:border-apollo-blue outline-none"
                        placeholder="Enter the evidence-based response..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Effectiveness (1-10)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={newResponse.effectiveness || 5}
                        onChange={(e) => setNewResponse(prev => ({ ...prev, effectiveness: parseInt(e.target.value) }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-apollo-blue focus:border-apollo-blue outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-evidence-green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
                    >
                      Add Response
                    </button>
                  </form>
                </div>
              )}

              {/* Sources Tab */}
              {activeTab === 'sources' && (
                <div>
                  <h2 className="text-lg font-semibold mb-6">Scientific Sources Management</h2>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800">
                      Source management functionality would be implemented here. This would include:
                    </p>
                    <ul className="mt-2 text-blue-700 list-disc list-inside space-y-1">
                      <li>Add new scientific sources and references</li>
                      <li>Update credibility scores based on peer review</li>
                      <li>Organize sources by category and reliability</li>
                      <li>Link sources to specific responses</li>
                      <li>Verify and update source URLs</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stats Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Conspiracies</h3>
              <p className="text-3xl font-bold text-apollo-blue">8</p>
              <p className="text-sm text-gray-600">Active conspiracy theories tracked</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence Responses</h3>
              <p className="text-3xl font-bold text-evidence-green">24</p>
              <p className="text-sm text-gray-600">Ready-to-use responses</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scientific Sources</h3>
              <p className="text-3xl font-bold text-gray-700">15</p>
              <p className="text-sm text-gray-600">Verified authoritative sources</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}