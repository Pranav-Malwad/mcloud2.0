# Enterprise Component Patterns

This file defines reusable UI/UX component standards for the application redesign.

All redesigned pages must follow these patterns.

---

# 1. PAGE STRUCTURE

Preferred page structure:

- Sticky top toolbar
- Filters/search section
- Summary cards (if needed)
- Main content area
- Side detail panel/drawer
- Tabbed content sections

Avoid long vertical layouts.

---

# 2. TOOLBAR PATTERN

Toolbars should contain:

- Primary actions
- Search
- Filters
- Bulk actions
- View toggles

Toolbar behavior:

- Sticky on scroll
- Compact height
- Clear action hierarchy

Avoid oversized toolbar spacing.

---

# 3. TABLE PATTERNS

Tables should prioritize dense readability.

Requirements:

- Sticky headers
- Compact rows
- Row hover states
- Expandable rows
- Inline row actions
- Bulk selection support
- Better spacing alignment
- Search/filter integration

Prefer side drawers for details instead of separate pages.

---

# 4. DRAWER PATTERNS

Use drawers for:

- Quick detail viewing
- Editing
- Secondary workflows
- Context panels

Drawer rules:

- Avoid full-page navigation
- Preserve user context
- Support fast workflow execution

---

# 5. TAB PATTERNS

Use tabs to reduce vertical stacking.

Prefer:

- Horizontal tabs
- Nested tabs when required
- Left-side tabs for complex workflows

Tabs should:

- Preserve context
- Avoid unnecessary reloads
- Keep important information visible

---

# 6. CARD PATTERNS

Cards should be:

- Compact
- Information-focused
- Clearly grouped
- Minimally padded

Use cards for:

- Metrics
- Summary data
- Context grouping
- Dashboard sections

Avoid oversized cards with excessive empty space.

---

# 7. FORM PATTERNS

Forms should use:

- Multi-column layouts
- Logical grouping
- Accordion sections
- Sticky action footer
- Inline validation

Avoid:

- Long stacked forms
- Excessive spacing
- Single-column layouts unless necessary

---

# 8. FILTER PATTERNS

Filters should be:

- Easy to scan
- Compact
- Sticky when needed
- Positioned near tables/content

Prefer:

- Inline filters
- Quick filters
- Search-first interactions

---

# 9. MODAL PATTERNS

Use modals only for:

- Confirmation
- Lightweight workflows
- Short forms

Avoid large complex workflows inside centered modals.

Prefer drawers for larger workflows.

---

# 10. DETAIL VIEW PATTERNS

Prefer:

- Split layouts
- Side panels
- Expandable sections
- Context tabs

Avoid redirecting users to separate pages unnecessarily.

---

# 11. SPACING RULES

Spacing should feel:

- Compact
- Consistent
- Professional

Avoid:

- Oversized paddings
- Large empty margins
- Excessive whitespace

Prioritize information density with readability.

---

# 12. INTERACTION RULES

Interactions should feel:

- Fast
- Predictable
- Smooth
- Lightweight

Use subtle transitions only where helpful.

Avoid excessive animation.

---

# 13. VISUAL STYLE RULES

Use:

- Soft borders
- Subtle shadows
- Clean separators
- Clear typography hierarchy

Avoid:

- Heavy gradients
- Decorative elements
- Excessive icon usage
- Visual clutter

---

# 14. ENTERPRISE UX STANDARD

Every redesigned screen should optimize:

- Workflow efficiency
- Information visibility
- Reduced clicks
- Reduced scrolling
- Faster actions
- Better scanability

The application should feel operationally efficient for daily heavy usage.