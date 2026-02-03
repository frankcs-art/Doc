## 2025-05-14 - Delightful Contenteditable Placeholders
**Learning:** Using the `:empty::before` pseudo-element with `content: attr(data-placeholder)` and `pointer-events: none` provides a clean, CSS-only way to add placeholders to `contenteditable` elements without interfering with user interaction. Styling these elements as physical objects (like sticky notes) significantly improves their affordance.
**Action:** Use this pattern for future "visual editable" features to avoid boilerplate text and improve intuitive interactions.
