export interface ConspiracyTheory {
  id: string;
  title: string;
  claim: string;
  category: 'photography' | 'physics' | 'technology' | 'historical' | 'logical';
  commonVariations: string[];
  tags: string[];
}

export interface EvidenceResponse {
  id: string;
  conspiracyId: string;
  responseType: 'short' | 'comprehensive' | 'educational';
  content: string;
  scientificSources: Source[];
  effectiveness: number; // 1-10 rating
  lastUpdated: Date;
}

export interface Source {
  id: string;
  title: string;
  url: string;
  organization: string;
  type: 'nasa' | 'academic' | 'observatory' | 'government' | 'international' | 'museum' | 'scientific';
  credibilityScore: number;
  summary: string;
}

export interface DebateContext {
  platform: 'twitter' | 'facebook' | 'reddit' | 'general';
  audienceType: 'hostile' | 'curious' | 'educational';
  characterLimit?: number;
  preferredStyle: 'authoritative' | 'conversational' | 'technical';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  context?: DebateContext;
  sources?: Source[];
}

export interface SearchResult {
  conspiracy: ConspiracyTheory;
  responses: EvidenceResponse[];
  relevanceScore: number;
  matchedKeywords: string[];
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
  preferences: {
    theme: 'light' | 'dark';
    defaultResponseType: 'short' | 'comprehensive' | 'educational';
    favoriteCategories: string[];
  };
}