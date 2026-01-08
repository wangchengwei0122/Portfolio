# TAILWIND GUIDELINES
**Personal Portfolio — Tailwind Usage Strategy (Strict)**

---

## PURPOSE
This document translates `docs/design-constraints.md` into enforceable Tailwind usage rules.
All components must comply. No exceptions.

---

## COLOR TOKENS
**Use semantic tokens only. No arbitrary values.**

- Allowed tokens: `bg-canvas`, `text-primary`, `text-accent`
- `bg-canvas` is only allowed on the root page container or full-width section wrappers.
-  Nested components must remain transparent.
- Light theme:
  - `bg-canvas`: off-white
  - `text-primary`: near-black
  - `text-accent`: single accent hue, adjusted for light theme legibility
- Dark theme:
  - `bg-canvas`: near-black
  - `text-primary`: off-white
  - `text-accent`: same hue as light theme, adjusted for dark theme legibility
- `text-accent` usage:
  - Allowed: interactive elements only (links, buttons, nav active, CTAs)
  - Forbidden: headings, body text, meta text, backgrounds, borders, decorative elements
- Non-interactive text always uses `text-primary` regardless of hierarchy

---

## TYPOGRAPHY MAPPING
**Exactly five roles. No other sizes or weights.**

- Hero title: `text-5xl` `md:text-6xl` `font-semibold` `leading-tight`
- Section title: `text-2xl` `md:text-3xl` `font-semibold` `leading-snug`
- Navigation text: `text-base` `font-medium` `leading-normal`
- Body text: `text-base` `md:text-lg` `font-normal` `leading-relaxed`
- Meta text: `text-sm` `font-normal` `leading-relaxed`

Rules:
- Hierarchy by size and weight only (no color differentiation)
- No intermediate sizes or alternate weights
- Same sizes across both themes
- Navigation text remains constant across breakpoints for consistent muscle memory

---

## SPACING SCALE
**Only the following steps are allowed:**

`0`, `2`, `4`, `6`, `8`, `12`, `16`, `20`, `24`, `32`

Usage rules:
- Internal spacing within sections: `space-y-4`, `space-y-6`, or `space-y-8`
- Section-to-section spacing: `space-y-16`, `space-y-20`, or `space-y-24`
- No arbitrary spacing values

---

## LAYOUT RULES
**Single-column document layout, consistent rhythm.**

- Max content width: `max-w-4xl` only
- Horizontal padding:
  - Mobile: `px-6`
  - Tablet: `md:px-8`
  - Desktop: `lg:px-12`
- Vertical rhythm per section: `py-16` or `py-20`
- No element may touch viewport edges
- Section spacing must be significantly larger than internal spacing

---

## PROHIBITIONS (TAILWIND LEVEL)
**Do not use Tailwind utilities that violate the design constraints.**

- No gradients (`bg-gradient-*`)
- No shadows (`shadow-*`)
- No animations or transitions except subtle hover states on interactive elements
- Hover states may only adjust text color or underline.
- No movement, scaling, or background changes on hover.
- No decorative elements or icons used purely for styling

