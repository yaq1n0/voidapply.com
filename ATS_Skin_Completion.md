VoidApply: ATS Skin Completion with Playwright Agentic Loop

## Status: ALL PHASES COMPLETE ✅

---

## ✅ Phase 0: Playwright Setup — DONE

- `@playwright/test` installed as devDependency, Chromium installed
- `playwright.config.ts` created at project root
  - baseURL: `http://localhost:5174` (separate port — does not touch your dev server on 5173)
  - webServer: `npm run dev -- --port 5174`, `reuseExistingServer: false` (Playwright owns its own instance)
  - Two projects: `chromium` (light) and `chromium-dark` (dark), 1280×800
  - `testMatch: '**/*.ts'` — enables discovery of non-spec test files
  - Output dir: `playwright/test-results/`
- `playwright/screenshot.ts` created
  - Uses `testInfo.project.name` to route to `light/` or `dark/` dir (fixed from broken env var approach)
  - Reads `SKIN` / `REJECTION` env vars to target specific IDs, defaults to all
  - Navigates to `/debug/skin/:id` or `/debug/rejection/:id`
  - Waits networkidle + 2000ms
  - Saves to `playwright/screenshots/{light|dark}/{id}.png`
- npm scripts added: `screenshot`, `screenshot:dark`, `screenshot:all`

---

## ✅ Phase 1: Pre-Wiring — DONE

All files updated before any parallel skin work:

- `src/debug/DebugSkinPage.tsx` — refactored to `SKIN_REGISTRY` map (`Map<string, React.ComponentType<any>>`), all 13 skins registered
- `src/debug/DebugRejectionPage.tsx` — refactored to `REJECTION_REGISTRY` map, all 11 modes registered
- `src/data/skins.ts` — all 13 skins present with correct accentColor hex
- `src/data/rejectionModes.ts` — all 11 modes present
- `src/debug/mockData.ts` — rejectionContent added for `interview-then-ghost`, `culture-fit`, `phantom-offer`
- `src/types/index.ts` — `assessment-gauntlet`, `culture-fit`, `phantom-offer` added to `RejectionModeId`; `CultureFitContent` and `PhantomOfferContent` types added

`npm run type-check` passes clean.

---

## ✅ Phase 2: Skin Implementation — DONE (visually verified)

All 10 new skins implemented and screenshot-verified against `ATS_UI_reference.md`.

| Skin ID          | File                 | Status      |
| ---------------- | -------------------- | ----------- |
| linked-out       | `LinkedOut.tsx`      | ✅ Verified |
| ashbye-hq        | `AshbyeHQ.tsx`       | ✅ Verified |
| byebob           | `ByeBob.tsx`         | ✅ Verified |
| rejectable       | `Rejectable.tsx`     | ✅ Verified |
| lever-to-nowhere | `LeverToNowhere.tsx` | ✅ Verified |
| bamboom          | `BamBoom.tsx`        | ✅ Verified |
| teamfailor       | `Teamfailor.tsx`     | ✅ Verified |
| icantms          | `IcantMS.tsx`        | ✅ Verified |
| dumb-recruiters  | `DumbRecruiters.tsx` | ✅ Verified |
| jobvoid          | `JobVoid.tsx`        | ✅ Verified |

---

## ✅ Phase 3: Rejection Mode Implementation — DONE (visually verified)

All 6 new rejection modes implemented and screenshot-verified.

| Mode ID              | File                     | Status      |
| -------------------- | ------------------------ | ----------- |
| shredder             | `Shredder.tsx`           | ✅ Verified |
| black-hole           | `BlackHole.tsx`          | ✅ Verified |
| assessment-gauntlet  | `AssessmentGauntlet.tsx` | ✅ Verified |
| culture-fit          | `CultureFit.tsx`         | ✅ Verified |
| interview-then-ghost | `InterviewThenGhost.tsx` | ✅ Verified |
| phantom-offer        | `PhantomOffer.tsx`       | ✅ Verified |

---

## ✅ Phase 4: Existing Skin Audit — DONE

- **WorkNight**: Nav color fixed to `#003b5c`, progress replaced with horizontal clickable step list (completed steps show ✓ and are clickable)
- **GreenHouseOfPain**: Submit button fixed to `#24a47f`, "Powered by Greenhouse" footer badge added
- **Talaeo**: Fixed to `max-w-[800px]`, Windows XP-era tab navigation added above the header

---

## ✅ Phase 5: Visual Review Loop — DONE

### Fixes applied during review

- **WorkNight**: Wrapped step content in `<form>` element (was bare `<div>`) — smoke test now passes
- **WorkNight**: CTA button corrected from orange to Workday blue `#0875e1` to match spec primary color

### Screenshots captured

- `playwright/screenshots/light/` — 13 skin PNGs + 11 rejection PNGs (24 total)
- `playwright/screenshots/dark/` — 13 skin PNGs + 11 rejection PNGs (24 total)
- **48 screenshots total, all passing**

### Smoke test

- `playwright/smoke.spec.ts` — verifies every skin renders a `<form>` and every rejection renders
- **24/24 smoke tests pass** (`npx playwright test playwright/smoke.spec.ts --project=chromium`)

### Visual verification per skin

| Skin | Primary/CTA color | Layout | ≥3 quirks | Dark mode |
|---|---|---|---|---|
| worknight | ✅ `#0875e1` | ✅ multi-step-wizard | ✅ | ✅ |
| greenhouse-of-pain | ✅ `#24a47f` | ✅ single-long-form | ✅ | ✅ |
| talaeo | ✅ `#005b99` | ✅ multi-step-wizard-legacy | ✅ | ✅ |
| linked-out | ✅ `#0a66c2` | ✅ multi-step-modal | ✅ | ✅ |
| ashbye-hq | ✅ `#000000` | ✅ single-clean-form | ✅ | ✅ |
| byebob | ✅ `#ff5a5f` | ✅ friendly-card-form | ✅ | ✅ |
| rejectable | ✅ `#ff4940` | ✅ card-sections | ✅ | ✅ |
| lever-to-nowhere | ✅ `#5b2be0` | ✅ two-column | ✅ | ✅ |
| bamboom | ✅ `#73ac3a` | ✅ clean-single-form | ✅ | ✅ |
| teamfailor | ✅ `#4ac4a1` | ✅ branded-career-page | ✅ | ✅ |
| icantms | ✅ `#0066cc` | ✅ multi-step-wizard-enterprise | ✅ | ✅ |
| dumb-recruiters | ✅ `#1565c0` | ✅ single-page-with-sections | ✅ | ✅ |
| jobvoid | ✅ `#e31837` | ✅ single-page-legacy-modern | ✅ | ✅ |

**Reference:** `ATS_UI_reference.md` is the ground truth for all spec details (colors, layout, quirks).
