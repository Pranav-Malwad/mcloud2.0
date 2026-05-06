# DEVELOPMENT_GUIDELINES

This file is the project-specific source of truth for adding or modifying features in this codebase. These rules are derived from the current implementation and must be followed to keep UI, behavior, and architecture consistent.

---

## 1. Project-Wide Development Principles

### 1.1 Architecture Pattern Actually Used
- Runtime is a **Vite + React Router SPA**, not a real Next.js runtime.
- Route source is **Next-like** (`src/app/**/page.jsx`) and is converted to React Router paths in [`src/router/AppRoutes.jsx`](src/router/AppRoutes.jsx).
- Layout composition is shell-based in [`src/router/RouteShells.jsx`](src/router/RouteShells.jsx):
  - `DashboardShell` (private)
  - `GuestShell`
  - `BlankShell`
  - `FrontPagesShell`
- UI implementation is feature-folder oriented in `src/views/**`.
- Data currently follows a **facade + fallback** model:
  - Page-level callers use [`src/app/server/actions.js`](src/app/server/actions.js)
  - Actions call [`src/services/data/dataAccess.js`](src/services/data/dataAccess.js)
  - `dataAccess` switches between `fake-db` and API mode (`VITE_DATA_MODE`).

### 1.2 Folder Organization Philosophy
- `src/app/**`: route entry files and route-level composition.
- `src/views/**`: page/feature UI internals (primary place for feature work).
- `src/components/**`: reusable/shared components.
- `src/@core/**`: global UI primitives, theme, shared hooks/contexts.
- `src/@layouts/**`: vertical/horizontal/blank layout framework.
- `src/@menu/**`: navigation engine and menu rendering.
- `src/services/**`: API/auth/data access layers.
- `src/fake-db/**`: mock domain data.
- `src/redux-store/**`: global state for selected app modules (chat/calendar/kanban/email).

### 1.3 Reuse Strategy (Mandatory)
- Reuse existing primitives before creating new ones:
  - Table styles: [`src/@core/styles/table.module.css`](src/@core/styles/table.module.css)
  - Option action menus: `@core/components/option-menu`
  - Avatars: `@core/components/mui/Avatar`
  - Layout wrappers: `@layouts/*`
  - Toast: [`src/libs/styles/AppReactToastify.jsx`](src/libs/styles/AppReactToastify.jsx)
- If adding a new pattern that will appear in 2+ places, extract to `src/components` or `src/@core/components`.

### 1.4 Naming & File Conventions
- Route files are `page.jsx` under `src/app/...`.
- Most screen modules use `index.jsx` as feature entry and `*Table.jsx`, `*Card.jsx`, `*Drawer.jsx`, `*Dialog.jsx` for subparts.
- Alias imports are standard and expected (`@`, `@core`, `@layouts`, `@menu`, etc.) via [`vite.config.js`](vite.config.js).

### 1.5 Existing Coding Style
- Functional React components.
- MUI components + Tailwind utility classes hybrid.
- `classnames` is used where class combinations are dynamic.
- `useMemo` around large TanStack table column definitions is a common pattern.
- Existing code is mixed in quality; follow the stricter rules in this file when writing new code.

### 1.6 UI Structure Patterns
- Page composition commonly uses `Grid container spacing={6}` with `Grid item xs={12}` sections.
- Cards are primary content containers for data blocks.
- Tables are wrapped in `div.overflow-x-auto` and use `table.module.css`.

### 1.7 Responsiveness Strategy
- Combination of:
  - MUI breakpoints (`useMediaQuery(theme => theme.breakpoints.down(...))`)
  - Tailwind responsive classes (`max-sm:*`, `md:*`, `lg:*`)
- Keep overflow constrained to component containers, never page/body.

---

## 2. Global Styling & Theme Rules

### 2.1 Theme System
- Core theme is created in [`src/@core/theme/index.js`](src/@core/theme/index.js).
- Provider stack in [`src/components/theme/index.jsx`](src/components/theme/index.jsx):
  - `CssVarsProvider`
  - `AppRouterCacheProvider` (compat)
  - `CssBaseline`
- Theme mode and settings are controlled by `SettingsContext` in [`src/@core/contexts/settingsContext.jsx`](src/@core/contexts/settingsContext.jsx).

### 2.2 Global Tokens and CSS Variables
- Global variables are defined in [`src/app/globals.css`](src/app/globals.css), including:
  - `--border-radius`, `--border-color`, `--primary-color`, `--background-color`
  - z-index variables and backdrop variables
