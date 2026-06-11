# Transactional Messaging

## Transactional Email

Required inputs:

- verified sender
- recipient
- subject
- template id or approved HTML/text
- tags or metadata for correlation

Transactional email is for triggered operational messages such as receipts, password reset, account notices, and status updates. Promotional campaigns require marketing consent and approval gates.

## Transactional SMS

Required inputs:

- recipient phone number in a normalized international format
- message body
- sender constraints for the target country
- opt-in or transactional basis, depending on the use case and jurisdiction

## Approval Boundaries

Require human approval before high-volume sends, promotional sends, or anything that could materially affect customer trust, legal compliance, or cost.

## Result Handling

Capture provider response ids and correlate later webhook events to the originating send. Do not rely only on synchronous API success as proof of delivery.
