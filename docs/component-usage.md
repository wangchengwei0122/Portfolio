# Component Usage Rules

This project prioritizes semantic HTML and document-style layout.

Default rule:
- Do NOT create or use components unless explicitly justified.

---

## Do NOT Use Components For

- Pure content presentation
- Layout grouping
- Visual styling
- Typography abstraction
- Spacing abstraction

Examples:
- Hero content
- Section titles
- Experience / Project lists
- Text blocks

Use semantic HTML instead.

---

## Allowed Component Usage

Components may be used ONLY when they provide:
- Interaction behavior
- State management
- Accessibility complexity

Examples:
- Button
- Dialog / Modal
- Dropdown / Popover
- Form inputs

shadcn/ui may be used ONLY in these cases.

---

## Layout Components (Exception)

Minimal layout components (e.g. SectionWrapper) are allowed ONLY if:
- The same structure is repeated at least 3 times
- The component does NOT introduce visual styling
- The component preserves semantic HTML

---

## Guiding Principle

If a UI element can be expressed clearly with semantic HTML,
it MUST NOT be turned into a component.