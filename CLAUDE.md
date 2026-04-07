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

## Session Updates (April 2026) — sqlite version only

### Active Working Directory
All current work is in `moon-landing-defense-sqlite/`. The original `moon-landing-defense/` is untouched as a reference backup.

### 🚨 CRITICAL: Never run `npm run build` while dev server is running
Running `npm run build` while `npm run dev` is active overwrites `.next/` mid-session, causing chunk hash mismatches and a broken browser experience (CSS 404s, ChunkLoadError). The fix is always:
```bash
pkill -f "next dev" && rm -rf .next && nohup npm run dev > server.log 2>&1 &
```
After that, hard refresh the browser with `Cmd + Shift + R`.

### Site Identity
- **Domain:** werethemoonlandingsreal.com
- **Contact email:** apollodefender@gmail.com
- **Deployment:** Netlify (build: `npm install && npm run build`, publish: `.next`)

### Evidence Page Upgrade Pattern
A standard upgrade pattern was established and saved as a Claude skill (`evidence-page-upgrade`). Applied to these pages:
- `/evidence/countries-confirmed-60s-moon-landings` ✅
- `/evidence/retroreflectors` ✅
- `/evidence/workforce` ✅
- `/evidence/moon-rocks` ✅

Pattern includes: keyword-rich h1, expanded subtitle, intro block with strong h2, FaqAccordion component, FAQPage JSON-LD schema, external links on grids, `page-hero-content` class on hero div.

### Components
- `src/components/FaqAccordion.tsx` — client component (`'use client'`), accepts `{ items: { q: string; a: string }[] }`. Used on all upgraded evidence pages.
- `src/components/Header.tsx` — accepts `transparent?: boolean` prop. Nav "Search" link uses `href="/#search"`.
- `src/components/ChatWidget.tsx` — sticky bottom-right chat, pure keyword matching, zero API calls.

### Pages Added This Session
- `/evidence/images-videos-prove-moon-landings` — Apollo photo analysis page. Uses 9 images from `/public/images/moon/` (AS11–AS17 originals). All sourced from NASA Earth Observations (eol.jsc.nasa.gov). Gallery + 2-column analysis sections + FAQ.

### Homepage Structure (current)
1. Hero — h1 (small all-caps): "Were the Apollo Moon Landings in the 60s Faked?" + h2: "Defend Apollo"
2. Two side-by-side cards: "Who This Site Is Built For" + "Are You Certain The Landings Were Faked?"
3. Search section — `id="search"` for anchor targeting
4. Results section
5. Stats grid (4 cards)
6. Top 5 Pieces of Evidence:
   - Retroreflectors → `/evidence/retroreflectors`
   - 400K Workforce → `/evidence/workforce`
   - Moon Rocks → `/evidence/moon-rocks`
   - 30+ Countries → `/evidence/countries-confirmed-60s-moon-landings`
   - Apollo Photos → `/evidence/images-videos-prove-moon-landings`

### Debate Tips Page
Fully redesigned — cheat sheet grid (11 tiles, each anchors to `#tip-N`), colored header bars with large faded numbers, paired side-by-side cards for tips 3&4, 7&8, 10&11, editorial split intro section replacing the old dark blue block.

### CSS Classes (globals.css)
- `.page-hero` — space.jpg background with dark overlay, `position: relative`
- `.page-hero > *` — `position: relative; z-index: 1` (required for text visibility)
- `.page-hero-content` — use on the inner div of every page hero for consistent padding/centering
- `.hero-space` — homepage hero variant, `min-height: 90vh`

### Creator Page
- Contact: apollodefender@gmail.com
- Responses only via LinkedIn (direct message or public email listed on profile)

---

## Session Notes — April 6, 2026

### What We Built / Changed

#### Evidence Pages — Upgrade Pattern Applied
Three pages upgraded to match the countries page pattern (previously established):
- `src/app/evidence/retroreflectors/page.tsx`
- `src/app/evidence/workforce/page.tsx`
- `src/app/evidence/moon-rocks/page.tsx`

Each received: keyword-rich h1, 2–3 sentence subtitle, intro block with strong h2 + 2 paragraphs, `FaqAccordion` with 5 Q&As, `FAQPage` JSON-LD schema injected via `<script dangerouslySetInnerHTML>` immediately after `<Header>`, `page-hero-content` class on hero inner div. All are pure server components — no `'use client'`, so `export const metadata` works directly.

#### New Page — Apollo Photos
`src/app/evidence/images-videos-prove-moon-landings/page.tsx`

- URL chosen for SEO target: "images videos prove moon landings"
- Source content from `/public/moon-images.txt` (written by user, preserved as-is)
- 9 Apollo images in `/public/images/moon/` (AS11–AS17 originals from NASA EOL archive)
- Structure: hero → intro block → full 9-image gallery → 3-column "what people think" summary → 4 analysis sections in **alternating 2-column layout** (image left/right alternating) → FAQ accordion → sources
- Every image has NASA source URL (`eol.jsc.nasa.gov/DatabaseImages/ISD/highres/...`) as a clickable link under it
- Uses `next/image` with `fill` + `aspect-square` wrapper for consistent gallery sizing
- FAQPage JSON-LD schema included

#### Homepage — Multiple Changes
File: `src/app/page.tsx`

