# Claude Code instructions for asm-backend

This codebase is governed by **two authoritative documents**:

1. `docs/BACKEND_GUIDELINES.md` — read this in full before writing any code.
2. The module-specific `README.md` in the folder you are working in.

Before generating code:

- Identify the module folder you are working in.
- Read its `README.md`.
- Read at least one existing service file in that module to understand the patterns.
- If the change crosses module boundaries, stop and ask the user how to proceed.

Never invent a new pattern when an existing one applies.
