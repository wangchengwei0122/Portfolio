# DESIGN CONSTRAINTS
**Personal Portfolio — Dual Theme Support**

---

## THEME PHILOSOPHY

**Both light and dark themes are first-class citizens.**

Theme switching changes contrast relationships only. Structure, hierarchy, spacing, and tone remain identical. A user switching themes should notice only the shift in luminance—never a change in information density or visual weight.

---

## SHARED CONSTRAINTS
**These apply to BOTH themes. No exceptions.**

### Accent Color Strategy

**One accent color. Used sparingly.**

- **Where used:** Interactive elements (links, buttons), active navigation indicators, contact CTAs
- **Where NOT used:** Headings, body text, backgrounds, decorative elements, borders, or any non-interactive UI
- **Cross-theme behavior:** Same hue. Only lightness/saturation may adjust for legibility.

### Typography Hierarchy

**Four roles only:**

1. **Hero title** — Name/intro. Largest. Sets initial impression.
2. **Section title** — "About", "Experience", "Projects". Clear visual break.
3. **Body text** — All paragraph content. Optimized for reading.
4. **Meta text** — Dates, tech tags, labels. Smallest. Clearly subordinate.

**Constraints:**
- Hierarchy achieved through size and weight ONLY (no color differentiation)
- Line height optimized for readability over compactness
- No font sizes between these four roles
- Same font sizes across both themes

### Spacing & Layout Rhythm

**Section spacing:** Generous. Each section is a distinct chapter. Large vertical gaps prevent cognitive bleed.

**Content density:** Low-to-medium. White space (or dark space) conveys confidence.

**Rules:**
- Consistent vertical spacing within sections
- Section spacing significantly larger than internal content spacing
- No content touches viewport edges
- Identical spacing values in both themes

### Prohibited Elements

**The UI must explicitly avoid:**
- Decorative flourishes (icons, illustrations, graphics)
- Animations or transitions (except subtle hover states on interactive elements)
- Gradients or drop shadows
- Playful or casual visual language
- Theme-specific layout changes

---

## LIGHT THEME CONSTRAINTS

**Primary context:** Recruiter scanning, bright environments, professional review

**Color relationships:**
- Background: Off-white (not pure white). Reduces eye strain.
- Text: Near-black (not pure black). Softens contrast.
- Contrast ratio: Sufficient for accessibility, never harsh.

**Tone:** Clean, airy, professional. Optimized for quick scanning and legibility in daylight conditions.

---

## DARK THEME CONSTRAINTS

**Primary context:** Focused reading, extended sessions, engineering tool environments

**Color relationships:**
- Background: Near-black (not pure black). Prevents OLED burn-in and reduces harshness.
- Text: Off-white (not pure white). Maintains comfortable contrast.
- Contrast ratio: Controlled. Never harsh or jarring.

**Tone:** Focused, calm, technical. Optimized for sustained reading without eye fatigue.

---

## OVERALL TONE
**Both themes should feel:**
- Spacious
- Confident
- Readable
- Minimal
- Professional

---

## GUIDING PRINCIPLE

**This portfolio is a document, not an experience.**

Content is the design. Every UI decision should fade into the background. Theme selection is a user preference for reading comfort, not a brand statement. The work must speak equally loud in both modes.