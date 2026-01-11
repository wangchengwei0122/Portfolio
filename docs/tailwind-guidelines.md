# TAILWIND GUIDELINES

**Personal Portfolio — Tailwind Usage Strategy (System + Expression)**

---

## PURPOSE

This document translates **docs/design-system.md**
into enforceable Tailwind usage rules.

Tailwind is used to:

- Enforce visual consistency
- Encode design decisions into utilities
- Enable expressive presentation without style drift

---

## VISUAL INTENSITY LEVELS

All Tailwind usage must respect the system's **three visual intensity levels**.

### Level 3 — Showcase Zones

Hero, Header, Contact

Highest visual freedom. Accent usage, motion, emphasis, and expressive layout are allowed when intentional.

### Level 2 — Feature Modules

Projects, Skills, Experience

Balanced expression. Cards, rounded corners, subtle surfaces, and accent grouping allowed.
Hero-level effects are forbidden.

### Level 1 — Content Zones

Dense text and supporting content

Strictly restrained. No decoration. Maximum readability.

---

## COLOR TOKENS

**Use semantic tokens only. No raw values.**

Allowed tokens:

- `bg-canvas`
- `bg-surface`
- `text-primary`
- `text-accent`
- `text-brand-primary`
- `text-brand-strong`
- `border-subtle`
- `border-brand-primary`
- `ring-brand-ring`

Rules:

- `bg-canvas`: root container and full-width sections only
- `bg-surface`: cards, grouped areas, expressive zones only
- Nested components should prefer transparent backgrounds
- Light/Dark themes adjust luminance only, not hue identity

`text-accent` usage:

- Allowed: interactive elements (links, buttons, nav active, CTAs)
- Allowed (Expressive Zones only): hero keywords, contact identifiers
- Forbidden: headings and body text in structured zones, decorative usage

Non-interactive text ALWAYS uses `text-primary`.

---

## TYPOGRAPHY SYSTEM

**Exactly five roles. No deviations.**

- Hero title: `text-5xl md:text-6xl font-semibold leading-tight`
- Section title: `text-2xl md:text-3xl font-semibold leading-snug`
- Navigation text: `text-base font-medium leading-normal`
- Body text: `text-base md:text-lg font-normal leading-relaxed`
- Meta text: `text-sm font-normal leading-relaxed`

Rules:

- Hierarchy via size and weight only
- No color-based hierarchy
- No intermediate sizes or alternate weights
- Identical scale across themes

---

## SPACING SCALE

**Only the following spacing steps are allowed:**

`0`, `2`, `4`, `6`, `8`, `12`, `16`, `20`, `24`, `32`

Usage:

- Internal spacing: `space-y-4`, `space-y-6`, `space-y-8`
- Section spacing: `space-y-16`, `space-y-20`, `space-y-24`

Consistent rhythm is mandatory.

---

## LAYOUT RULES

- Single-column layout
- Max content width: `max-w-4xl`
- Horizontal padding:
  - Mobile: `px-6`
  - Tablet: `md:px-8`
  - Desktop: `lg:px-12`
- Vertical padding per section: `py-16` or `py-20`
- No content touches viewport edges

---

## MOTION & TRANSITIONS

Motion is allowed **only when it adds clarity or impact**.

Allowed (Expressive Zones only):

- `transition-opacity`
- `transition-transform`
- `duration-300`, `duration-500`
- `ease-out`
- Entrance animations (opacity + translateY)
- Motion triggered once on first viewport entry

Allowed (Global):

- Hover and focus feedback on interactive elements

Forbidden:

- Infinite or looping animations
- Attention-grabbing motion in structured zones
- Motion used purely for decoration

---

## SHADOWS, BORDERS, AND FRAMING

- Shadows: allowed **sparingly** in expressive zones only
- Borders: allowed using `border-subtle` for grouping and clarity
- Heavy framing or skeuomorphic effects are forbidden

---

## BRAND EMPHASIS UTILITIES

**Use only in Expressive Zones.**

Allowed:

- `text-accent` for hero keywords and CTA labels
- `text-brand-primary` or `text-brand-strong` for brand accents on short phrases
- `border-brand-primary` for CTA framing
- `ring-brand-ring` and `ring-brand-ring/40` for controlled emphasis

Rules:

- No brand colors as background fills
- Emphasis is brief and scoped to key moments

---

## FORBIDDEN DECORATION UTILITIES

**Never use for visual flavor.**

- `bg-accent`, `bg-brand-*`, `text-gradient`
- `blur`, `backdrop-blur`, `mix-blend-*`
- `drop-shadow-*`, `shadow-[0_0_*]`

---

## ICONS & DECORATION

Icons are allowed ONLY when:

- They convey semantic meaning
- They improve scannability or comprehension

Decorative-only icons are not allowed.

---

## GUIDING PRINCIPLE

Tailwind utilities encode the design system.

If a utility breaks rhythm, hierarchy, or restraint,
it does not belong in this project.

Expression is encouraged —
chaos is not.

---
