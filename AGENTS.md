# Agent Guide

This repository contains public Agent Skills. Keep edits conservative, portable, and safe for a public GitHub repository.

## Rules

- Do not commit API keys, passwords, tokens, `.env` files, customer data, private URLs, or local runtime state.
- Keep every skill directory named exactly like its `SKILL.md` `name` field.
- Use lowercase hyphenated skill names.
- Put concise runtime instructions in `SKILL.md`.
- Put deeper API notes, examples, and checklists in `references/`.
- Prefer official vendor documentation, OpenAPI specs, SDKs, and CLIs over generated guesses.
- Add eval prompts when changing trigger descriptions or workflow behavior.

## Verification

Run:

```bash
npm run validate
```
