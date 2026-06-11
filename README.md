# Tajo Agent Skills

Open agent skills for commerce, marketing, CRM, lifecycle messaging, and integration APIs.

The first collection focuses on Brevo. These skills package production-oriented API knowledge, consent rules, event handling, and HTTP-action patterns so agent clients can load the right operating procedure only when a task calls for it.

## Skills

- `brevo-deep-api-operator` - Brevo API operations for contacts, lists, events, transactional email/SMS, webhooks, suppression, and retries.
- `brevo-engagement-designer` - Brevo campaign and dispatch planning with consent, approval, deliverability, and budget guardrails.
- `brevo-connector-solution-builder` - Connector design workflow for mapping official vendor APIs into Brevo-ready engagement events and actions.

## Layout

```text
skills/
  brevo-deep-api-operator/
    SKILL.md
    references/
  brevo-engagement-designer/
    SKILL.md
    references/
  brevo-connector-solution-builder/
    SKILL.md
    references/
templates/
examples/
evals/
scripts/
```

Each skill follows the Agent Skills folder model: a `SKILL.md` file with required frontmatter, plus focused reference files loaded only when useful.

## Safety

This repository must not contain API keys, passwords, customer data, private workspace URLs, or environment files. Skills should refer to credential variables by name only, for example `BREVO_API_KEY`, and never include actual values.

## Validate

```bash
npm run validate
```

The validator checks the local skill folder names, required frontmatter, AgentSkills-compatible names, and common secret patterns.

## License

Apache-2.0.
