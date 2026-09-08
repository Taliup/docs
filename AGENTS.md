> **First-time setup**: Customize this file for your project. Prompt the user to customize this file for their project.
> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Terminology

- **Taliup POS** — merchant-facing point-of-sale app (single product in docs; do not split Elys vs A920 as separate products)
- **Menu / Catalog** — same Home section; restaurants see Menu / Items / Modifiers; other industries see Catalog / Products / Attributes
- Prefer app UI labels over internal code names

## Style preferences

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
- Organize Taliup POS docs to mirror the Home screen (Register, Tables, Menu/Catalog, Orders, Transactions, Settings)
- Do not structure POS docs by device type (A920, Elys, Poynt, etc.) in primary navigation

## Content boundaries

- Assume Taliup HQ onboarding (Entity, devices, plans) is already done when writing POS pages
- Public audience: ISOs/partners, CS, and merchants — avoid internal-only secrets (demo passcodes → “ask your ISO or partner”)
- Deferred for later: settlement/batch deep-dives, WebSRM, dual pricing/surcharge deep-dives, hardware pairing expansion
- Home tile **Calendar** maps to docs under `taliup-pos/calendar` (not a separate “Scheduling” product tab)
- Existing `taliup-pos/devices/**` pages are hidden from nav but kept for URL compatibility

## Changelog

**One page per release**, named `changelog/YYYY-MM.mdx` (and `fr-CA/changelog/YYYY-MM.mdx`),
listed newest-first in the `Releases` / `Versions` group in `docs.json`. Mintlify's
`pages` array only accepts page file paths, so a page per release is what puts each
one in the left sidebar. `changelog/index.mdx` is the overview — the explainer plus a
table linking to each release; add a row when you add a release.

Both languages must stay in sync — every release ships in EN and fr-CA.

**Each release page holds one `<Update>`:**

```mdx
<Update label="October 2026" tags={["Taliup POS", "Taliup HQ"]}>
```

- `label` — the month and year. It becomes the anchor link.
- Do **not** set `description`, and do not put a release number in the page `title` —
  a release is identified by its month. Internal train numbers (`2.0.9`) mean nothing
  to a reader, and per-channel numbers belong in the availability table.
- Page frontmatter: `title` and `sidebarTitle` are both the month ("October 2026").
- `tags` — product only: `Taliup POS`, `Taliup HQ`. These render as filters.
  Do **not** tag by channel: every channel gets every feature (one codebase, the
  flavors differ only by `strings.xml`), so a channel tag would be identical on
  every entry and useless as a filter. Channels belong in the availability table.

**Body: brief bullets under three bold labels** — `**New**`, `**Improved**`,
`**Fixed**`. Omit a label with nothing under it.

- One line per item. Bold the feature name, then a short outcome-focused sentence.
- Anything needing more than a line gets a link into the feature docs. The changelog
  is an index into the docs, not a second copy of them.
- Do not use Markdown headings (`##`) inside an `<Update>` — Mintlify generates a
  separate RSS entry per heading. Bold text instead.
- Omit anything a merchant cannot observe: refactors, dependency bumps, packaging,
  version-check or store-approval work.
- Lead with the biggest item. Do not alphabetize.
- Past tense or imperative, consistently. If a release runs past ~12 bullets, the
  grain is too fine — merge related items.

**Close each entry with an availability table**, since version numbers diverge by
distribution channel:

```mdx
**Availability**

| Channel | Version | Released |
|---|---|---|
| Poynt | 2.0.17 | Aug 24 |
| AiOne | 2.0.11 | Aug 24 |
| Elys | 2.0.9 | |
| PAX (Nuvei, Elavon) | 1.0.14 | |
```

- Channels are **PAX** (the `nuvei` and `elavon` flavors), **Poynt**, **Elys**, and
  **AiOne** (the `external` flavor). `castles` and `paynuity` are not listed.
- Version numbers come from `productFlavors` in `app/build.gradle.kts` in the
  `taliup-register-pax` repo. List a channel only once it has actually shipped.
- Until a release has shipped everywhere, use a `<Note>` instead of the table and
  fill the table in as each channel goes out.
- This table is the **only** place device or vendor names belong. It is a deliberate
  exception to the rule above against structuring POS docs by device type — never
  put channel names in navigation or in feature pages.

Detailed per-release guides for QA and CS stay in `internal/` with
`noindex: true` and `hidden: true`. The public entry is a short distillation of one.
