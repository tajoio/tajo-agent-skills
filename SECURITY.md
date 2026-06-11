# Security

## Credential Policy

Do not commit real credentials or secrets.

This includes:

- API keys
- passwords
- access tokens
- refresh tokens
- webhook secrets
- private workspace URLs
- customer data
- debug logs containing sensitive values
- `.env` files

Use placeholder variable names only, such as `BREVO_API_KEY`.

## Reporting A Security Issue

Do not open a public issue for a credential leak or vulnerability.

Email: support@tajo.io

Include:

- affected file or workflow
- impact
- reproduction steps, if safe to share
- suggested fix, if known

## Supported Versions

The `main` branch is the active development line for this early repository.
