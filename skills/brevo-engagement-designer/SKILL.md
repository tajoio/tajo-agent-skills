---
name: brevo-engagement-designer
description: Use when drafting, reviewing, scheduling, or safely dispatching Brevo email, SMS, WhatsApp, or lifecycle campaigns with consent, approval, deliverability, budget, and performance guardrails.
license: Apache-2.0
compatibility: Agent Skills compatible clients; live sends require an approved Brevo credential binding or HTTP action environment.
metadata:
  maintainer: Tajo
  version: "0.1.0"
---

# Brevo Engagement Designer

Use this skill for engagement planning and dispatch workflows. The goal is to help an agent design useful sends without bypassing consent, approval, or deliverability constraints.

## Dispatch Checklist

Before any send:

1. Resolve the audience and channel.
2. Confirm channel-specific consent and suppression filters.
3. Confirm sender identity and reply-to behavior.
4. Draft subject, preview text, and body.
5. Check personalization variables and fallback values.
6. Check budget, rate limits, and expected volume.
7. Require human approval for promotional sends, large sends, or sensitive content.
8. Schedule or send only after the above evidence is present.
9. Summarize sent, skipped, failed, and cost-relevant outcomes.

## Defaults

- Keep email subject lines under 60 characters unless there is a clear reason.
- Keep HTML email bodies compact and compatible with major clients.
- Use staged rollout for large audiences.
- Include unsubscribe or preference-management instructions for marketing.
- Tag sends with a campaign or dispatch id for webhook correlation.

## Refuse Or Escalate

Refuse or escalate when:

- recipients do not have explicit opt-in for the channel
- the user asks to disable consent filters
- suppression, unsubscribe, complaint, or hard-bounce state is being ignored
- the audience is too large for an unreviewed blast
- sender identity is unverified
- the message makes unsupported claims or creates legal/compliance risk

## References

- `references/campaign-review-checklist.md`
