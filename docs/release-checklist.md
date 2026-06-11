# Release Checklist

Use this checklist before publishing a release or announcing the repository.

## Content

- Skill names match folder names.
- Skill descriptions clearly state when to use the skill.
- Runtime instructions are concise.
- Long reference material lives in `references/`.
- Examples use placeholders, not real credentials.
- README links work.
- `catalog.json` reflects the available skills and templates.

## Safety

- No `.env` files.
- No real API keys, passwords, tokens, session ids, customer data, or private workspace URLs.
- No pasted debug transcripts containing credentials.
- No private Alto/Tajo runtime paths unless intentionally documented as public project context.

## Validation

```bash
npm run validate
git status --short
```

Expected:

- validator passes
- worktree is clean after commit

## GitHub

- Repository visibility is intentional.
- Default branch is `main`.
- Topics are set.
- CI passes.
- Release notes are written in `CHANGELOG.md`.
