Context:
This is a Next.js 16 App Router personal portfolio project.
Design decisions are already frozen.

Follow these documents strictly:
@file docs/design-constraints.md
@file docs/tailwind-guidelines.md

Task:
Implement ONLY the skeleton-level layout and structure styles.

Scope:
1. app/layout.tsx
2. components/layout/Header.tsx
3. components/sections/Hero.tsx

What to do:

1. layout.tsx
- Apply global canvas styles only:
  - bg-canvas
  - text-primary
  - antialiased
- Do NOT add visual styling
- Keep structure minimal and semantic

2. Header.tsx
- Implement header as a structural navigation bar
- Horizontal layout only
- Minimal spacing
- Active / hover state may exist but must be subtle
- No visual decoration
- Header must not dominate the page

3. Hero.tsx
- Hero section must occupy approximately one viewport height
- Use min-height (not fixed height)
- Hero content should be minimal:
  - One h1 (name / title placeholder)
  - One paragraph (short intro placeholder)
- No images, no icons, no complex layout
- Focus on vertical rhythm and reading flow

Strict rules:
- Do NOT design final visuals
- Do NOT add animations, shadows, gradients, or decorative elements
- Do NOT introduce new Tailwind utilities outside the guidelines
- Do NOT implement other sections (Skills, Projects, etc.)
- Do NOT change content wording beyond placeholders

Output:
- Updated layout.tsx
- Updated Header.tsx
- New or updated Hero.tsx
# shadcn/ui Usage Constraints

This project uses shadcn/ui as a low-level accessibility and interaction primitive source,
NOT as a design system or visual component library.

All usage must comply with:
- docs/design-constraints.md
- docs/tailwind-guidelines.md
- docs/component-usage.md

Design and structural decisions are frozen.

---

## Allowed Usage

shadcn/ui components may be used ONLY for elements that require:
- Interaction behavior
- State management
- Accessibility handling (keyboard, focus, ARIA)

Examples:
- Button
- Basic form inputs (input, textarea)
- Dialog / Modal (structure only)
- Dropdown / Popover (structure only)

---

## Forbidden Usage

Do NOT use shadcn/ui components for:
- Layout or page structure
- Visual grouping or decoration
- Section containers
- Hero or content presentation
- Typography decisions

Explicitly forbidden components include (non-exhaustive):
- Card
- Tabs
- Accordion
- Sheet
- Navigation menu
- Typography helpers

---

## Styling Rules

- All default shadcn color tokens (muted, secondary, destructive, etc.) are forbidden.
- Only project semantic tokens may be used:
  - bg-canvas
  - text-primary
  - text-accent

- Border radius must be minimal and consistent.
- Shadows are not allowed.
- Hover and focus states must be subtle and non-animated.

---

## Modification Policy

- shadcn/ui components may be modified to REMOVE visual styling.
- Do NOT extend shadcn components with new visual variants.
- Prefer deletion of styles over addition.

---

## Guiding Principle

shadcn/ui exists to solve interaction and accessibility problems.
All visual design decisions belong exclusively to this project.