- Dark-mode overrides are done via `[data-mui-color-scheme='dark']`.

### 2.3 Typography & Spacing Baseline
- Typography scale defined in [`src/@core/theme/typography.js`](src/@core/theme/typography.js).
- Base spacing function in [`src/@core/theme/spacing.js`](src/@core/theme/spacing.js): `0.25rem * factor`.
- Default shape and custom radii in [`src/@core/theme/index.js`](src/@core/theme/index.js):
  - base radius 10
  - custom xs/sm/md/lg/xl radius tokens

### 2.4 Colors, Shadows, and States
- Color schemes centralized in [`src/@core/theme/colorSchemes.js`](src/@core/theme/colorSchemes.js).
- Custom shadow scale in [`src/@core/theme/customShadows.js`](src/@core/theme/customShadows.js).
- Button/input/chip/etc behavior should rely on theme overrides in `src/@core/theme/overrides/**`.

### 2.5 Tailwind Usage in This Project
- Tailwind is enabled with `important: '#__next'` and `preflight: false` in [`tailwind.config.js`](tailwind.config.js).
- Logical properties plugin is enabled (`tailwindcss-logical`) to support RTL/LTR.
- Use utility classes for spacing/layout helpers, not for re-defining global design tokens.

### 2.6 Mandatory Styling Rules for New Work
- Use theme tokens/CSS vars for colors (`text-textSecondary`, `var(--mui-palette-...)`) instead of literal hex/blue/red.
- Prefer MUI `sx` and class utilities over inline `style={{...}}`.
- Reuse existing border radius and shadow tokens.
- Preserve `data-skin` behavior for bordered/default skins.

### 2.7 Forbidden Styling Approaches
- Hardcoded semantic colors in feature code (`style={{ color: 'red' }}`, `'blue'`, random hex) for normal states.
- Inline spacing like `style={{ marginTop: '16px' }}` when class/sx token alternatives exist.
- Creating one-off table CSS when `@core/styles/table.module.css` applies.

### 2.8 Inconsistencies Currently Present (Do Not Repeat)
- Hardcoded color and spacing examples in `src/views/apps/orders/**` (multiple `style={{ ... }}` usages).
- Hardcoded menu style hex values in:
  - `src/@menu/styles/vertical/StyledVerticalNavContainer.jsx`
  - `src/@menu/styles/vertical/StyledVerticalMenuSection.jsx`
- Mixed coding style and formatting in some newer files (e.g. `src/components/pane/index.jsx`).

---

## 3. Internationalization (i18n) Rules

### 3.1 Current i18n Mechanism
- Locales and direction are defined in [`src/configs/i18n.js`](src/configs/i18n.js).
- Dictionaries are in [`src/data/dictionaries`](src/data/dictionaries) (`en.json`, `fr.json`, `ar.json`).
- Localized path helper is [`src/utils/i18n.js`](src/utils/i18n.js) -> `getLocalizedUrl`.
- Dynamic dictionary loading utility: [`src/utils/getDictionary.js`](src/utils/getDictionary.js).

### 3.2 Language Switching & URL Rules
- Routes are locale-prefixed (`/:lang/...`).
- Navigation/menu links are localized through `getLocalizedUrl` in [`src/components/GenerateMenu.jsx`](src/components/GenerateMenu.jsx).
- For routes that must be language-agnostic (external/front-pages), use `excludeLang` where supported.

### 3.3 Rules for New UI Text
- If text is app navigation/global label, add to dictionaries.
- Do not hardcode reusable UI labels directly in multiple components.
- For per-feature static placeholders currently hardcoded, plan progressive migration to dictionary keys.

### 3.4 RTL/LTR Requirements
- RTL is supported by theme provider using `stylis-plugin-rtl` in [`src/components/theme/index.jsx`](src/components/theme/index.jsx).
- Use logical CSS utilities/properties (`inline`, `block`, `margin-inline`) where possible.
- Avoid left/right-specific hardcoded style unless intentional and reviewed.

### 3.5 MUST-DO for New Pages
- Every internal route link must be built with `getLocalizedUrl`.
- Use `useParams().lang` when constructing locale-sensitive links.
- Verify page in `en`, `fr`, and `ar` for direction and truncation issues.

---

## 4. Layout & Responsiveness Rules

