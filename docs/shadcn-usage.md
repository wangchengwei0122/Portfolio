# shadcn/ui Usage Rules

This project uses **shadcn/ui** as a:

- Accessibility foundation
- Interaction primitive layer
- Composable UI building block source

It is **not** treated as a ready-made design system.

All visual expression belongs to this project.

---

## Alignment with Design System

shadcn/ui usage must comply with:

- docs/design-system.md
- docs/tailwind-guidelines.md
- docs/component-usage.md

When conflicts arise, **docs/design-system.md takes priority**.

---

## Visual Intensity Levels (Component Responsibility)

Components must respect the system's **visual intensity levels**.

### Level 3 — Showcase Zones

Applies to:

- Header
- Hero
- Contact

In Level 3 zones, components MAY:

- Define layout and visual structure
- Own presentation and emphasis
- Include motion, layered surfaces, and hierarchy
- Act as visual anchors for the page

These zones are expected to feel **designed and memorable**.

### Level 2 — Feature Modules

Applies to:

- Projects
- Skills
- Experience
- Other card-based feature sections

In Level 2 zones, components SHOULD:

- Be reusable and predictable
- Use restrained but intentional visual styling
- Support cards, grouping, and emphasis
- Avoid hero-level effects

### Level 1 — Content Zones

Applies to:

- Long descriptions
- Lists
- Supporting text
- Dense informational content

In Level 1 zones, components MUST:

- Prioritize readability
- Avoid visual expression
- Remain monochrome-first

---

## Allowed Usage (Global)

shadcn/ui components MAY be used for:

- Buttons
- Form inputs
- Navigation primitives
- Dialog / Modal
- Dropdown / Popover
- Menu / Navigation Menu
- Sheet (when structurally justified)

---

## Forbidden Usage (Global)

Do NOT use shadcn/ui components when they:

- Dictate final visual style
- Introduce design tokens not defined by the project
- Apply heavy decoration without context
- Compete with core content

Avoid default visual presets.

Composition is preferred over appearance.

---

## Styling Rules

- Default shadcn color tokens (`muted`, `secondary`, etc.) must NOT be used
- Only project semantic tokens are allowed:
  - bg-canvas
  - bg-surface
  - text-primary
  - text-accent
  - border-subtle

- Border radius must be deliberate and consistent
- Shadows may be used **sparingly** in expressive zones only
- Motion and transitions must respect system rhythm

---

## Modification Policy

shadcn/ui components MAY be modified to:

- Remove default styling
- Adjust spacing and layout
- Integrate with project tokens
- Support motion or composition

Do NOT:

- Create multiple visual variants
- Fork shadcn components unnecessarily
- Introduce style divergence

---

## Navigation Guidance

Navigation components are allowed and encouraged
when they improve orientation and usability.

Header navigation SHOULD:

- Feel stable and anchored
- Support active state indication
- Maintain subtle visual presence during scroll

Navigation must guide, not dominate.

---

## Guiding Principle

shadcn/ui provides **capability**.

This project provides **taste**.

If a component improves clarity, usability, or perceived quality,
it is allowed — provided it aligns with the system.
