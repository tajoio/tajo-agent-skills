# Webhooks, Bounces, and Suppression

## Webhook Design

Webhook handlers should:

- verify signatures or shared secrets
- acknowledge only after durable processing when practical
- isolate per-event failures in batches
- return a non-2xx response when any event in the batch cannot be safely accepted
- support replay without duplicating state changes
- write failed events to a dead-letter queue or audit log

## Common Event Mapping

Map provider events into normalized event families:

- delivered
- opened
- clicked
- bounced
- complained
- unsubscribed
- failed
- inbound

## Consent and Suppression

Permanent negative events should affect send eligibility:

- hard bounce: suppress or mark bounced for the address
- complaint or spam report: opt out or suppress for marketing
- unsubscribe: opt out for the relevant channel/scope

Do not suppress only because of a soft bounce. Soft bounces can be temporary.

## Replay Safety

Use a deterministic idempotency key from provider event id, message id, recipient, event type, and timestamp. If the provider does not supply a stable event id, construct one from the most stable available fields.
