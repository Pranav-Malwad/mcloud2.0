# MCloud React Developer Onboarding Guide

This guide is for new developers working on the React app in this repository.

## 1) Repository Layout

At `c:\Users\Pranav Malwad\Desktop\mcloud` you currently have two app roots:

- `react/` -> Active React + Vite app (this guide is for this folder)
- root-level `src/`, `next.config.mjs`, `.next/` -> Legacy/parallel Next.js setup artifacts

For day-to-day feature work, use the **`react/`** folder unless your task explicitly says otherwise.

## 2) React App High-Level Architecture

React app root: `react/`

- Entry point: `src/App.jsx`
- Routing: `src/router/AppRoutes.jsx`
- Route shells/layouts: `src/router/RouteShells.jsx`
- Global providers: `src/components/Providers.jsx`
- Views/screens: `src/views/**`
- Next-style route source pages (converted): `src/app/**/page.jsx`

### Runtime flow

1. `App.jsx` mounts `BrowserRouter` and `Providers`.
2. `AppRoutes.jsx` scans `src/app/**/page.jsx` using `import.meta.glob`.
3. File paths are converted into React Router paths (`[id] -> :id`, `[...x] -> *`).
4. Each route is wrapped in a shell:
   - Dashboard shell (private/authenticated)
   - Guest shell (login/register)
   - Blank shell (misc/auth pages)
   - Front-pages shell (marketing pages)

## 3) Folder-by-Folder Explanation

## `src/app/`

This is a **Next-like page structure kept as route source files**.

- `src/app/[lang]/.../page.jsx` -> Route-level page components
- `src/app/[lang]/layout.jsx` and grouped layouts -> layout wrappers from conversion
- `src/app/[lang]/[...not-found]/page.jsx` -> catch-all not found route page
- `src/app/globals.css` -> global CSS
- `src/app/api/**/route.js` -> API-style handlers used by app data features
- `src/app/server/actions.js` -> shared data access/action helpers

Use this when adding a new route-level page.

## `src/views/`

Feature UI implementation layer.

- `views/apps/**` -> business app screens (tasks, quotes, orders, accounts, contacts, etc.)
- `views/dashboards/**` -> dashboard widgets/pages
- `views/pages/**` -> generic pages (profile, account settings, misc, auth variants)
- `views/front-pages/**` -> landing/marketing/help-center pages

Pattern:
- `index.jsx` = page composition
- `*Table.jsx`, `*Card.jsx`, `*Drawer.jsx` = reusable screen parts

Use this for almost all UI and feature behavior changes.

## `src/router/`

- `AppRoutes.jsx` -> dynamic route generation and shell assignment
- `RouteShells.jsx` -> auth wrappers + layout shells + dictionary selection

If a path resolves wrongly, or a page gets wrong layout/auth behavior, start here.

## `src/components/`

Shared reusable components.

- `components/layout/**` -> topbar/sidebar/footer/search/user menu/logo
- `components/dialogs/**` -> modal dialogs
- `components/theme/**` -> app theme wrapper
- `components/Providers.jsx` -> app provider composition

Use this when multiple pages should share the same UI/control.

## `src/@layouts/`

Layout framework (vertical/horizontal/blank).

- `VerticalLayout.jsx`, `HorizontalLayout.jsx`, `BlankLayout.jsx`
- layout content/header/footer styled wrappers

Use when changing page chrome behavior (header, nav spacing, content container behavior).

## `src/@menu/`

Navigation engine.

- vertical menu components/hooks/contexts
- horizontal menu components/hooks/contexts
- menu styles + utility classes

Use when sidebar or menu expand/collapse behavior changes.

## `src/@core/`

Core framework primitives.

- `@core/theme/**` -> MUI theme config + overrides
- `@core/styles/**` -> cross-app styles (e.g. table module)
- `@core/contexts/settingsContext.jsx` -> layout/theme/user settings state
- `@core/hooks/**` -> reusable core hooks
- `@core/components/**` -> core-level shared controls (customizer, option menu, etc.)

Use for system-wide visual behavior and theme-level defaults.

## `src/redux-store/`

Redux Toolkit store.

- `index.js` -> store setup and slice registration
- `ReduxProvider.jsx` -> `<Provider store={store}>`
- `slices/` -> domain slices currently used:
  - `chat.js`
  - `calendar.js`
  - `kanban.js`
  - `email.js`

