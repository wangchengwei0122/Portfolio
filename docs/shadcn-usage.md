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
- docs/design-constraints.md
- docs/design-intent.md
- docs/tailwind-guidelines.md
- docs/component-usage.md

When conflicts arise,
**design-intent takes priority**.

---

## Expressive Zone Exception (Critical)

In the following sections:

- Header
- Hero
- Contact

shadcn/ui components MAY:
- Be used for layout and presentation
- Be visually customized
- Participate in motion and transitions
- Be composed into higher-level components

Expressive zones are allowed to feel crafted and intentional.

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