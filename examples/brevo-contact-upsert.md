# Example: Brevo Contact Upsert

## User Intent

Add or update a customer in Brevo so later campaigns and lifecycle events can identify them.

## Required Inputs

- email or deterministic external id
- optional first name and last name
- optional phone number
- consent state if the contact will receive marketing

## Safe Behavior

- Do not overwrite known data with blanks.
- Do not add marketing consent unless it is provided by the source system.
- Preserve source ids for reconciliation.
- Report API errors without exposing credentials.

## Minimal HTTP Pattern

```bash
curl -sS -X POST "https://api.brevo.com/v3/contacts" \
  -H "api-key: $BREVO_API_KEY" \
  -H "Content-Type: application/json" \
  --data "$(jq -n \
    --arg email "{EMAIL}" \
    --arg first "{FIRSTNAME}" \
    --arg ext "{EXT_ID}" \
    '{email: $email, updateEnabled: true, attributes: {FIRSTNAME: $first, EXT_ID: $ext}}')"
```
