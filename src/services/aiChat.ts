import { conspiracyTheories, evidenceResponses, sources } from '@/data/conspiracies';

// Comprehensive keyword mapping for natural language queries
const CONSPIRACY_PATTERNS = {
  'why-havent-returned': [
    'why no return', 'haven\'t returned', 'didn\'t go back', 'why stopped', 'no more missions',
    'why haven\'t we returned', 'went back', 'return to moon', 'stopped going', 'modern technology easier'
  ],
  'van-allen-belt': [
    'van allen', 'radiation', 'belt', 'deadly radiation', 'radiation belt', 'radioactive',
    'survive radiation', 'radiation shielding', 'space radiation', 'cosmic radiation'
  ],
  'different-shadows': [
    'shadows wrong', 'different shadows', 'shadow direction', 'multiple light', 'parallel shadows',
    'shadows go different', 'shadow angle', 'lighting', 'single light source', 'sun shadows'
  ],
  'no-blast-crater': [
    'no blast crater', 'no crater', 'blast crater', 'engine crater', 'descent engine',
    'should have crater', 'dust kicked up', 'landing crater', 'engine blast', 'exhaust crater'
  ],
  'camera-man-left-behind': [
    'who filmed', 'camera man', 'first step', 'armstrong ladder', 'filming descent',
    'who was filming', 'camera setup', 'remote camera', 'someone filming', 'ladder footage'
  ],
  'waving-flag': [
    'flag waving', 'flag wave', 'flag moves', 'wind', 'no atmosphere', 'flag flutter',
    'american flag', 'flag motion', 'air flow', 'atmospheric wind'
  ],
  'international-agencies-confirmation': [
    'russia expose', 'why didn\'t russia', 'other countries', 'soviets', 'china expose',
    'enemies expose', 'rival nations', 'cold war', 'ussr', 'international verification'
  ],
  'no-live-hd-feed': [
    'live video', 'video 1969', 'transmission', 'broadcast', '1960s video',
    'live feed', 'video quality', 'transmission technology', 'bandwidth', 'tv broadcast'
  ],
  'no-stars': [
    'no stars', 'stars missing', 'where are stars', 'stars photos', 'black sky',
    'should see stars', 'star visibility', 'no atmosphere stars', 'dark sky'
  ],
  'footprints-too-perfect-airless': [
    'movements normal', 'walking normal', 'gravity', 'bulky suits', 'low gravity',
    'movement clumsy', 'should be different', 'lunar gravity', 'astronaut movement'
  ],
  'film-video-quality-inconsistencies': [
    'missing data', 'lost footage', 'telemetry missing', 'original data', 'missing tapes',
    'footage lost', 'data missing', 'original footage', 'nasa lost', 'missing evidence'
  ],
  'no-engine-exhaust-visible': [
    'takeoff docking', 'lunar module takeoff', 'docking orbit', 'manual docking',
    'liftoff moon', 'orbital rendezvous', '1960s technology', 'automation', 'takeoff'
  ],
  'bill-kaysing-insider': [
    'whistleblowers', 'nasa employees', 'insider claims', 'former nasa', 'employees claim fake',
    'whistleblower', 'insider', 'nasa worker', 'employee claims', 'internal claims'
  ],
  'identical-backgrounds-miles-apart': [
    'same background', 'identical background', 'reused terrain', 'repeating backgrounds',
    'same landscape', 'backdrop reused', 'identical terrain', 'staged photos'
  ],
  'temperature-extremes-lethal': [
    'extreme temperature', 'hot cold space', 'temperature kill', 'cameras survive',
    'film survive', 'space temperature', 'heat cold', 'equipment temperature', 'kodak film'
  ],
  'buzz-aldrin-out-of-context': [
    'buzz aldrin', 'aldrin said', 'astronaut confession', 'aldrin quotes', 'out of context',
    'aldrin interview', 'astronaut testimony', 'aldrin fake', 'confessed fake'
  ],
  'modern-cgi-better': [
    'kubrick', 'stanley kubrick', 'hollywood', '2001 space odyssey', 'special effects',
    'movie effects', 'film techniques', 'could fake', 'kubrick fake', 'cgi better'
  ],
  'lost-technology': [
    'lost technology', 'can\'t build saturn', 'technology lost', 'how did we lose',
    'saturn v plans', 'rocket technology', 'lost ability', 'forgotten how'
  ],
  'rover-tracks-too-perfect': [
    'rover tracks', 'wheel tracks', 'tracks perfect', 'tracks preserved', 'lunar rover',
    'tire tracks', 'wheel marks', 'track preservation'
  ],
  'dust-behavior-wrong': [
    'dust stick', 'dust behavior', 'vacuum dust', 'dust falling', 'electrostatic dust',
    'dust adhesion', 'lunar dust', 'dust physics', 'dust vacuum'
  ],
  'hubble-jwst-resolution': [
    'hubble see', 'telescope see', 'can\'t see landing', 'telescope resolution',
    'jwst see moon', 'why can\'t see', 'telescope power', 'space telescope'
  ],
  'computing-power-insufficient': [
    'computer power', '1960s computers', 'primitive computers', 'computing power',
    'apollo computer', 'agc', 'guidance computer', 'calculator'
  ],
  'multiple-light-sources': [
    'multiple lights', 'studio lights', 'perfect lighting', 'professional lighting',
    'lighting setup', 'too perfect', 'artificial lighting'
  ],
  'equipment-too-clean-after-dust': [
    'equipment clean', 'too clean', 'dust coverage', 'should be dusty',
    'clean equipment', 'lunar dust', 'dust contamination'
  ],
  'no-atmospheric-scattering': [
    'atmospheric scattering', 'blue sky', 'atmosphere effects', 'scattering effects',
    'sky color', 'atmospheric haze', 'missing atmosphere'
  ]
};

