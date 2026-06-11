# Tajo Agent Skills

Open agent skills for commerce, marketing, CRM, lifecycle messaging, and integration APIs.

Tajo Agent Skills packages API operating knowledge as portable skill folders. Each skill gives an agent a focused workflow: when to use an API, what evidence to require, where the safety boundaries are, and which reference files to load only when deeper detail is needed.

The first collection focuses on Brevo: contacts, lists, events, transactional messaging, campaign planning, webhooks, suppression, and connector-to-Brevo integration design.

## Skills

- [`brevo-deep-api-operator`](skills/brevo-deep-api-operator/SKILL.md) - Brevo API operations for contacts, lists, events, transactional email/SMS, webhooks, suppression, and retries.
- [`brevo-engagement-designer`](skills/brevo-engagement-designer/SKILL.md) - Brevo campaign and dispatch planning with consent, approval, deliverability, and budget guardrails.
- [`brevo-connector-solution-builder`](skills/brevo-connector-solution-builder/SKILL.md) - Connector design workflow for mapping official vendor APIs into Brevo-ready engagement events and actions.

## Quick Start

Copy one or more folders from `skills/` into an Agent Skills-compatible location, for example:

```text
your-project/
  .agents/
    skills/
      brevo-deep-api-operator/
        SKILL.md
        references/
```

Then start a compatible agent session and ask for a Brevo API, campaign, webhook, or connector task. The agent should discover the skill by its `name` and `description`, then load the full instructions only when relevant.

See [Quick Start](docs/quickstart.md) for installation options and [Brevo Pack](docs/brevo-pack.md) for the skill map.

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

## Credentials

Skills reference credentials by environment-variable name only, such as `BREVO_API_KEY`. Do not hard-code real API keys, passwords, customer data, or private workspace URLs in skills, examples, templates, issues, or pull requests.

See [Security](SECURITY.md).

## Validate

```bash
npm run validate
```

The validator checks skill folder names, required frontmatter, AgentSkills-compatible names, catalog references, and common secret patterns.

## Project Docs

- [Quick Start](docs/quickstart.md)
- [Brevo Pack](docs/brevo-pack.md)
- [Authoring Guide](docs/authoring-guide.md)
- [Release Checklist](docs/release-checklist.md)
- [Contributing](CONTRIBUTING.md)
- [Security](SECURITY.md)

## License

Apache-2.0.
