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

### Development Server Startup Protocol
**Issue:** Port conflicts can prevent server access even when it appears to start successfully.

**Recommended Startup Process:**
1. **Start server in background:** `cd /path/to/project && nohup npm run dev > server.log 2>&1 &`
2. **Check what port is actually used:** `cat server.log` (look for port number)
3. **Verify server is running:** `lsof -i :3000` or `lsof -i :3001` (check actual port)
4. **Access correct URL:** Usually `http://localhost:3001` if 3000 is in use

**Alternative Quick Start:**
```bash
cd "/Users/lebeast/Claude/MayoSlayo_Sites/moon-landing-defense"
nohup npm run dev > server.log 2>&1 &
sleep 3
cat server.log | grep "Local:"  # Shows actual URL
```

**Port Conflict Resolution:**
- Next.js automatically finds next available port (3001, 3002, etc.)
- Always check server.log for the actual URL
- Use `lsof -i :PORT` to see what's using a specific port

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

## Project Evolution & Migration Plans

### August 2, 2025 - SQLite Migration Project
**Current Status:** This directory (`moon-landing-defense`) contains the **ORIGINAL STATIC VERSION**
- Uses static TypeScript data in `src/data/conspiracies.ts`
- Fully functional and deployed to Netlify
- **THIS VERSION SHOULD REMAIN UNCHANGED** as a working reference

**New SQLite Version:** `moon-landing-defense-sqlite/`
- Will be a separate directory with SQLite database
- Same moon landing defense content, different data architecture
- Allows safe experimentation without breaking working version
- Can run simultaneously on different ports for comparison

**Why Two Versions:**
1. **Safety:** Preserve working static version
2. **Comparison:** Test performance/functionality differences
3. **Rollback:** Easy to revert if SQLite version has issues
4. **Learning:** Study different architectural approaches

**Directory Structure:**
```
MayoSlayo_Sites/
├── moon-landing-defense/          # ← THIS DIRECTORY (static data)
└── moon-landing-defense-sqlite/   # ← New SQLite version (to be created)
```

**Next Steps:**
1. Create `moon-landing-defense-sqlite/` directory (copy of this project)
2. Migrate static data to SQLite database
3. Update data access patterns to use database queries
4. Test and compare both versions

## Issue Resolution Log

### August 2, 2025 - Development Server Port Conflict
**Problem:** Server appeared to start but was inaccessible at localhost:3000
**Root Cause:** Port 3000 was in use, Next.js switched to 3001 but this wasn't clearly communicated
**Solution:** 
- Used background process with logging: `nohup npm run dev > server.log 2>&1 &`
- Checked actual port in server.log
- Server successfully running on localhost:3001
**Prevention:** Added Development Server Startup Protocol to avoid future confusion

---
*Last updated: August 2, 2025*
*Next conversation can continue from this context*