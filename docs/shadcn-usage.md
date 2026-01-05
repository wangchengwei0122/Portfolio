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