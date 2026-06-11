# Events and Automations

## Event Requirements

A Brevo custom event should have:

- an event name
- at least one contact identifier
- an event timestamp, when available
- event properties that are JSON-safe and intentionally mapped
- an idempotency key or deterministic replay key in the calling system

## Naming

Use compact, stable event names. Prefer lowercase words joined by `_` or `-`.

Examples:

- `checkout_started`
- `order_paid`
- `trial_started`
- `product_viewed`
- `cart_abandoned`

Avoid names that include customer data, campaign copy, or unstable display labels.

## Batch Events

Batch only events that are safe to replay independently. A partial failure should preserve enough information to retry failed events without duplicating successful ones.

## Automation Readiness

Before wiring events into automation, confirm:

- event names are stable
- expected properties are documented
- consent and suppression behavior is clear
- test events can be filtered from production reporting
- event volume is within rate and budget limits
