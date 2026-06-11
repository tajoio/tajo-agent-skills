# Brevo HTTP Action Template

Use this template when a skill gallery or agent client executes external actions through shell commands in a sandbox.

## Name

Brevo - <action name>

## Description

Short description of the merchant-facing action.

## Variables

- `BREVO_API_KEY` - Brevo API key from the merchant's Brevo account.
- `BREVO_SENDER_EMAIL` - Verified sender email, required for transactional email.
- `BREVO_LIST_ID` - Optional Brevo list id for list assignment workflows.

Variables must be stored by the host platform as encrypted secrets. Do not place real values in this file.

## Instructions

When the customer request requires this Brevo action:

1. Resolve runtime placeholders from the conversation, such as `{EMAIL}`, `{FIRSTNAME}`, `{ORDER_ID}`, or `{MESSAGE_BODY}`.
2. Validate required inputs before making an API call.
3. Use `curl` for HTTP calls and `jq` for JSON parsing.
4. Do not print secret environment variables.
5. If Brevo returns `401` or `403`, explain that the merchant needs to check credentials or permissions.
6. If Brevo returns `429`, do not blindly retry. Report rate limiting or wait according to the response headers if the host allows waiting.
7. If an action affects marketing consent, suppression, or customer messaging, require the explicit guardrail described in the skill.

## Example: Upsert Contact

```bash
curl -sS -X POST "https://api.brevo.com/v3/contacts" \
  -H "api-key: $BREVO_API_KEY" \
  -H "Content-Type: application/json" \
  --data "$(jq -n \
    --arg email "{EMAIL}" \
    --arg first "{FIRSTNAME}" \
    '{email: $email, updateEnabled: true, attributes: {FIRSTNAME: $first}}')"
```

## Example: Send Transactional Email

```bash
curl -sS -X POST "https://api.brevo.com/v3/smtp/email" \
  -H "api-key: $BREVO_API_KEY" \
  -H "Content-Type: application/json" \
  --data "$(jq -n \
    --arg sender "$BREVO_SENDER_EMAIL" \
    --arg to "{EMAIL}" \
    --arg subject "{SUBJECT}" \
    --arg html "{HTML_BODY}" \
    '{sender: {email: $sender}, to: [{email: $to}], subject: $subject, htmlContent: $html}')"
```
