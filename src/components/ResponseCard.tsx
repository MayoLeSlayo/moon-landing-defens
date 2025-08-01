'use client';

import { useState } from 'react';
import { sources } from '@/data/conspiracies';

interface ResponseCardProps {
  title: string;
  content: string;
  sources: any[];
  bgColor: string;
  iconColor: string;
  icon: string;
}

export default function ResponseCard({ 
  title, 
  content, 
  sources: sourcesData, 
  bgColor, 
  iconColor, 
  icon 
}: ResponseCardProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const formatContent = (text: string) => {
    // Convert \\n to actual line breaks and split into paragraphs
    const content = text.replace(/\\n/g, '\n');
    const sections = content.split('\n\n').filter(p => p.trim());
    
    const formattedSections = sections.map(section => {
      const trimmed = section.trim();
      
      // Handle H3 headings (###)
      if (trimmed.startsWith('### ')) {
        const title = trimmed.replace('### ', '');
        return `<h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">${title}</h4>`;
      }
      
      // Handle H2 headings (##)
      if (trimmed.startsWith('## ')) {
        const title = trimmed.replace('## ', '');
        return `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">${title}</h3>`;
      }
      
      // Handle regular paragraphs
      let formatted = trimmed
        // Handle inline links [text](url)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-apollo-blue hover:text-blue-700 underline">$1</a>')
        // Bold formatting
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Numbers with units
        .replace(/(\d+\.?\d*)\s*(rems?|pounds?|hours?|miles?|degrees?|percent|%)/gi, '<strong>$1 $2</strong>')
        // Important terms
        .replace(/(NASA|Apollo|Van Allen|Saturn V|AGC|ISS|Earth|Moon|lunar)/g, '<strong>$1</strong>');
      
      return `<p class="mb-4 text-gray-700 leading-relaxed">${formatted}</p>`;
    });
    
    return formattedSections.join('');
  };

  const sourceLinks = sourcesData.map((sourceId, index) => {
    const source = typeof sourceId === 'string' 
      ? sources.find(s => s.id === sourceId) 
      : sourceId;
    return source ? `Source: ${source.title} (${source.url})` : '';
  }).filter(Boolean).join('\n');

  return (
    <div className={`${bgColor} rounded-xl shadow-lg p-8 border border-gray-200`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
          <span className={`${iconColor} text-xl`}>{icon}</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      
      <div 
        className="mb-6"
        dangerouslySetInnerHTML={{
          __html: formatContent(content)
        }}
      />

      {/* Copy Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => copyToClipboard(
            content
              .replace(/\\n/g, '\n')
              .replace(/## /g, '')
              .replace(/### /g, '')
              .replace(/\*\*(.*?)\*\*/g, '$1')
              .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1'), 
            'text'
          )}
          className="px-4 py-2 bg-white text-gray-700 rounded-lg border hover:bg-gray-50 transition-colors text-sm font-medium shadow-sm"
        >
          {copiedType === 'text' ? '✓ Copied!' : '📝 Copy Text'}
        </button>
        <button
          onClick={() => copyToClipboard(sourceLinks, 'links')}
          className="px-4 py-2 bg-white text-gray-700 rounded-lg border hover:bg-gray-50 transition-colors text-sm font-medium shadow-sm"
        >
          {copiedType === 'links' ? '✓ Copied!' : '🔗 Copy Links'}
        </button>
        <button
          onClick={() => copyToClipboard(`${
            content
              .replace(/\\n/g, '\n')
              .replace(/## /g, '')
              .replace(/### /g, '')
              .replace(/\*\*(.*?)\*\*/g, '$1')
              .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
          }\n\n${sourceLinks}`, 'both')}
          className="px-4 py-2 bg-white text-gray-700 rounded-lg border hover:bg-gray-50 transition-colors text-sm font-medium shadow-sm"
        >
          {copiedType === 'both' ? '✓ Copied!' : '📋 Copy Both'}
        </button>
      </div>

      {/* Clickable Sources */}
      {sourcesData.length > 0 && (
        <div className="border-t pt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">📚 Scientific Sources:</h4>
          <div className="space-y-2">
            {sourcesData.map((sourceId, index) => {
              const source = typeof sourceId === 'string' 
                ? sources.find(s => s.id === sourceId) 
                : sourceId;
              
              if (!source) return null;
              
              return (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-white rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <div className="font-medium text-gray-900 text-sm">{source.title}</div>
                  <div className="text-xs text-gray-600 mt-1">
                    {source.organization} • Credibility: {source.credibilityScore}/10
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}