Important: many business pages currently rely on local state/fake-db APIs rather than Redux.
Use Redux only when state is truly cross-screen/global.

## `src/fake-db/`

Mock data providers grouped by domain.

- `fake-db/apps/*.js`
- `fake-db/pages/*.js`

Used by many API handlers and screens in this converted setup.
Good starting point for static/dev data changes.

## `src/prisma/`

Database schema and migrations.

- `schema.prisma`
- `migrations/**`
- `dev.db`

Use when moving a feature from mock/fake data to real persisted DB models.

## `src/contexts/`

App-level contexts, including auth wrapper context.

- e.g. `nextAuthProvider.jsx`

## `src/hocs/`

Route guards and higher-order wrappers.

- `AuthGuard.jsx` -> private route protection
- `GuestOnlyRoute.jsx` -> guest-only pages

## `src/configs/`

App constants and config files.

- i18n config
- theme config
- permissions config
- navigation config

## `src/data/`

Static content assets (e.g. dictionaries/translations/menu data).

## `src/libs/`

Library-level wrappers/styles integrations.

- React Toastify styling
- datepicker/fullcalendar style wrappers

## `src/compat/`

Compatibility shims for Next.js APIs in React runtime.

- `compat/next/navigation.jsx`
- `compat/next/link.jsx`
- `compat/next-auth/**`
- `compat/mui/AppRouterCacheProvider.jsx`

Use these to keep converted components working without full rewrites.

## `src/utils/`

General utilities used across the app.

## 4) UI, Data, Backend, and State: How They Connect

Typical feature data flow:

1. Page route file in `src/app/**/page.jsx` renders a view from `src/views/**`.
2. View loads data from:
   - fake-db helpers / server actions (`src/app/server/actions.js`), or
   - API handlers under `src/app/api/**/route.js`, or
   - Redux slice state (specific modules only).
3. Shared layout/theme/auth is provided by `Providers` + route shells.
4. UI components and tables are composed using MUI + shared core styles.

## 5) Where to Make Changes (Quick Decision Table)

- Add a new screen route: `src/app/[lang]/.../page.jsx` + `src/views/...`
- Fix sidebar/header/footer behavior: `src/components/layout/**`, `src/@layouts/**`, `src/@menu/**`
- Fix app-wide spacing/theme/colors: `src/@core/theme/**`, `src/app/globals.css`
- Update table defaults/styles globally: `src/@core/styles/table.module.css`
- Update mock/domain data quickly: `src/fake-db/**`
- Add/adjust global state domain: `src/redux-store/slices/**` + `src/redux-store/index.js`
- Update auth guard behavior: `src/hocs/**` and `src/router/RouteShells.jsx`
- Fix route generation/path mapping: `src/router/AppRoutes.jsx`

## 6) Scripts and Commands

Run from `react/`:

- Install: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint`

## 7) Conventions Used in This Codebase

- Route locale prefix is expected (`/en/...`) and default redirect goes to CRM dashboard.
- Path aliases are enabled (`@/`, `@core/`, `@layouts/`, `@menu/`, etc.).
- Many pages are table-heavy; horizontal scroll should stay inside local table wrappers (`overflow-x-auto`) and not leak to page-level scroll.
- Converted code still contains Next-like file/folder semantics in `src/app`; routing is handled by React Router at runtime.

## 8) Recommended First-Week Dev Workflow

1. Read `src/App.jsx`, `src/components/Providers.jsx`, `src/router/AppRoutes.jsx`, and `src/router/RouteShells.jsx`.
2. Pick one feature domain (for example: `views/apps/tasks`).
3. Trace its page route under `src/app/[lang]/(dashboard)/(private)/apps/.../page.jsx`.
4. Trace data source (`fake-db`, actions, API handler, or Redux slice).
5. Make change, then run `npm run build` before raising PR.

## 9) Common Pitfalls

- Editing only `views/` without checking shell/layout can hide route-level issues.
- Using `100vw` or overflow-unbounded wrappers can introduce global horizontal scroll.
- Assuming all domains are Redux-managed: most are local/fake-db driven currently.
- Forgetting locale-aware paths when linking (`/en/...`).

## 10) Suggested Documentation Follow-ups

You can extend this guide with:

- Per-domain ownership (who owns tasks/quotes/orders)
- API contract docs for each `src/app/api/**/route.js`
- Redux slice action/state diagrams
- Release checklist (build, smoke tests, responsive checks)
