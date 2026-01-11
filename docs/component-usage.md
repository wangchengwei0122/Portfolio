# Component Usage Rules

This project is a **presentation-first personal portfolio**.

Components are not just technical abstractions —
they are **visual and structural building blocks** of a coherent system.

The goal is:

- Strong first impression
- Visual consistency
- Long-term scalability without fragmentation

---

## Component Philosophy

Components exist to:

- Encode repeated visual patterns
- Preserve layout rhythm
- Enforce consistency across sections
- Reduce design drift as the site grows

Avoiding components is **not** a virtue in a presentation-driven system.

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

---

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

---

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

## When to Create a Component

Create a component when **any** of the following is true:

- A visual pattern appears more than once
- A section has internal structure (title + body + metadata)
- Layout rhythm must remain consistent
- The element represents a conceptual unit (Section, Item, Card, Row)

Examples:

- Section
- SectionHeader
- ExperienceItem
- ProjectCard
- SkillGroup
- ContactBlock

---

## When NOT to Create a Component

Avoid creating a component ONLY when:

- The content is truly one-off
- The structure is trivial and unlikely to repeat
- Abstraction would reduce clarity

Avoiding components by default is **not encouraged**.

---

## Layout Components

Layout components are **explicitly allowed**.

They MAY:

- Control spacing and width
- Apply consistent section rhythm
- Encapsulate semantic structure
- Define visual grouping

They MUST:

- Preserve semantic HTML
- Avoid hidden side effects
- Feel native to the system

Examples:

- Section
- Container
- Stack
- Cluster

---

## Visual Responsibility

Components are allowed to own **visual decisions**.

This includes:

- Spacing
- Alignment
- Visual grouping
- Internal layout rules

Global tokens still apply,
but components may express them.

---

## Guiding Principle

If an element is part of the visual system,
it deserves a component.

Manual duplication is more harmful than abstraction
in a presentation-focused portfolio.
