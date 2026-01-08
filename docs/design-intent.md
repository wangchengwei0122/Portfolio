# DESIGN INTENT

This document defines how decisions should be made
when translating constraints into real UI.

It exists to preserve system coherence
while allowing expressive, high‑quality presentation.

---

## PRIMARY GOAL

Create a portfolio that feels **designed**.

Not minimal by default.
Not expressive everywhere.
But deliberate, cohesive, and memorable.

The UI should communicate:
- Seniority
- Taste
- Engineering rigor
- Product intuition

---

## DECISION PRINCIPLES

When multiple valid implementations exist:

- Prefer the option that improves first impression
- Prefer reuse of existing visual patterns
- Prefer clarity over cleverness
- Prefer systems that scale visually, not just structurally

Consistency matters —
but emotional flatness is considered a failure.

---

## EXPRESSION VS CONSISTENCY

Consistency does NOT mean uniformity.

- Expressive zones are allowed to stand out
- Structured zones should feel predictable
- Visual emphasis must be intentional, not accidental

If everything looks the same, hierarchy has failed.

---

## HEADER INTENT

Purpose:
- Orientation
- Identity
- Subtle presence

Header SHOULD:
- Feel anchored and intentional
- Maintain presence during scroll
- Support navigation without disappearing visually

Header SHOULD NOT:
- Compete aggressively with hero content
- Feel invisible or purely mechanical

---

## HERO INTENT

Purpose:
- Establish identity
- Set tone
- Create the first emotional beat

Hero SHOULD:
- Feel visually intentional
- Use space, typography, and motion
- Immediately communicate who you are and what you do

Hero SHOULD NOT:
- Feel like a generic section
- Be constrained by document‑style rules

---

## SECTION INTENT

Purpose:
- Deliver information clearly

Sections SHOULD:
- Reuse a consistent layout pattern
- Prioritize readability
- Avoid unnecessary decoration

Sections SHOULD NOT:
- Compete visually with Hero or Contact
- Introduce new interaction models

---

## COMPONENT INTENT

Components are building blocks within a visual system.

Components MAY:
- Contain internal layout and presentation logic
- Use motion if consistent with expressive zones

Components MUST:
- Feel native to the system
- Avoid isolated styling hacks

---

## DECISION ESCALATION RULE

If a new decision is required:

- First, look for patterns in Hero or Header
- If unclear, choose the option that improves perceived quality
- Document the pattern for reuse

Improvisation is allowed.
Chaos is not.

---