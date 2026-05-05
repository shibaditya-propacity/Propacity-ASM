/**
 * test-setup.ts
 *
 * Loaded by Vitest before every test file (configured via vite.config.ts setupFiles).
 * Extends Vitest's expect() with DOM-specific matchers from @testing-library/jest-dom:
 *
 *   toBeInTheDocument()    — element exists in the DOM
 *   toBeVisible()          — element is visible (not hidden, display:none, etc.)
 *   toHaveTextContent()    — element's text matches
 *   toHaveValue()          — form element has a specific value
 *   toBeDisabled()         — form element is disabled
 *   toHaveClass()          — element has a CSS class
 *   ... and more
 *
 * See: https://github.com/testing-library/jest-dom#custom-matchers
 */
import "@testing-library/jest-dom/vitest";
