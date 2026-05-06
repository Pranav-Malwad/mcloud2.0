# Revamp Roadmap

## Objective
Deliver a phased, low-risk UI modernization that improves workflow speed, data visibility, and consistency without changing business logic.

## 1. Suggested Redesign Order
1. Shared foundations (page shell, toolbar, filter bar, table shell, drawer shell, tabs workspace)
2. High-impact list modules (Orders, Quotes, Accounts/Contacts, Leads)
3. High-traffic detail modules (Order detail variants, Quote detail, Lead detail)
4. Form-heavy modules (Ecommerce product/add-edit flows, settings screens)
5. Lower-frequency modules and remaining pages

## 2. Shared Reusable Components To Build First
- `PageShell`
- `PageToolbar`
- `FilterBar`
- `DataTableShell`
- `BulkActionBar`
- `DetailDrawer`
- `TabsWorkspace`
- `FormSection` with sticky action footer

These components are required to prevent one-off layout implementations.

## 3. Dependencies Between Modules
- List page revamps depend on shared table + toolbar + filter components.
- Detail page revamps depend on drawer/panel system and tab standards.
- Form page revamps depend on form-section and sticky action standards.
- Navigation clarity improvements depend on agreement about app grouping and menu taxonomy.

## 4. Migration Strategy
- Strangler pattern by module: migrate one module at a time using shared primitives.
- Keep route contracts and data contracts unchanged during UI migration.
- Replace per-page custom layout wrappers with standardized page shell incrementally.
- Validate module parity before moving to the next module.

## 5. Risk Areas
- Regression risk from modules with many columns and custom row renderers.
- Inconsistent behavior if old and new tab systems coexist too long.
- Performance impact from heavy composition and nested suspense wrappers.
- Edge-case breakage in detail routes if drawer-first behavior is introduced inconsistently.

## 6. UX Consistency Checkpoints
- Checkpoint A: shared spacing and sticky behavior applied consistently.
- Checkpoint B: table toolbars and filters match common interaction model.
- Checkpoint C: detail workflows prefer drawer/split context before full navigation.
- Checkpoint D: forms adhere to multi-column grouping + sticky action footer.
- Checkpoint E: visual hierarchy and density remain aligned across redesigned modules.

## 7. Definition of Done Per Module
- Follows page shell structure and component standards.
- Preserves existing business workflow and terminology.
- Improves scanability, reduces scrolling, and keeps key actions visible.
- Passes responsive checks (desktop primary, tablet acceptable).
- Documents any intentional exceptions.

## 8. Stop Rule
After Phase 1 documentation, pause implementation and wait for explicit page/module redesign instruction.