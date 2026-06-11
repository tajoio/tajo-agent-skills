# Solution Pack Template

```text
<connector>-brevo-solution/
  SKILL.md
  references/
    official-sources.md
    auth-and-install.md
    resources-and-endpoints.md
    engagement-events.md
    webhooks-and-events.md
    rate-limits-and-retries.md
    examples-and-recipes.md
```

## `SKILL.md`

Keep this concise:

- what the connector is for
- which official surface to prefer
- required safety gates
- ingestion and event emission responsibilities
- common recipes
- links to reference files

## `engagement-events.md`

Define:

- inbound records and events
- capture mode: webhook, polling, batch import, file export, MCP, SDK, or CLI
- normalized event families
- destination actions supported by official evidence
- idempotency key shape
- consent and suppression behavior
- deletion and unsubscribe handling
- raw payload retention
- dead-letter behavior
- replay strategy
- sample source, normalized, and destination payloads
