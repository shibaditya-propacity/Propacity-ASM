// commitlint.config.js
//
// Enforces Conventional Commits format: https://www.conventionalcommits.org
//
// Valid commit format:
//   <type>(<scope>): <subject>
//
// Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
//
// Scope examples (module names):
//   feat(growth): add prospect stage pipeline chart
//   fix(auth): correct JWT expiry handling
//   ci: add preview deployment workflow
//
// See docs/ROOT_CLAUDE.md §7 — commits follow Conventional Commits.

/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ["@commitlint/config-conventional"],

  rules: {
    // ── Type rules ──────────────────────────────────────────────────────────
    // Restrict to the types used in this project. Add to this list deliberately.
    "type-enum": [
      2, // 2 = error (fail commit)
      "always",
      [
        "feat", // new feature for users
        "fix", // bug fix for users
        "docs", // documentation only
        "style", // formatting, whitespace — no logic change
        "refactor", // code change that neither fixes a bug nor adds a feature
        "perf", // performance improvement
        "test", // adding or correcting tests
        "build", // build system or external dependency changes
        "ci", // CI/CD configuration changes
        "chore", // maintenance — updating grunt tasks, no production code change
        "revert", // reverting a previous commit
      ],
    ],

    // Subject must not start with a capital letter: "fix: thing" not "fix: Thing"
    "subject-case": [2, "always", "lower-case"],

    // Subject must not end with a period
    "subject-full-stop": [2, "never", "."],

    // Subject must not be empty
    "subject-empty": [2, "never"],

    // Scope is optional but must be lowercase if provided
    "scope-case": [2, "always", "lower-case"],

    // Keep the header short for readable git log
    "header-max-length": [2, "always", 100],

    // Body lines can be longer (e.g., URL in a BREAKING CHANGE footer)
    "body-max-line-length": [2, "always", 150],
  },

  // Prompt config used by `commitlint --edit` interactive mode (optional)
  prompt: {
    settings: {},
    messages: {
      skip: "(press enter to skip)",
      max: "upper %d chars",
      min: "%d chars at least",
      emptyWarning: "can not be empty",
      upperLimitWarning: "over limit",
      lowerLimitWarning: "below limit",
    },
  },
};
