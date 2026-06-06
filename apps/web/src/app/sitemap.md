# Sitemap

This document is a human-readable sitemap for PIS Labs website. It mirrors the machine sitemap at `/sitemap.xml` and provides quick links for navigation and export.

## Primary pages

- / — Home
- /research — Research listing and case studies
- /ventures — Ventures overview
- /build — Build process and services
- /distribute — Distribution & GTM
- /booking — Schedule a call / contact
- /terms — Terms of service
- /privacy — Privacy policy
- /sitemap.xml — XML sitemap for crawlers

## Research / Case Studies

- /research/credturn-01 — CredTurn (A scalable credit and financial infrastructure product)

## Notes

- The XML sitemap is generated from `apps/web/src/app/sitemap.ts` and includes dynamic entries for research pages using `venturesData`.
- If you add new entries to `apps/web/src/lib/data/ventures.ts`, the XML and this human sitemap should be updated accordingly.

If you want this exported in another format (CSV, JSON, or a printable PDF), say which format and I'll add an export endpoint.
