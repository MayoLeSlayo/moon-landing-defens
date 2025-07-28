import { ConspiracyTheory, EvidenceResponse, SearchResult } from '@/types';
import { conspiracyTheories, evidenceResponses } from '@/data/conspiracies';

export class SearchEngine {
  private conspiracies: ConspiracyTheory[] = conspiracyTheories;
  private responses: EvidenceResponse[] = evidenceResponses;

  // Simple keyword-based search (could be enhanced with vector search later)
  search(query: string): SearchResult[] {
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
    const results: SearchResult[] = [];

    this.conspiracies.forEach(conspiracy => {
      let relevanceScore = 0;
      const matchedKeywords: string[] = [];

      // Check title match
      searchTerms.forEach(term => {
        if (conspiracy.title.toLowerCase().includes(term)) {
          relevanceScore += 3;
          matchedKeywords.push(term);
        }
        if (conspiracy.claim.toLowerCase().includes(term)) {
          relevanceScore += 2;
          matchedKeywords.push(term);
        }
        conspiracy.tags.forEach(tag => {
          if (tag.toLowerCase().includes(term)) {
            relevanceScore += 1;
            matchedKeywords.push(term);
          }
        });
        conspiracy.commonVariations.forEach(variation => {
          if (variation.toLowerCase().includes(term)) {
            relevanceScore += 2;
            matchedKeywords.push(term);
          }
        });
      });

      if (relevanceScore > 0) {
        const relatedResponses = this.responses.filter(r => r.conspiracyId === conspiracy.id);
        results.push({
          conspiracy,
          responses: relatedResponses,
          relevanceScore,
          matchedKeywords: [...new Set(matchedKeywords)] // Remove duplicates
        });
      }
    });

    // Sort by relevance score (highest first)
    return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
  }

  // Get response by conspiracy theory and type
  getResponse(conspiracyId: string, responseType: 'short' | 'comprehensive' | 'educational'): EvidenceResponse | null {
    return this.responses.find(r => r.conspiracyId === conspiracyId && r.responseType === responseType) || null;
  }

  // Get all responses for a conspiracy theory
  getResponsesForConspiracy(conspiracyId: string): EvidenceResponse[] {
    return this.responses.filter(r => r.conspiracyId === conspiracyId);
  }

  // Get conspiracies by category
  getConspiraciesByCategory(category: string): ConspiracyTheory[] {
    return this.conspiracies.filter(c => c.category === category);
  }

  // Get random conspiracy for featured content
  getRandomConspiracy(): ConspiracyTheory {
    return this.conspiracies[Math.floor(Math.random() * this.conspiracies.length)];
  }

  // Enhanced search with fuzzy matching
  fuzzySearch(query: string): SearchResult[] {
    const results = this.search(query);
    
    // If no exact matches, try partial matches
    if (results.length === 0) {
      const partialResults: SearchResult[] = [];
      
      this.conspiracies.forEach(conspiracy => {
        let relevanceScore = 0;
        const matchedKeywords: string[] = [];
        
        // Check for partial word matches
        query.toLowerCase().split(' ').forEach(queryWord => {
          conspiracy.tags.forEach(tag => {
            if (tag.includes(queryWord) || queryWord.includes(tag)) {
              relevanceScore += 0.5;
              matchedKeywords.push(tag);
            }
          });
        });
        
        if (relevanceScore > 0) {
          const relatedResponses = this.responses.filter(r => r.conspiracyId === conspiracy.id);
          partialResults.push({
            conspiracy,
            responses: relatedResponses,
            relevanceScore,
            matchedKeywords: [...new Set(matchedKeywords)]
          });
        }
      });
      
      return partialResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
    }
    
    return results;
  }
}