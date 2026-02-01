## 2025-05-14 - Contenteditable Placeholder Pattern
**Learning:** Implementing a placeholder for `contenteditable` elements using the `:empty::before` CSS pseudo-element is a lightweight, JS-free way to improve UX. Key considerations are: 1) The element must be completely empty (no whitespace) for `:empty` to match. 2) `pointer-events: none` should be used on the pseudo-element to ensure it doesn't interfere with focus/click events.
**Action:** Use this pattern whenever a `contenteditable` area is provided to give users clear guidance without forcing them to manually clear initial text.
