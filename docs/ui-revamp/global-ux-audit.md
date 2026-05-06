# Global UX Audit

## Scope
This audit is based on current shared layout and representative modules across `orders`, `quotes`, `users`, `ecommerce`, and global navigation.

## Existing UX Issues

### 1. Layout Inconsistencies
- Pages mix multiple composition styles (plain `Grid`, card stacks, tabs-first pages) without a common workspace shell.
- Shared components like [tabs-panel](/C:/Users/Pranav%20Malwad/Desktop/mcloud2/react/src/components/tabs-panel/index.jsx) enforce fixed paddings/margins (`my-8`, `Box p:3`) that vary from page-level spacing.
- Header/content rhythm is inconsistent because each page manually adds breadcrumb, counters, and data blocks in different order.

### 2. Workflow Inefficiencies
- Many data screens require context switches to detail routes instead of using side drawers for quick review/edit.
- Bulk actions are weakly surfaced: row selection exists in tables, but action bars are not sticky and don’t persist clearly with selection state.
- Advanced filters are often hidden behind toggles and inserted as additional stacked blocks, increasing interaction cost.

### 3. Space Utilization Problems
- High `Grid` spacing (`spacing={6}`) plus nested cards causes excess vertical whitespace on operational pages.
- Metrics cards are reused, but copy and trend semantics are generic/hardcoded, reducing informational value density.
- Repeated shimmer/fallback wrappers create tall skeleton placeholders that delay perceived access to actionable controls.

### 4. Scrolling Problems
- Data-heavy tables can become very wide and tall, but sticky table headers are not consistently implemented across modules.
- Detail pages stack many cards and tabs in long vertical flow; key actions and status context can scroll out of view.
- Search/filter controls are often above table content but not sticky, forcing repeated scroll jumps.

### 5. Data Visibility Issues
- Some tables expose too many columns at once without a clear default visibility strategy, reducing scanability.
- Column hierarchy is not consistently prioritized for operational tasks (primary identifiers, status, next action).
- Split-view patterns are underused; users often lose list context while opening full detail screens.

### 6. Navigation Issues
- Navigation tree is broad and deep ([verticalMenuData](/C:/Users/Pranav%20Malwad/Desktop/mcloud2/react/src/data/navigation/verticalMenuData.jsx)), which increases cognitive load.
- Different domains (apps/pages/examples/docs) are interleaved in one menu model, mixing operational and reference destinations.
- Detail routes are route-driven by default even when quick contextual drill-down would be faster in-panel.

### 7. Component-Level Inconsistencies
- Table toolbars vary per module (search, export, filter toggles, button placements).
- Tabs behavior is not standardized (label casing, spacing, panel padding, content framing).
- Form sections use different grouping patterns; some are compact multi-column while others become long card stacks.

## Evidence (Representative Files)
- [Layout wrapper](/C:/Users/Pranav%20Malwad/Desktop/mcloud2/react/src/@layouts/VerticalLayout.jsx)
- [Vertical navigation](/C:/Users/Pranav%20Malwad/Desktop/mcloud2/react/src/components/layout/vertical/Navigation.jsx)
- [Tabs primitive](/C:/Users/Pranav%20Malwad/Desktop/mcloud2/react/src/components/tabs-panel/index.jsx)
- [Shared table styles](/C:/Users/Pranav%20Malwad/Desktop/mcloud2/react/src/@core/styles/table.module.css)
- [Orders list shell](/C:/Users/Pranav%20Malwad/Desktop/mcloud2/react/src/views/apps/orders/list/index.jsx)
- [Orders table](/C:/Users/Pranav%20Malwad/Desktop/mcloud2/react/src/views/apps/orders/list/OrderListTable.jsx)
- [Orders detail shell](/C:/Users/Pranav%20Malwad/Desktop/mcloud2/react/src/views/apps/orders/details/index.jsx)
- [Quotes list shell](/C:/Users/Pranav%20Malwad/Desktop/mcloud2/react/src/views/apps/quotes/list/index.jsx)

## Priority UX Gaps To Address In Revamp
1. Lack of a standard enterprise page shell with sticky toolbar + filter row + main data region.
2. Over-reliance on stacked vertical content versus tabbed/split/drawer workflows.
3. Inconsistent component behavior for tables, tabs, cards, and action bars.
4. Navigation depth and route-heavy detail flow that slows repetitive operations.
5. Missing explicit density standards for spacing, table rows, and form grouping.