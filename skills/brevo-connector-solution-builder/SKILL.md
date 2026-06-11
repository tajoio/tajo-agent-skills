---
name: brevo-connector-solution-builder
description: Use when designing a connector or integration that maps an official source API into Brevo contacts, events, lists, transactional messages, campaigns, or suppression-safe lifecycle workflows.
license: Apache-2.0
compatibility: Agent Skills compatible clients with access to official vendor docs, OpenAPI specs, SDK docs, or API samples.
metadata:
  maintainer: Tajo
  version: "0.1.0"
---

# Brevo Connector Solution Builder

Use this skill to design Brevo-bound integrations from official source evidence. Normalize source data first, then map it into Brevo actions.

## Source Priority

1. Official OpenAPI or Swagger spec.
2. Official MCP server or tool schema.
3. Official SDK or CLI docs.
4. Official written API docs and examples.
5. Community examples only for prototypes.
6. Generated endpoint guesses only for exploration.

## Build Rules

1. Start with the user outcome: identify contacts, emit events, assign lists, send messages, create CRM objects, or process webhooks.
2. Capture source auth, pagination, rate limits, webhook verification, idempotency, and replay behavior.
3. Define a normalized event contract before writing to Brevo.
4. Confirm consent, suppression, deletion, and unsubscribe semantics.
5. Require a sample source payload, normalized payload, and Brevo destination payload.
6. Block production code generation when confidence is below 0.95.

## Output Shape

Produce a compact solution pack:

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

## References

- `references/official-source-policy.md`
- `references/solution-pack-template.md`
