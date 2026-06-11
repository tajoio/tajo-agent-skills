# Contributing

Contributions are welcome when they improve skill quality, portability, safety, or documentation.

## Before Opening A Pull Request

1. Keep changes scoped to one skill, template, or doc improvement.
2. Do not include credentials, customer data, private URLs, or local environment files.
3. Run:

   ```bash
   npm run validate
   ```

4. Add or update eval prompts when changing a skill description or activation behavior.

## Adding A Skill

Create:

```text
skills/<skill-name>/
  SKILL.md
  references/
```

Then add the skill to `catalog.json`.

## API Evidence

For connector and API skills, include official source evidence. Generated endpoint guesses are acceptable only for exploratory notes, not production guidance.

## Pull Request Notes

Include:

- what changed
- why it changed
- how it was validated
- any known limitations

If AI assistance was used for the contribution, disclose it in the pull request.
