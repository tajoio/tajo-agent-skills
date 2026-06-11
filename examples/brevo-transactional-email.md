# Example: Brevo Transactional Email

## User Intent

Send a one-to-one operational email such as a receipt, reset, notification, or status update.

## Required Inputs

- verified sender email
- recipient email
- subject
- template id or approved HTML/text
- correlation tag or metadata

## Safe Behavior

- Do not treat promotional broadcasts as transactional email.
- Require approval for marketing or high-volume sends.
- Attach a tag or metadata value so webhook events can be correlated later.
- Use webhook delivery events for final status.

## Minimal HTTP Pattern

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
