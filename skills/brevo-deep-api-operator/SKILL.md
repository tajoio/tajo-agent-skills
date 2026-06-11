---
name: brevo-deep-api-operator
description: Use when working with Brevo API operations for contacts, lists, custom events, transactional email, transactional SMS, webhooks, bounces, suppression, rate limits, or API-backed lifecycle messaging.
license: Apache-2.0
compatibility: Agent Skills compatible clients with shell or HTTP tooling when live API calls are required.
metadata:
  maintainer: Tajo
  version: "0.1.0"
---

# Brevo Deep API Operator

Use this skill to plan or execute Brevo-bound API work with production discipline. Prefer official Brevo documentation and OpenAPI evidence over guesses.

## Operating Model

1. Classify the task: contact sync, list assignment, behavioral event tracking, transactional messaging, CRM object sync, webhook handling, suppression, or reporting.
2. Confirm required inputs before selecting an endpoint.
3. Use stable identifiers. Contacts need an email, phone number, or deterministic external id. Events need an event name and at least one contact identifier.
4. Treat marketing consent as data, not prose. Do not send promotional messages without channel-specific opt-in evidence.
5. Use webhooks for delivery, bounce, unsubscribe, complaint, inbound email, and campaign feedback when available.
6. Treat hard bounces, complaints, spam reports, and unsubscribe events as send-eligibility changes. Do not suppress solely on a soft bounce.
7. Respect Brevo rate limits. On `429`, use vendor reset headers or standard `Retry-After`, then bounded jittered retry.
8. Keep API keys in environment variables or secret stores. Never print or embed secret values.

## Endpoint Selection

- Contact upsert: use Brevo contact create/update semantics with update enabled when appropriate.
- Bulk contacts or list assignment: prefer import/bulk workflows when volume is high.
- List membership: require a known list id and a known or just-created contact.
- Custom event: require `event_name` plus contact identity. Normalize event names to portable identifiers.
- Transactional email: require recipient, verified sender, subject, and either template id or approved HTML/text.
- Transactional SMS: require recipient phone number, sender constraints, and message body.
- Webhooks: require signature verification, idempotency, replay handling, and dead-letter behavior.

## When To Stop

Stop and ask for evidence when:

- The request lacks a required identifier, list id, sender, template, or consent basis.
- The endpoint appears only in generated or community docs.
- Webhook verification cannot be implemented.
- A write path has no idempotency or replay plan.
- The user asks to bypass consent, suppression, unsubscribe, or complaint handling.

## References

- `references/contacts-lists-identity.md`
- `references/events-and-automations.md`
- `references/transactional-messaging.md`
- `references/webhooks-bounces-suppression.md`
- `references/rate-limits-retries.md`