1. **Hero h1/h2 restructure**: Added small all-caps h1 `"Were the Apollo Moon Landings in the 60s Faked?"` above the existing "Defend Apollo" h2. h1 styled with `text-sm tracking-[0.25em] uppercase text-gray-300`. Why: SEO keyword targeting — the h1 carries the search query, h2 carries the brand.

2. **Subtitle rewrite**: Now reads *"Half a century of lies hasn't touched the truth...smarter, faster, and more effectively than ever."*

3. **Two new sections inserted between hero and search**:
   - "Who This Site Is Built For" (light card) — copy-paste use case, search tool, truth defenders
   - "Are You Certain The Landings Were Faked?" (dark card) — dismissal of bad-faith visitors, invitation for genuinely curious undecided readers
   
4. **Search section** got `id="search"` for anchor targeting.

5. **Top 5 Evidence**: Removed duplicate "Soviet Union Cold War Rivals Confirmed" entry (both it and item 5 previously linked to the same countries page). Added new "The Photos and Videos Are Real" entry linking to `/evidence/images-videos-prove-moon-landings`. Title updated back to "Top 5 Pieces of Evidence".

6. **Stat card**: Replaced duplicate retroreflectors card with photos page card.

7. **"Try Moon Defense" button** scroll logic fixed from fragile `section:nth-of-type(2)` selector to `document.getElementById('search')`. Why: new sections were inserted above search, breaking the nth-of-type offset.

#### Nav — Search Link Fixed
`src/components/Header.tsx`: "Search" nav link changed from `href="/"` to `href="/#search"` (both desktop and mobile). Why: it was just reloading the homepage with no scroll. Hash anchor works from any page, not just the homepage.

#### Debate Tips Page — Full Redesign
`src/app/debate-tips/page.tsx` — same content, completely new layout:
- Dark hero with new h1
- Editorial split intro (white, 2-col: large headline left, 3 paragraphs with left border right). **Replaced the dark gray section that looked blue/jarring after the hero.**
- Cheat sheet grid (11 tiles + 1 summary tile) — each tile is now an `<a href="#tip-N">` anchor link with hover state. Tip cards have `id="tip-N"` matching.
- Colored header bars on each card with large faded number as design element
- Tips 3&4, 7&8, 10&11 paired in 2-col grids to break monotony
- Strong dark final section

#### Creator Page
- Email corrected: `moondefender@gmail.com` → `apollodefender@gmail.com` (both display text and `mailto:`)
- Removed passphrase ("Apollo Mehawllo") line entirely
- Replaced with: responses via LinkedIn direct message or public email listed on LinkedIn profile

---

### Bugs Hit & Fixes

**ChunkLoadError / CSS 404s (recurring, happened 3+ times)**
- **Cause:** Running `npm run build` while `npm run dev` is active. Build overwrites `.next/` chunk hashes mid-session. Browser holds old references, server serves new ones — mismatch.
- **Fix every time:**
  ```bash
  pkill -f "next dev" && rm -rf .next && nohup npm run dev > server.log 2>&1 &
  # then Cmd+Shift+R in browser
  ```
- **Prevention:** Never run `npm run build` during an active dev session. If you need to verify a build, stop the dev server first.

---

### Technical Decisions & Why

| Decision | Why |
|---|---|
| `id="search"` anchor + `href="/#search"` in nav | Works from any page, not just homepage. More robust than JS scroll targeting. |
| FAQPage JSON-LD via `dangerouslySetInnerHTML` | Static data — no injection risk. Required for AEO (AI engine / Google rich results). |
| `FaqAccordion` as separate `'use client'` component | Lets server pages keep `export const metadata`. Can't mix `'use client'` with metadata exports in same file. |
| `next/image` with `fill` on gallery | Consistent aspect ratios across varied source image dimensions. |
| Alternating 2-col layout (image left/right) | Breaks visual monotony on long analysis pages without extra components. |
| Cheat sheet tiles as `<a>` anchors not buttons | No JS needed, works with browser back/forward, SEO-friendly. |

---

### Current Project State (end of session)

**Pages:**
- `/` — fully redesigned homepage
- `/evidence` — evidence library (unchanged this session)
- `/evidence/retroreflectors` ✅ upgraded
- `/evidence/workforce` ✅ upgraded
- `/evidence/moon-rocks` ✅ upgraded
- `/evidence/countries-confirmed-60s-moon-landings` ✅ upgraded (previous session)
- `/evidence/images-videos-prove-moon-landings` ✅ new this session
- `/evidence/missions` — exists, NOT yet upgraded
- `/debate-tips` ✅ redesigned
- `/creator` ✅ email/contact updated

**Not yet done:**
- `/evidence/missions` page has not received the upgrade pattern treatment
- No deployment yet — site is local only, ready to push to Netlify
- Git remote needs to be set up cleanly (tokens were removed from the remote URL in a prior session — confirm remote is clean before first push)

**To deploy:**
```bash
cd "/Users/lebeast/Claude/MayoSlayo_Sites/moon-landing-defense-sqlite"
git remote -v  # verify no token in URL
git add .
git commit -m "Major UI overhaul — evidence pages, photos page, homepage redesign, debate tips"
git push origin main  # triggers Netlify build
```

---
*Last updated: April 6, 2026*
*Next conversation can continue from this context*