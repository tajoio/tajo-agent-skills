# Contacts, Lists, and Identity

## Required Evidence

Before writing contacts, identify the source of truth for:

- primary email address
- SMS or WhatsApp phone number, when relevant
- external id or source-system id
- channel consent
- list id or segment target
- custom attributes needed for later segmentation

## Attribute Conventions

Use stable, documented attribute names. Common examples:

- `FIRSTNAME`
- `LASTNAME`
- `SMS`
- `COUNTRY`
- `EXT_ID`
- source-specific ids such as `SHOPIFY_CUSTOMER_ID` or `HUBSPOT_CONTACT_ID`

Create required custom attributes before depending on them for segmentation or personalization.

## Single Upsert

Use a contact create/update flow when handling one deterministic contact. Include only attributes that are known and intentionally mapped. Do not overwrite meaningful existing attributes with blank values.

## Bulk Import

Prefer bulk/import workflows when:

- more than roughly 150 contacts are being written
- list assignment is part of the import
- the source export is batch-oriented
- replayability and import status matter

Bulk jobs should include a source batch id and a way to reconcile accepted, skipped, and failed rows.
