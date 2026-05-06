# PR Template Checklist

Use this checklist in every pull request. A PR should not be merged until all applicable items are checked.

## Scope
- [ ] PR description clearly explains what changed and why.
- [ ] Screens/features affected are listed.
- [ ] Any risky/global files touched are explicitly called out.

## Architecture & Routing
- [ ] New routes were added via `src/app/**/page.jsx` and follow existing route conventions.
- [ ] Route shell behavior is correct (dashboard/guest/blank/front-pages).
- [ ] Internal links use `getLocalizedUrl` where applicable.
- [ ] Navigation/menu entries updated in both vertical and horizontal menu configs when needed.

## i18n & Locale
- [ ] Feature works with locale-prefixed routes (`/:lang/...`).
- [ ] No hardcoded `/en/...` paths were introduced.
- [ ] User-facing labels/messages are translation-ready (dictionary update done where required).
- [ ] RTL/LTR checked (especially for spacing/alignment-sensitive UI).

## Theme & Styling
- [ ] Dark mode and light mode both verified.
- [ ] Skin modes (`default` and `bordered`) checked if affected.
- [ ] No avoidable hardcoded semantic colors (e.g. raw `red`, `blue`, random hex in feature UI states).
- [ ] No avoidable inline style blocks for spacing/layout.
- [ ] Existing shared styling/tokens/components reused (table styles, OptionMenu, Avatar, etc.).

## Responsiveness & Layout
- [ ] Mobile, tablet, and desktop layouts verified.
- [ ] No global horizontal scroll introduced.
- [ ] Table/content overflow remains locally contained.
- [ ] Header/sidebar/content behavior remains intact.

## Forms & Validation
- [ ] Form validation implemented with existing project pattern (`react-hook-form` + resolver/schema where applicable).
- [ ] Field-level errors and required-field behavior are consistent.
- [ ] Form controls are accessible and keyboard-usable.

## Data/API/Auth
- [ ] API/data changes go through `src/services/*` and/or data facade patterns.
- [ ] Error handling implemented (user-visible, not console-only).
- [ ] Loading and empty states implemented.
- [ ] Auth-guarded and guest-only route behavior validated if applicable.

## State Management
- [ ] Global state changes use existing Redux slice conventions when cross-screen state is needed.
- [ ] Local state used for local-only concerns.
- [ ] No unnecessary duplicated state copies for large datasets.

## Performance
- [ ] Heavy views/tables avoid avoidable re-renders (memoization/debouncing where relevant).
- [ ] Pagination/filtering behavior verified.
- [ ] Any lazy-loaded modules still provide usable fallback states.

## Accessibility & UX
- [ ] Interactive controls have proper semantics (`button`, `a`, etc.).
- [ ] Icon-only actions have meaningful labels/ARIA where needed.
- [ ] Keyboard navigation and focus order verified.
- [ ] Loading, empty, and error UX states are present and readable.

## Quality Gates
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Manual smoke test completed for affected flows.

## Reviewer Notes
- [ ] Screenshots or video attached for UI changes.
- [ ] Follow-up tasks/known limitations documented.
- [ ] Any intentional deviations from `DEVELOPMENT_GUIDELINES.md` are justified.
