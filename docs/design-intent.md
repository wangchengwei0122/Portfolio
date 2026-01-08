# DESIGN INTENT

This document defines decision preferences to ensure long-term system consistency.

It does not describe visual style.
It does not introduce new rules.
It exists solely to prevent divergence when multiple valid implementations are possible.

---

## Primary Goal

Ensure that all UI components and sections appear to belong to a single, closed system.

No component, section, or interaction should appear as a special case.

Consistency is always more important than expressiveness.

---

## Global Decision Principles

When multiple compliant implementations are possible:

- Prefer the option that reuses existing patterns
- Prefer the option that introduces the fewest new decisions
- Prefer the option that would not require explanation to another engineer
- Prefer predictability over novelty

Do not optimize for visual interest.
Do not optimize for uniqueness.
Do not optimize for personality.

---

## Structural Intent

The UI is treated as a structured document.

- Layout establishes meaning
- Spacing establishes hierarchy
- Order establishes emphasis

No other visual mechanism should be used to communicate structure.

---

## Header Decision Intent

Purpose:
Provide persistent structural navigation.

Decision constraints:
- Header must not introduce visual hierarchy beyond its position
- Header must not compete with page content
- Header must behave consistently across all scroll states

If a change makes the header feel noticeable,
the change is likely incorrect.

---

## Hero Decision Intent

Purpose:
Provide initial context only.

Decision constraints:
- Hero must not rely on visual emphasis to convey importance
- Hero must not introduce a new layout model
- Hero must not require unique styling rules

If the hero cannot be described using existing layout and typography rules,
the structure is incorrect.

---

## Section Decision Intent

Purpose:
Group content predictably.

Decision constraints:
- Sections must follow the same structural pattern
- Sections must not introduce visual framing or decoration
- Sections must be distinguishable only through spacing and order

If a section appears visually distinct without reading its content,
the implementation is likely incorrect.

---

## Component Decision Intent

All components are treated as instances of a single system.

Decision constraints:
- No component may introduce a new visual language
- No component may require custom styling to appear correct
- No component may exist outside established layout patterns

If a component feels incomplete without additional styling,
it should be restructured, not styled.

---

## Decision Stop Rule (Critical)

If an implementation requires a new visual, layout, or interaction decision
that is not explicitly covered by existing documents:

Stop.

Request clarification instead of improvising.