// Enhanced follow-up question patterns
const FOLLOW_UP_PATTERNS = {
  'modern-technology': ['modern technology', 'easier now', 'cheaper now', 'today\'s tech'],
  'shielding-protection': ['shielding', 'protection', 'documented shielding', 'realistic protection'],
  'single-light-source': ['single light', 'parallel shadows', 'sun produce'],
  'engine-impression': ['engine kicked', 'dust impression', 'left impression'],
  'remote-setup': ['remote camera', 'camera setup', 'already filming'],
  'wind-airflow': ['wind', 'airflow', 'not possible moon'],
  'motive-technology': ['motive', 'technology detect', 'detect hoax'],
  'bandwidth-equipment': ['bandwidth', 'equipment', 'possible back then'],
  'atmosphere-visible': ['atmosphere', 'more visible', 'not less'],
  'drastically-different': ['drastically different', 'look different', 'clumsy'],
  'accounted-explained': ['accounted for', 'explained', 'satisfying way'],
  'automation-manual': ['automation', 'manual', 'involved'],
  'investigated-dismissed': ['investigated', 'dismissed', 'outright'],
  'official-explanation': ['official explanation', 'terrain reused'],
  'special-materials': ['special materials', 'regular kodak'],
  'chain-relays': ['chain relays', 'direct transmission'],
  'statistically-improbable': ['statistically improbable', 'complexity'],
  'independent-verification': ['independent labs', 'nasa control'],
  'funding-changed': ['purely funding', 'something changed'],
  'film-parallels': ['parallels', 'film techniques', 'space odyssey']
};

export class MoonLandingAI {
  private findBestMatch(query: string): string | null {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Check each conspiracy theory's patterns
    for (const [theoryId, patterns] of Object.entries(CONSPIRACY_PATTERNS)) {
      for (const pattern of patterns) {
        if (normalizedQuery.includes(pattern)) {
          return theoryId;
        }
      }
    }
    
    return null;
  }

  private getResponseForTheory(theoryId: string, responseType: 'short' | 'comprehensive' = 'short'): any {
    const theory = conspiracyTheories.find(t => t.id === theoryId);
    const response = evidenceResponses.find(r => 
      r.conspiracyId === theoryId && r.responseType === responseType
    );
    
    if (!theory || !response) return null;
    
    // Get sources
    const responseSources = response.scientificSources || [];
    
    return {
      theory,
      response,
      sources: responseSources
    };
  }