### 4.1 Layout Framework
- Layout wrappers:
  - [`src/@layouts/VerticalLayout.jsx`](src/@layouts/VerticalLayout.jsx)
  - [`src/@layouts/HorizontalLayout.jsx`](src/@layouts/HorizontalLayout.jsx)
  - [`src/@layouts/BlankLayout.jsx`](src/@layouts/BlankLayout.jsx)
- Layout class contracts in [`src/@layouts/utils/layoutClasses.js`](src/@layouts/utils/layoutClasses.js).

### 4.2 Sidebar/Header Behavior
- Vertical nav behavior from `@menu` hooks/contexts and [`src/components/layout/vertical/Navigation.jsx`](src/components/layout/vertical/Navigation.jsx).
- Collapse mode is synced with settings (`settings.layout === 'collapsed'`).

### 4.3 Grid/Container Standards
- Use MUI Grid for page sections (`spacing={6}` appears as baseline).
- Keep content sections inside Cards or structured wrappers.
- Use `commonLayoutClasses.contentHeightFixed` for full-height app panels (see chat layout).

### 4.4 Scroll/Overflow Standards
- Body/html overflow-x is globally hidden in [`src/app/globals.css`](src/app/globals.css).
- Table overflow must be local: wrap tables in `div.overflow-x-auto`.
- Do not introduce `100vw` wrappers that can reintroduce horizontal scroll.

### 4.5 Modal and Drawer Responsiveness
- Use MUI Dialog/Drawer patterns already in `src/views/apps/**` and `src/components/dialogs/**`.
- Ensure mobile widths and close controls are explicit.

### 4.6 Common Layout-Breaking Mistakes
- Creating fixed-width table/action rows without overflow wrappers.
- Using inline pixel offsets instead of responsive utility classes.
- Forgetting skin-dependent border/shadow behavior.

---

## 5. Reusable Component Guidelines

### 5.1 Shared Components to Reuse First
- Layout shell pieces: `src/components/layout/**`
- Table base style: [`src/@core/styles/table.module.css`](src/@core/styles/table.module.css)
- Option menus: `@core/components/option-menu`
- Avatars: `@core/components/mui/Avatar`
- Tabs panel: [`src/components/tabs-panel/index.jsx`](src/components/tabs-panel/index.jsx)
- Shimmer loader: [`src/components/shimmer-effect/index.jsx`](src/components/shimmer-effect/index.jsx)
- Toast infrastructure: [`src/libs/styles/AppReactToastify.jsx`](src/libs/styles/AppReactToastify.jsx)

### 5.2 Components You Should Not Recreate Manually
- Table styling logic and row paddings.
- Standard dropdown action menu patterns.
- Global toast container/configuration.
- Theme wrappers/providers.

### 5.3 Prop/State Patterns to Follow
- TanStack tables:
  - memoized columns
  - local `globalFilter` + debounced input
  - empty-state row
  - `TablePagination`
- Reusable feature tabs use label/content arrays.

---

## 6. API & State Management Rules

### 6.1 API/Data Layer Structure
- Config: [`src/services/config/appConfig.js`](src/services/config/appConfig.js)
- HTTP client: [`src/services/http/client.js`](src/services/http/client.js)
- Data source facade: [`src/services/data/dataAccess.js`](src/services/data/dataAccess.js)
- Page-facing accessors: [`src/app/server/actions.js`](src/app/server/actions.js)

### 6.2 Authentication Handling
- Runtime session hook is from compat layer (`next-auth/react` alias): [`src/compat/next-auth/react.jsx`](src/compat/next-auth/react.jsx).
- Credential login uses [`src/services/auth/authService.js`](src/services/auth/authService.js).
- Session persistence uses localStorage via [`src/services/auth/sessionStorage.js`](src/services/auth/sessionStorage.js).
- Route protection via:
  - [`src/hocs/AuthGuard.jsx`](src/hocs/AuthGuard.jsx)
  - [`src/hocs/GuestOnlyRoute.jsx`](src/hocs/GuestOnlyRoute.jsx)

### 6.3 Redux Usage Rules
- Use Redux only for cross-screen app modules already modeled as slices (`chat`, `calendar`, `kanban`, `email`).
- For isolated page data, keep local state unless shared requirements emerge.

### 6.4 Error, Loader, Retry Standards
- API wrappers throw typed errors (`status`, `payload`) in `httpRequest`; preserve this contract.
- UI must handle:
  - loading state
  - error state
  - empty state
