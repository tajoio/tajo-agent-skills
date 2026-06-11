# Quick Start

Tajo Agent Skills are plain folders. Each skill folder contains a `SKILL.md` file and optional reference files.

## Install A Skill

Copy a skill folder into your project-level skill directory:

```text
your-project/
  .agents/
    skills/
      brevo-deep-api-operator/
        SKILL.md
        references/
```

Many skills-compatible agents also support user-level skill directories. Use the location your agent documents.

## Test Discovery

Start a new agent session and ask for a task that should activate the skill:

```text
I need to process Brevo hard-bounce and unsubscribe webhook events safely.
```

The agent should use `brevo-deep-api-operator`, because the task needs Brevo webhook and suppression behavior.

## Use The Brevo Pack

Use one skill at a time when possible:

- Brevo API endpoints, webhooks, identity, or retries: `brevo-deep-api-operator`
- Campaign planning, consent, content review, or dispatch: `brevo-engagement-designer`
- Building a source-to-Brevo integration: `brevo-connector-solution-builder`

## Credentials

Skills should reference credentials by variable name only. Example:

```text
BREVO_API_KEY
```

Do not paste actual credential values into prompts, files, examples, issues, or pull requests.

## Validate Locally

```bash
npm run validate
```
