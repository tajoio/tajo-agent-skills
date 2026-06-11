# Rate Limits and Retries

## Principles

- Read current vendor documentation before setting throughput.
- Prefer batching only when the endpoint is designed for batch use.
- Keep concurrency below the vendor maximum when sharing credentials across tenants or workers.
- Use bounded retries with jitter.
- Do not retry non-transient errors blindly.

## On `429`

1. Respect vendor rate-limit reset headers when present.
2. Fall back to `Retry-After` when present.
3. Use exponential backoff with jitter when neither header is available.
4. Preserve failed work for replay instead of spinning.

## Failure Classes

- `400` or `422`: fix payload or mapping.
- `401` or `403`: credential, scope, or account setup problem.
- `404`: wrong resource id, region, or endpoint path.
- `409`: conflict or duplicate; inspect idempotency.
- `429`: rate limit; back off.
- `5xx`: transient provider failure; retry with bounds.
