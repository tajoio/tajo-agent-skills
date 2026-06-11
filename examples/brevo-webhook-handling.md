# Example: Brevo Webhook Handling

## Goal

Process Brevo webhook batches without losing events or creating unsafe replay behavior.

## Handler Requirements

- Verify the webhook secret or signature.
- Parse each event independently.
- Apply idempotency before state changes.
- Update suppression state for hard bounce, complaint, spam, and unsubscribe.
- Keep soft bounce separate from permanent suppression.
- Return a non-2xx response if any event cannot be safely accepted.
- Preserve failed event payloads for replay.

## Normalized Events

- `delivered`
- `opened`
- `clicked`
- `bounced`
- `complained`
- `unsubscribed`
- `failed`
- `inbound`

## Replay Key

Prefer provider event id when available. Otherwise construct a deterministic key from:

```text
message_id + recipient + event_type + event_timestamp
```
