# Layout Architecture

## 1. Global Navigation Structure
- Keep current left vertical navigation model but rationalize grouping to reduce cognitive load.
- Separate operational app modules from examples/docs destinations in clear sections.
- Preserve existing routes and terminology while improving visual grouping and scanability.

## 2. Workspace Layout System
- Standard workspace shell for private app pages:
  1. Context strip (breadcrumb/title)
  2. Sticky toolbar (primary action, search, quick filters)
  3. Optional summary metrics row
  4. Primary data/content area
  5. Context drawer/panel for details
- This shell should be reusable across Orders, Quotes, Accounts, Contacts, Leads, and Ecommerce modules.

## 3. Tab Architecture
- Primary tabs: top-level entity workflow states (example: Orders states).
- Secondary tabs: detail sub-domains (example: shipment, accounting, notes).
- Maintain in-memory tab context to avoid workflow resets.
- Standardize tab label format and panel spacing.

## 4. Split-Panel Strategies
- List-detail modules should use split mode on desktop:
  - Left: table/list region
  - Right: contextual details/actions (panel or drawer)
- Adjustable emphasis presets:
  - `8/4` for balanced details
  - `9/3` for data-dominant tables
- Use full-page detail route only when workflow complexity requires deep editing.

## 5. Detail-View Strategies
- Default detail interaction: side drawer over list context.
- Progressive disclosure inside detail view:
  - Summary header
  - Key attributes
  - Secondary tabs/accordions
- Avoid forcing full navigation for read-only or quick-update actions.

## 6. Dashboard Structures
- Dashboard pages should use compact metric row + actionable data widgets.
- Prefer mixed-density blocks (short KPI strip + dense operational table) over large decorative cards.
- Keep important actions visible without deep scrolling.

## 7. Content Density Rules
- Prioritize visible data over visual whitespace.
- Reduce unnecessary vertical stacking by using tabs, accordions, and side panels.
- Enforce compact control sizing and consistent section rhythm.
- All modules should target fast scanability for repetitive high-volume workflows.

## 8. Layout Governance Rules
- Preserve existing brand colors and typography.
- No major workflow rewrites without explicit module instruction.
- Every page redesign must conform to shared shell and component standards.
- Unrelated pages are out of scope unless explicitly requested.