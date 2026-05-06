# High Density Enterprise Layout Rules

The application is used by operational power users.

The highest priority is:

- Maximum information visibility
- Reduced scrolling
- Faster workflows
- Higher operational density

This is NOT a marketing website.

This is NOT a portfolio UI.

This is NOT a dribbble-style design.

The UI must behave like a professional operational workspace.

---

# CRITICAL LAYOUT RULES

## 1. Eliminate Vertical Stacking

Avoid stacking sections vertically.

NEVER create pages where users must scroll through cards one after another.

Instead prefer:

- Split layouts
- Multi-column sections
- Resizable panels
- Horizontal grouping
- Nested tabs
- Inline expansion
- Side drawers

Bad:

KPI Cards
↓
Form
↓
Table
↓
Related Data

Good:

Left summary panel + right workspace panel

OR

Top compact toolbar + tabbed data workspace

OR

Resizable split panels

---

# 2. Prefer Workspace Layouts

Every screen should feel like a workspace.

The viewport should be utilized efficiently.

Use:

- Full-width layouts
- Split panes
- Sticky toolbars
- Dense tables
- Docked side panels

Avoid centered narrow content containers.

---

# 3. Compact Height Rules

Reduce unnecessary height everywhere.

Requirements:

- Compact cards
- Compact table rows
- Compact form fields
- Compact headers
- Compact tab bars

Avoid:

- Large card padding
- Large empty margins
- Oversized section spacing
- Tall KPI cards

---

# 4. Keep Primary Data Above Fold

Important information must appear without scrolling.

The first viewport should contain:

- Important actions
- Filters
- Key metrics
- Primary tables/workflows

Avoid placing large decorative sections before operational content.

---

# 5. Tables Should Dominate Workspace

For CRM-style systems:

Tables/grids are primary operational surfaces.

Prioritize table visibility over decorative cards.

Tables should occupy most of the viewport.

Use:

- Sticky headers
- Sticky filters
- Inline editing
- Expandable rows
- Side detail drawers

Avoid separate detail pages when possible.

---

# 6. Replace Detail Pages With Side Panels

Avoid large dedicated detail pages.

Prefer:

- Slide-over drawers
- Docked detail panels
- Split-screen detail views

Example:

Accounts Table | Account Details Panel

instead of:

Accounts List -> Open New Full Page

---

# 7. Multi-Column Forms Mandatory

Forms must NEVER become long vertical documents.

Prefer:

- 2-column layouts
- 3-column layouts on wide screens
- Accordion groups
- Section tabs

The entire form should ideally fit inside one viewport.

---

# 8. KPI Sections Must Stay Compact

KPI cards should consume minimal vertical space.

Use:

- Small horizontal stat cards
- Inline metrics
- Compact summaries

Avoid giant dashboard tiles.

---

# 9. Related Data Should Use Tabs

Do not vertically stack:

- Quotes
- Contacts
- Orders
- Activities
- Notes

Use tabs instead.

Example:

[ Quotes | Contacts | Orders | Activities ]

inside same workspace panel.

---

# 10. Reduce Page Chrome

Reduce wasted space from:

- Oversized breadcrumbs
- Huge headers
- Large page titles
- Excessive top margins

Operational content should start quickly.

---

# 11. Prioritize Dense Enterprise UX

The UI should feel closer to:

- Jira
- Linear
- Datadog
- Salesforce console
- HubSpot workspace
- Trading dashboards

NOT:

- portfolio websites
- dribbble dashboards
- marketing landing pages

---

# 12. Every Redesign Must Answer

Before finalizing any redesign ask:

- Did scrolling reduce?
- Is more information visible immediately?
- Did workflow speed improve?
- Is whitespace justified?
- Can users perform actions faster?
- Is the layout operationally efficient?

If not:
redesign again.