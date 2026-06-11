# Official Source Policy

Use official vendor-maintained sources whenever possible. Connector skills should make agents useful without turning stale or generated documentation into a production contract.

## Evidence Hierarchy

| Rank | Source | Production use |
|---:|---|---|
| 1 | Official OpenAPI or Swagger spec | Yes |
| 2 | Official MCP server or tool schema | Yes |
| 3 | Official SDK or CLI docs | Yes |
| 4 | Official prose docs and examples | Yes, with endpoint verification |
| 5 | Vendor changelog or release notes | Supporting evidence |
| 6 | Community specs or examples | Prototype/reference only |
| 7 | Generated endpoints from prose | Prototype only |

## Required Connector Fields

- official docs URL
- official spec, SDK, CLI, or MCP source, if available
- auth model
- base URL and allowed host
- pagination model
- rate-limit model
- webhook/event model
- ingestion model
- Brevo destination actions
- consent, suppression, deletion, and unsubscribe behavior
- idempotency and replay key shape
- known unsupported paths
- last verified date

## Blocking Rules

Block production implementation when:

- endpoint evidence is generated or community-only
- auth semantics are unclear
- pagination or rate limits are unknown
- writes lack idempotency
- webhook verification is missing
- consent and suppression semantics are unknown
- the mapping skips the normalized event layer