- Use toast/alert consistently, not ad-hoc console-only failures.
- Retry/refresh should be centralized in service layer when added.

### 6.5 New API Integration Rules
1. Add endpoint mapping in `dataAccess`.
2. Keep fallback behavior for mock mode.
3. Use async-safe getters for new development.
4. Do not call `fetch` directly from many components unless strongly justified.

---

## 7. Routing & Navigation Rules

### 7.1 Route Registration
- Add a new route by creating a new `page.jsx` in appropriate `src/app/**` path.
- `AppRoutes` auto-discovers via `import.meta.glob`.
- Do not manually add route arrays unless architecture changes.

### 7.2 Protection & Shell Assignment
- Shell assignment is path-pattern based in [`src/router/AppRoutes.jsx`](src/router/AppRoutes.jsx).
- Ensure new path fits guest/blank/dashboard/front-pages patterns, else wrong shell/auth behavior will occur.

### 7.3 Menu Registration
- Add navigation entries in:
  - [`src/data/navigation/verticalMenuData.jsx`](src/data/navigation/verticalMenuData.jsx)
  - [`src/data/navigation/horizontalMenuData.jsx`](src/data/navigation/horizontalMenuData.jsx)
- Respect `excludeLang` for non-localized targets.

### 7.4 Breadcrumb Pattern
- Reuse [`src/components/bread-crumbs/index.jsx`](src/components/bread-crumbs/index.jsx).
- Pass `path` values, not direct link elements.

### 7.5 Common Routing Mistakes
- Hardcoding `/en/...` in feature code.
- Creating links without `getLocalizedUrl`.
- Adding page file but forgetting nav dictionary/menu entries.

---

## 8. Form Development Standards

### 8.1 Existing Libraries and Patterns
- Primary form stack: `react-hook-form` + `@hookform/resolvers/valibot` + `valibot` schemas.
- See [`src/views/Login.jsx`](src/views/Login.jsx) and kanban/forms modules.

### 8.2 Required Behavior for New Forms
- Schema-based validation (valibot preferred to match current setup).
- Use `Controller` with MUI controlled components.
- Show field-level errors via `error` and `helperText`.
- Use accessible labels and aria attributes (password visibility toggles already patternized).

### 8.3 Form Layout Rules
- Consistent vertical rhythm (`gap-*` classes or MUI spacing).
- Avoid inline dimensions/margins for textareas and grouped inputs.
- Standardize submit/cancel action placement.

### 8.4 Date/Dropdown/Picker Controls
- Reuse existing style wrappers under `src/libs/styles/*` when using integrated libraries.
- Keep picker/dropdown states keyboard accessible.

---

## 9. Performance & Optimization Rules

### 9.1 Existing Patterns
- Route-level code splitting: `lazy(loader)` in AppRoutes.
- Feature-level lazy imports used in some heavy pages (e.g., orders list).
- Debounced search input in table screens.

### 9.2 Rules for New Performance-Sensitive Features
- For large tables:
  - debounce global search
  - memoize columns
  - paginate on client/server
- Avoid unnecessary local copies of large data arrays unless mutation is needed.
- Avoid adding broad `useEffect` with unstable dependencies.

### 9.3 Avoiding Re-render Pitfalls
- Keep callbacks stable where passed deep.
- Avoid recreating heavy objects in render when can be memoized.

---

## 10. Accessibility & UX Standards

### 10.1 Current Baseline
- Some components already include ARIA (`tabs-panel`, form controls).
- Table pagination includes `aria-label` in multiple tables.

### 10.2 Mandatory UX States
- Every data module must provide:
  - loading UI (skeleton/shimmer)
  - empty state (`No data available` pattern exists)
  - error state (alert/toast or inline)

### 10.3 Keyboard & Focus
- Ensure interactive elements are buttons/links, not click-only divs.
- Preserve focus styles and tab order.
- Use `aria-*` for icon-only controls.

---

## 11. Safe vs Dangerous Areas

### 11.1 High-Risk / Global Blast Radius Files
- Routing core:
  - `src/router/AppRoutes.jsx`
  - `src/router/RouteShells.jsx`
- Theme core:
  - `src/components/theme/index.jsx`
  - `src/@core/theme/**`
  - `src/app/globals.css`
- Layout core:
  - `src/@layouts/**`
  - `src/components/layout/**`
  - `src/@menu/**`
