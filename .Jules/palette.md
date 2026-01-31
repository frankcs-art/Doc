## 2025-05-14 - Ensuring ARIA Label Compliance (WCAG 2.5.3)
**Learning:** An `aria-label` completely overrides an element's visible text. To comply with WCAG 2.5.3 (Label in Name), the `aria-label`'s text must contain the visible text of the element to ensure a consistent experience for both visual and screen-reader users.
**Action:** When adding or updating `aria-label`, always ensure it includes the visible text of the component as a prefix or core part of the label.

## 2025-05-14 - Using CSS :empty for contenteditable Placeholders
**Learning:** The CSS `:empty` pseudo-selector is strict and will not match an element that contains any whitespace (including newlines or spaces) between its opening and closing tags. This is crucial for implementing placeholders in `contenteditable` elements.
**Action:** When using `:empty` for placeholders, ensure the HTML element is rendered completely empty (e.g., `<div></div>`) without any internal formatting or whitespace.
