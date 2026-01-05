# AGENT RULES

## AUTHORITY
All AI work in this repository must comply with the following documents. They are the source of truth and must be read before making changes:
- docs/design-constraints.md
- docs/tailwind-guidelines.md
- docs/shadcn-usage.md
- docs/component-usage.md

Design and structural decisions are frozen. Do not reinterpret, extend, or override the documents above.

## REQUIRED BEHAVIOR
- Follow the document-first, engineering-first UI philosophy.
- Preserve existing layout structure, hierarchy, and spacing.
- Use semantic HTML by default.
- Keep changes minimal, focused, and within the stated task scope.
- Use components only when explicitly permitted by docs/component-usage.md.

## FORBIDDEN ACTIONS
- Do not add or modify visual design beyond what the referenced documents allow.
- Do not introduce new layout patterns, sections, or interactions.
- Do not create components for presentation, layout grouping, typography, or spacing.
- Do not use Tailwind utilities, tokens, or scales outside docs/tailwind-guidelines.md.
- Do not add decorative elements, animations, gradients, shadows, or visual effects.

## ENFORCEMENT
If a requested change conflicts with the authority documents, the change must be refused or reduced to the closest compliant alternative.
