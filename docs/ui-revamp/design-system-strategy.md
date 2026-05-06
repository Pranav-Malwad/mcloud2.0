# Design System Strategy

## Purpose
Define a compact, enterprise-grade UI system that preserves existing brand colors, typography, workflows, and terminology.

## 1. Spacing System
- Base spacing token: 4px scale.
- Core spacing set: 4, 8, 12, 16, 20, 24, 32.
- Page section gap target: 16-24px.
- Card internal padding target: 12-16px (avoid large 24px+ padding unless justified).
- Table toolbar to table gap: 8-12px.

## 2. Grid/Layout Rules
- Desktop-first with 12-column grid.
- Prefer split regions (`8/4`, `9/3`, `7/5`) for list + context panels.
- Avoid full-width single-column stacks when workflows are data-heavy.
- Use consistent page shell order: breadcrumb/title, sticky action toolbar, optional summary row, primary content.

## 3. Card Patterns
- Use compact metric cards for top-level KPIs only.
- Standard card anatomy: header (title + optional action), compact content body, optional footer.
- Cards must be information-focused; avoid decorative filler and large empty areas.

## 4. Table Patterns
- Mandatory: sticky header, compact row height, hover state, selection column, inline row actions.
- Table toolbar standard: search (left), quick filters (center/left), bulk/export/view controls (right).
- Advanced filters should open as compact inline row or side drawer, not large stacked blocks.
- Default column visibility must prioritize operational fields and defer secondary fields.

## 5. Form Patterns
- Multi-column inputs by default on desktop (typically 2-column; 3-column for short fields).
- Group related fields into titled sections or accordions.
- Sticky action footer for Save/Cancel/Submit in long forms.
- Inline validation and helper text near fields.

## 6. Toolbar Patterns
- Sticky page toolbar under top navbar.
- Compact height with clear primary action hierarchy.
- Include search-first interactions for data modules.
- Bulk action state appears only when rows are selected.

## 7. Drawer/Modal Patterns
- Use side drawers for record details, quick edits, and secondary workflows.
- Reserve centered modals for confirmations and short single-purpose forms.
- Avoid full-page navigation for quick-read details whenever possible.

## 8. Typography Hierarchy
- Preserve existing font family.
- Define consistent hierarchy usage:
  - Page title
  - Section title
  - Card/table heading
  - Body/metadata text
- Avoid large heading jumps and overly verbose subtitle blocks.

## 9. Tab System
- Use horizontal tabs for same-level workflow segments.
- Support nested tabs only when secondary segmentation is required.
- Keep tab labels concise and consistently cased.
- Tab panels should use compact padding and maintain state without reset.

## 10. Responsive Behavior
- Desktop is primary target for operational density.
- Tablet fallback: collapse split panels to stacked sequence with sticky key actions retained.
- Mobile fallback: preserve functional completeness, but prioritize top actions and key fields first.

## 11. Sticky Behavior Standards
- Sticky global navbar (existing behavior retained).
- Sticky module toolbar and filters on data screens.
- Sticky table headers for scroll-heavy tables.
- Sticky form action footer in long-edit contexts.

## 12. Reusable Component Targets
- `PageShell`
- `PageToolbar`
- `FilterBar`
- `DataTableShell`
- `DetailDrawer`
- `FormSection`
- `TabsWorkspace`

These components should enforce compact spacing, visual consistency, and predictable behavior across modules.