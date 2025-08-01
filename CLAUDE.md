# Moon Landing Defense - Claude Context

## Project Overview
A Next.js 14 application providing evidence-based responses to moon landing conspiracy theories. Built with TypeScript and deployed on Netlify.

## Recent Progress (August 1, 2025)

### 🚨 CRITICAL BUG FIX - READ THIS FIRST! 🚨
**RECURRING TYPE ERROR ISSUE - PREVENT FUTURE OCCURRENCES:**

**Problem:** When adding new `EvidenceResponse` objects to `src/data/conspiracies.ts`, we keep making the same TypeScript errors:
1. **Missing `id` field** - Every `EvidenceResponse` MUST have an `id` field
2. **Wrong `scientificSources` type** - Must be `Source[]` objects, NOT `string[]` IDs

**CORRECT FORMAT for new EvidenceResponse:**
```typescript
{
  id: 'unique-response-id', // ← REQUIRED! Format: '{conspiracyId}-{responseType}'
  conspiracyId: 'conspiracy-theory-id',
  responseType: 'short' | 'comprehensive' | 'educational',
  content: 'Your response content...',
  scientificSources: [
    sources.find(s => s.id === 'source-id-1')!,
    sources.find(s => s.id === 'source-id-2')!
  ], // ← Use Source objects, NOT string IDs!
  effectiveness: 9,
  lastUpdated: new Date('2024-01-01')
}
```

**WRONG FORMAT (causes build failures):**
```typescript
{
  // Missing id field ❌
  conspiracyId: 'conspiracy-theory-id',
  responseType: 'short',
  content: 'Content...',
  scientificSources: ['source-id-1', 'source-id-2'], // ❌ Strings instead of objects
  effectiveness: 9,
  lastUpdated: new Date('2024-01-01')
}
```

### Fixed Issues
- **22 TypeScript type errors** in `src/data/conspiracies.ts`
- **22 missing ID fields** added to EvidenceResponse objects
- **All scientificSources arrays** converted from string IDs to Source objects
- **Successful Netlify deployment** after multiple failed builds

### Key Files Updated
- `src/data/conspiracies.ts` - Major type safety fixes
- `src/types/index.ts` - Contains type definitions (Source, EvidenceResponse interfaces)

## Development Commands

### Core Commands
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run linting

### Deployment
- **Platform:** Netlify
- **Build Command:** `npm install && npm run build` (configured in netlify.toml)
- **Publish Directory:** `.next`
- **Auto-deploy:** Pushes to `main` branch trigger builds

### Git Workflow
```bash
git add .
git commit -m "your message"
git push origin main  # Triggers Netlify deployment
```

## Project Structure

### Key Directories
- `src/data/conspiracies.ts` - All conspiracy theories and evidence responses
- `src/types/index.ts` - TypeScript interface definitions
- `src/components/` - React components
- `netlify.toml` - Netlify build configuration

### Type Definitions
- `ConspiracyTheory` - Individual conspiracy theory data
- `EvidenceResponse` - Response to conspiracy (short/comprehensive/educational)
- `Source` - Scientific source with credibility scoring
- `DebateContext` - Context for different platforms/audiences

## Common Issues & Solutions

### TypeScript Build Failures
**Symptom:** Build fails with "Type 'string' is not assignable to type 'Source'"
**Solution:** 
1. Check `scientificSources` arrays use `sources.find(s => s.id === 'id')!` pattern
2. Ensure all EvidenceResponse objects have `id` field
3. Run `npm run build` locally to test before pushing

### Netlify Deployment Issues
- Check build logs for specific TypeScript errors
- Verify `netlify.toml` configuration is correct
- Ensure Node version matches (18)

## Future Development Notes

### When Adding New Claims/Responses:
1. **ALWAYS** include `id` field in EvidenceResponse objects
2. **ALWAYS** use Source objects in scientificSources arrays
3. **TEST LOCALLY** with `npm run build` before pushing
4. Follow existing ID naming convention: `{conspiracyId}-{responseType}`

### Source Management:
- All sources defined at top of `src/data/conspiracies.ts`
- Reference existing sources when possible
- Add new sources to `sources` array if needed

## Recent Commits
- `4468d2c` - Fix TypeScript type errors in conspiracies.ts
- `e7fdc4b` - Another attempt at getting new claims deployed
- `bbe6cab` - the claims
- `51c8482` - added 10 new claims

## Technology Stack
- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** CSS/Tailwind (check components for current approach)
- **Deployment:** Netlify
- **Node Version:** 18

---
*Last updated: August 1, 2025*
*Next conversation can continue from this context*