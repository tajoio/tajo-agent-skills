# Authoring Guide

Use this guide when adding or changing skills.

## Skill Shape

Each skill lives in:

```text
skills/<skill-name>/
  SKILL.md
  references/
```

The `SKILL.md` frontmatter must include:

```yaml
---
name: skill-name
description: Use when ...
license: Apache-2.0
---
```

The `name` must:

- match the directory
- use lowercase letters, digits, and hyphens
- not start or end with a hyphen

## Description Quality

The description controls whether the agent loads the skill. A good description says when to use the skill and includes near-miss context.

Good:

```yaml
description: Use when working with Brevo API operations for contacts, lists, custom events, transactional email, transactional SMS, webhooks, bounces, suppression, rate limits, or API-backed lifecycle messaging.
```

Weak:

```yaml
description: Helps with Brevo.
```

## Keep Runtime Instructions Compact

`SKILL.md` should contain the core procedure and references to deeper files. Put endpoint tables, examples, and long checklists in `references/`.

## Evidence Standard

For API and connector skills, prefer:

1. official OpenAPI or Swagger specs
2. official MCP server or tool schema
3. official SDK or CLI docs
4. official prose docs and examples
5. community material only for prototypes

## Evaluation

When changing trigger descriptions, update or add examples under `evals/`.

Include both:

- prompts that should trigger the skill
- near-miss prompts that should not trigger it

## Credential Handling

Use variable names only. Never include real values.

Allowed:

```text
BREVO_API_KEY
```

Not allowed:

```text
Do not include a real credential value.
```