  private detectFollowUp(query: string): boolean {
    const normalizedQuery = query.toLowerCase();
    return Object.values(FOLLOW_UP_PATTERNS).some(patterns =>
      patterns.some(pattern => normalizedQuery.includes(pattern))
    );
  }

  public async generateResponse(userMessage: string, conversationHistory: any[] = []): Promise<{
    content: string;
    sources: any[];
    confidence: number;
  }> {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const matchedTheoryId = this.findBestMatch(userMessage);
    const isFollowUp = this.detectFollowUp(userMessage);
    
    if (matchedTheoryId) {
      const responseType = isFollowUp || userMessage.length > 50 ? 'comprehensive' : 'short';
      const match = this.getResponseForTheory(matchedTheoryId, responseType);
      
      if (match) {
        let content = match.response.content;
        
        // Add contextual follow-up information based on patterns
        if (isFollowUp) {
          content += this.addFollowUpContext(userMessage, matchedTheoryId);
        }
        
        // Generate link to detailed evidence page
        const evidenceLink = `/evidence/${matchedTheoryId}`;
        const linkText = `\n\n📖 **[Read the full detailed analysis with all sources →](${evidenceLink})**`;
        
        return {
          content: content + linkText,
          sources: match.sources,
          confidence: 0.9
        };
      }
    }
    
    // Fallback for unmatched queries
    return this.generateFallbackResponse(userMessage);
  }

  private addFollowUpContext(query: string, theoryId: string): string {
    const normalizedQuery = query.toLowerCase();
    
    // Context-specific additions for common follow-ups
    if (theoryId === 'why-havent-returned' && normalizedQuery.includes('modern technology')) {
      return '\n\nRegarding modern technology: While we have better computers and materials today, the Apollo program required massive industrial infrastructure, political will, and sustained funding that simply doesn\'t exist for lunar missions currently. NASA\'s Artemis program is rebuilding this capability, but it takes years to recreate the specialized supply chains, trained workforce, and institutional knowledge.';
    }
    
    if (theoryId === 'van-allen-belt' && normalizedQuery.includes('shielding')) {
      return '\n\nThe spacecraft aluminum hull provided adequate shielding for the brief transit time. The key is understanding that radiation exposure is about dose AND duration - a quick pass-through is very different from prolonged exposure.';
    }
    
    if (theoryId === 'different-shadows' && normalizedQuery.includes('parallel')) {
      return '\n\nParallel shadows only occur on perfectly flat surfaces. The lunar surface has rocks, craters, and uneven terrain that cause shadows to appear at different angles, just like shadows on Earth\'s uneven ground.';
    }
    
    return '';
  }

  private generateFallbackResponse(query: string): {content: string; sources: any[]; confidence: number} {
    const normalizedQuery = query.toLowerCase();
    
    // General topic detection
    if (normalizedQuery.includes('moon') || normalizedQuery.includes('apollo') || normalizedQuery.includes('nasa')) {
      return {
        content: "I can help you with evidence about moon landing conspiracy theories. Try asking about specific claims like 'waving flags', 'no stars in photos', 'Van Allen radiation', 'moon rocks', 'shadows', 'why haven't we returned', or any other conspiracy theory you've encountered. I have detailed scientific responses backed by authoritative sources for 31 different conspiracy theories.",
        sources: [],
        confidence: 0.3
      };
    }
    
    return {
      content: "I'm specifically designed to address moon landing conspiracy theories with scientific evidence. Could you ask about a specific claim you've heard about the Apollo missions? For example: 'Why does the flag appear to wave?' or 'How did they survive radiation?' I can provide detailed, source-backed responses.",
      sources: [],
      confidence: 0.2
    };
  }

  // Get all available topics for help
  public getAvailableTopics(): string[] {
    return conspiracyTheories.map(theory => theory.title);
  }
}

// Export singleton instance
export const moonLandingAI = new MoonLandingAI();