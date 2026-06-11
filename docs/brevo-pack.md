# Brevo Pack

The Brevo pack is the first public Tajo Agent Skills collection.

## `brevo-deep-api-operator`

Use for endpoint-level API work:

- contact upsert
- list assignment
- custom event tracking
- transactional email
- transactional SMS
- webhook ingestion
- bounce and complaint handling
- unsubscribe and suppression semantics
- rate limits and retries

The skill is intentionally strict about missing identifiers, consent basis, webhook verification, and idempotency.

## `brevo-engagement-designer`

Use for campaign and lifecycle send planning:

- audience and channel selection
- consent and suppression checks
- sender verification
- content review
- personalization fallback review
- approval gates
- staged rollout planning
- post-send event review

The skill refuses or escalates sends that bypass consent, ignore suppression, or create obvious compliance risk.

## `brevo-connector-solution-builder`

Use when building a source-to-Brevo integration:

- identify official source documentation
- map source records into normalized events
- map normalized events into Brevo destination actions
- document auth, pagination, rate limits, webhooks, idempotency, and replay
- require sample source, normalized, and destination payloads

The skill blocks production implementation when official evidence or replay-safe write behavior is missing.

## HTTP Action Template

[`templates/brevo-http-action-template.md`](../templates/brevo-http-action-template.md) provides a generic starting point for sandboxed HTTP actions using `curl` and `jq`.

It contains placeholder variable names only. It does not contain live credentials.
