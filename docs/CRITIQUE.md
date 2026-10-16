# Design critique: portfolio homepage

Run on 2026-10-16 with Impeccable `critique`, using two independent passes: a design review of the code and live site, and Impeccable's automated detector (CLI and in-browser).
Use this as the backlog. We work through it one step at a time and tick items off as they land.

## Design health score: 20/32 (62.5%, Acceptable)

Heuristics 7 and 10 don't apply to a one-page portfolio, so the maximum is 32.

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Contact isn't in the nav, so "Play" stays active while reading Contact |
| 2 | Match with the real world | 2 | Nav says Hello / Study / Play; job "stats" E2E / Now / React are labels posing as numbers |
| 3 | User control and freedom | 3 | Mobile menu has no Esc or click-outside close |
| 4 | Consistency and standards | 2 | Numbering skips About; nav labels don't match section titles; butterfly removes the hand cursor on links |
| 5 | Error prevention | 2 | Three Résumé links point to a missing PDF |
| 6 | Recognition over recall | 2 | Three of four skill groups hidden in tabs; "Research: 2023" and "Built: LibManage" need context |
| 7 | Flexibility and efficiency | n/a | Single-page portfolio, no expert workflows |
| 8 | Aesthetic and minimalist design | 3 | Strong palette and type; Work is 2,100px tall on desktop and 3,480px on mobile; card media takes ~40% of each card |
| 9 | Error recovery | 1 | Broken Résumé link fails with no explanation or fallback |
| 10 | Help and documentation | n/a | Nothing needs documenting |

## Does it feel authored?

Half. The hero (name split around the portrait) and the About line, "both sides of the bug: building the feature, then trying to break it", are clearly hers. From Work down the page falls back to a template: numbered section heads with an eyebrow, a big-number stats row, identical rounded cards with pill tags. The build/break thesis never returns after About. Project cards and polaroids use placeholder gradients and glyphs instead of real work.

## What's working

1. **Hero composition.** The name is laid out around the subject, not stamped on top, and holds at 500px.
2. **Copy voice.** "Tests like a skeptic" and "both sides of the bug" are specific and believable.
3. **Accessibility foundations.** Proper WAI-ARIA tabs with arrow keys, `aria-pressed` filter chips, `aria-current` in the nav, reduced motion respected for reveals and the glitter trail, cursor effects limited to fine pointers.

## Priority issues

- [ ] **[P0] Résumé broken in 3 places.** `Nav.jsx:39`, `Hero.jsx:29`, `Contact.jsx:15` (path in `data.js:11`). Fix: add `public/resume.pdf`; until then, swap the links for "Résumé on request". Add file size text. Command: `harden`.
- [ ] **[P1] Butterfly cursor hides cursor cues.** `styles.css:37-39` sets `cursor: none !important` on everything, so links lose the hand and text loses the I-beam; the cursor is still replaced under reduced motion. Fix: keep the butterfly, give it a "landing" state over links and buttons, hand the cursor back under `prefers-reduced-motion`. Commands: `harden` + `delight`.
- [ ] **[P1] Work shows no actual work.** Gradient placeholders and mottos (`Work.jsx:31-33`, `data.js:59-120`). Fix: real screenshots or short loops, a one-line outcome per project, live links where they exist, 2–3 featured large and the rest as a list; move "This portfolio" to Play. Commands: `layout`, then `bolder`.
- [ ] **[P2] Recruiter scan path is weak.** Fake job stats (`data.js:124-150`) outrank the role on mobile; skills hidden in tabs; no graduation year; cute nav labels; no open-to-roles signal. Fix: real metric or none; role and company first on mobile; all four skill groups visible in a 2×2; plain nav labels plus Contact; a hero line naming the role sought. Commands: `clarify` + `distill`.
- [ ] **[P2] Build/break thesis dropped after About.** Fix: a "Built / Broke" pair on each project (what it does, what testing caught); Experience as a builder/tester timeline. Command: `bolder`.
- [ ] **[P2] Closed mobile menu stays in the tab order.** `styles.css:412-417` hides it with `max-height: 0; overflow: hidden`, so keyboard users tab through 7 invisible links. No Esc, no focus management, no skip link. Also flagged by the detector as a layout-property animation. Commands: `harden` / `adapt`.

## Personas

- **Recruiter skimming for 30 seconds.** Gets name, tagline and stats. Misses the current role (buried in About paragraph 2), the résumé (broken), three quarters of the skills (tabs) and any open-to-roles signal.
- **Jordan (first-timer).** "Hello", "Study" and "Play" don't say where they go; "Play" opens "Side quests". Four hero actions with no clear first step. Polaroids open GitHub in a new tab with no ↗ cue.
- **Riley (stress tester).** Résumé returns HTML in dev and will 404 in production. Mobile menu has no Esc or focus trap. No skip link. Filtering leaves odd card counts and the section height jumps.
- **Casey (mobile).** Hero name drops to ~28px hairline Bodoni over a busy dress. "Cloud & AI" wraps alone onto a second tab row. Stat labels wrap with loose leading. Work is a 3.5k-pixel scroll.

## Cognitive load

- More than 4 options at once: nav has 7 items; the hero has 4 actions with no primary.
- Facts repeated: Cal State Fullerton / 120+ students appears in About, Experience and Education; LibManage in Work and Education.
- Experience on mobile: the decorative stat is the largest element and sits above the job title.
- Progressive disclosure in the wrong place: skills hidden, while six job cards (including a three-month contract) all get full weight.

## Detector findings

CLI (`detect.mjs`): 1 finding, `layout-transition` at `styles.css:415` (mobile nav `max-height`).

Browser overlay: 9 rules, 21 hits.

| Rule | Hits | Where | Verdict |
|---|---|---|---|
| kicker-above-heading | 7 | eyebrow above every section heading | Real. Impeccable bans eyebrows above headings |
| all-caps-body | 4 | `.eyebrow` (`styles.css:99-103`) | Borderline: short labels, not body copy |
| undersized-ui-text | 3 | `.edu__facts dt` at 10.88px (`styles.css:339`) | Real |
| overused-font | 1 | Roboto as 63% of text | Real in the test browser; the system UI font stack falls back to Roboto there |
| cream-palette | 1 | page background `#FBF6F2` | Real stylistic pattern, design call |
| layout-transition | 1 | `styles.css:415` | Real but minor; intentional drawer animation |
| low-contrast | 1 | `.hero__tagline`, measured on the `#c9b2a4` fallback | Likely false positive; check against the photo |
| dark-glow | 1 | `.spark--dot` glow (`styles.css:77`) | False positive: short-lived decorative sparks |

Also: React warns about the `fetchPriority` prop on the hero `<img>`.

## Minor observations

- Section numbering skips About.
- `SectionHead` forces a `<br>` in every title, even where it shouldn't break.
- Card category text is 11.2px uppercase and tag text 12.8px: small for a recruiter audience.
- Card mottos and polaroid glyphs (♫, "ha!", "</>", "O(n)") are read aloud by screen readers; mark them `aria-hidden`.
- `--serif` lists Georgia before Source Serif 4, so the web font effectively never loads (`styles.css:15`). Deliberate for readability; drop the unused import if Georgia stays.
- Four voices: Bodoni, Georgia, system sans, and Caveat (used twice).
- Footer only repeats information; could carry location or availability.
- Contact relies on `mailto:` with no copy-email action.

## Questions to consider

1. The site says "I build it, then I break it". What if every project showed what it does *and* what testing caught?
2. If you could show only one project, which one, and why isn't Work built around it?
3. How does the butterfly keep its charm without taking the hand cursor away from links?