- Auth core:
  - `src/compat/next-auth/react.jsx`
  - `src/hocs/AuthGuard.jsx`
  - `src/services/auth/**`
- Data core:
  - `src/services/data/dataAccess.js`
  - `src/services/http/client.js`
  - `src/services/config/appConfig.js`

### 11.2 Safer Areas for Feature Iteration
- `src/views/apps/**` and `src/views/pages/**` (excluding shared extracted modules)
- `src/fake-db/**` data entries (if shape contracts preserved)

### 11.3 What Breaks if Modified Incorrectly
- Shell/routing changes can break auth and locale handling globally.
- Theme token changes can silently break contrast/readability across all pages.
- Data facade changes can break many page imports at once.

---

## 12. Common Mistakes Detected in Current Codebase

1. Mixed runtime semantics:
- Next-like server/action/api naming inside Vite runtime causes confusion.

2. Repeated duplicated code:
- `orders/details/*` has many near-identical modules (`myorders`, `feedback`, `shipments`, etc.).

3. Inline styles and hardcoded semantics:
- Multiple `style={{...}}` and color literals in orders modules.

4. Hardcoded strings not localized:
- Many user-facing labels/messages are still literal English strings in features.

5. Inconsistent code quality/style:
- Some files have commented legacy blocks, inconsistent formatting, and duplicated logic.

6. New code bypassing shared styling:
- Some components use custom ad-hoc spacing/colors instead of theme/table utilities.

---

## 13. Mandatory Checklist Before Merging Any New Feature

- [ ] Route uses locale-aware URLs via `getLocalizedUrl`.
- [ ] Feature works in `en`, `fr`, and `ar` (including RTL for `ar`).
- [ ] Dark and light mode render correctly.
- [ ] Skin mode (`default` and `bordered`) checked if applicable.
- [ ] No hardcoded semantic colors (`red`, `blue`, random hex) in feature UI states.
- [ ] No avoidable inline styles for spacing/layout.
- [ ] Existing shared components reused (table style, option menu, avatar, dialogs, toast).
- [ ] Loading, empty, and error states implemented.
- [ ] Mobile and tablet breakpoints verified.
- [ ] Horizontal overflow constrained to local containers.
- [ ] Forms use schema validation and show field errors.
- [ ] Accessibility: keyboard flow + aria labels for icon actions.
- [ ] API calls go through service layer/facade, not random direct fetches.
- [ ] Auth/permission requirements honored (protected vs guest routes).
- [ ] Route/menu/dictionary updates included where needed.
- [ ] Build and lint pass.

---

## 14. Final Development Rules (Golden Rules)

### MUST Follow
1. Build new pages under `src/app/**/page.jsx` + `src/views/**` pairing.
2. Use shared shell/layout/menu/theme infrastructure; do not bypass providers.
3. Keep all navigation locale-aware.
4. Use theme tokens and CSS vars for visuals.
5. Reuse table/form/dialog primitives before creating new ones.
6. Implement complete UX states (loading/empty/error).
7. Keep responsive behavior consistent with existing Grid + breakpoint approach.

### Strictly Prohibited
1. Hardcoding `/en/` routes in feature code.
2. Introducing raw semantic colors or one-off hardcoded spacing at scale.
3. Editing global core files without impact review and regression checks.
4. Duplicating large feature modules instead of extracting reusable blocks.
5. Creating API access patterns outside `services/*` without architectural approval.

### Project-Specific Best Practices
1. For any table-heavy page, start from an existing TanStack table implementation and `@core/styles/table.module.css`.
2. For auth-sensitive routes, validate behavior through `AuthGuard`/`GuestOnlyRoute` flows.
3. For menu changes, update both vertical and horizontal data maps and dictionary labels.
4. For backend migration readiness, prefer async-safe data getters and preserve mock fallback behavior until endpoint stability is confirmed.

---

## Appendix: Key Files to Read Before Major Changes
- `src/main.jsx`
- `src/App.jsx`
- `src/router/AppRoutes.jsx`
- `src/router/RouteShells.jsx`
- `src/components/Providers.jsx`
- `src/components/theme/index.jsx`
- `src/@core/contexts/settingsContext.jsx`
- `src/@core/theme/index.js`
- `src/services/data/dataAccess.js`
- `src/services/http/client.js`
- `src/services/auth/authService.js`
- `src/data/navigation/verticalMenuData.jsx`
- `src/utils/i18n.js`
