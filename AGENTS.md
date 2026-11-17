# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP
- English pages live at the repo root; French (Canada) mirrors live under `fr-CA/` at the same relative path
- The merchant pages are also the knowledge base of the in-app assistant. Taliup HQ reads this repository
  (not the website) with `php artisan intelligence:sync-knowledge`, so the frontmatter rules below matter
  for both readers and the assistant

## Terminology

- **Taliup POS** — merchant-facing point-of-sale app (single product in docs; do not split Elys vs A920 as separate products)
- **Menu / Catalog** — same Home section; restaurants see Menu / Items / Modifiers; other industries see Catalog / Products / Attributes
- **PIN** — what an employee enters to sign in (not "passcode")
- Prefer app UI labels over internal code names

## How the app differs between channels

Every channel ships the same codebase, but the builds are not identical:

- Flavors differ by resources (`strings.xml`) **and by payment SDK**, as represented by `PaymentSDK` in
  `core/model/.../PaymentSDK.kt` in the `taliup-register-pax` repo: `PosLink` (PAX), `Commerce` (Elavon
  card readers through the Elavon Commerce SDK), `Castles` and `Poynt`.
- The `:app-pax` build always uses `PosLink`. The Poynt build uses `Poynt`. The other `:app` builds use the
  SDK of the card reader selected at activation (A920 Pro / Elys → `PosLink`, Link 2500 / Lane 3600 →
  `Commerce`, S1P2 / S1F4 Pro → `Castles`).
- Capabilities follow the SDK, for example: built-in receipt printing and tip adjust are not available with
  `Commerce`, and Poynt has no Device Settings screen. Check the helpers in `PaymentSDK.kt` before writing
  that something works "on every device".

State such differences where the reader needs them (see [Applicability](#applicability-metadata) and
[Conditions at the point of use](#conditions-at-the-point-of-use)).

## Style preferences

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**. Use the exact label the app or Taliup HQ shows, in the page's
  language (the app's labels are in each module's `values/strings.xml` and `values-fr/strings.xml`)
- Code formatting for file names, commands, paths, and code references
- Organize Taliup POS docs to mirror the Home screen (Register, Tables, Menu/Catalog, Orders, Transactions, Settings)

## Page structure

### Frontmatter

Every page has `title`, `sidebarTitle` and a `description`. Merchant and partner pages also have `keywords`.

- `description` — what the reader can do on the page, at most 160 characters.
- `keywords` — 4–8 phrases an employee would type or say ("refund a card payment", "reprint a receipt"),
  not internal names. French pages use French phrases.

### Applicability metadata

English source pages that belong in the assistant's knowledge base carry an `applies_to` block. French
mirrors never carry one: they inherit it from the English page with the same path.

```yaml
applies_to:
  audience: merchant          # merchant | partner | admin | developer
  product: pos                # pos | hq | shared
  features: [clients]         # HQ entitlement codes; every listed feature is required
  permissions:
    guard: appUser            # appUser | web
    any: ["Manage Clients"]   # at least one, when supplied
    all: []                   # every permission, when supplied
  channels: [pax, poynt, elys, aione, castles, paynuity]
  since: "2026-11"            # release page (changelog/YYYY-MM) that introduced the capability
```

- **audience** — who the page is for. Tag `taliup-pos/**` (except the hidden device pages),
  `taliup-hq/merchant/**` and `taliup-hq/features/**` as `merchant`; `taliup-hq/index`,
  `taliup-hq/create-entity` and `taliup-hq/{manage,devices,onboarding}/**` as `partner`; `changelog/*` as
  `merchant`. Leave `taliup-hq/admin/**`, `php-sdk/**`, `internal/**` and the hidden
  `taliup-pos/devices/pax/**` pages untagged. A page without an `applies_to` block (and without an English
  page to inherit from) is not in the knowledge base.
- **product** — what the content describes: `pos` (the app), `hq` (Taliup HQ) or `shared` (both, e.g. a
  changelog). It does not decide authorization on its own.
- **features** — codes from HQ's `features.code` (seeded by `FeatureSeeder`) or an implied entitlement
  code from `Modules/Core/Config/feature_implied.php` (for example `orders`, implied by `catalog`). Every
  listed code is required. Omit the key when the whole page has no common feature requirement.
- **permissions** — exact seeded permission names, validated against the guard. Use `appUser` for features
  used in the app (the employee's own permissions) and `web` for HQ-only capabilities (the linked HQ
  account's permissions). `any` needs at least one; `all` needs every one; when both are present both must
  hold. Use `all` only where the code requires several permissions together (for example, linking an
  employee to an HQ account). Omit the key when the whole page has no common permission requirement.
- **channels** — `pax` (the `nuvei` and `elavon` flavors of both `:app` and `:app-pax`), `poynt`, `elys`,
  `aione` (the `external` flavor), `castles`, `paynuity`. Omit the key when the page applies to every channel.
- **since** — the release page (`changelog/YYYY-MM`) that introduced the capability. Omit it when no
  release introduction is recorded; never invent a date. A page covering capabilities from several releases
  gets no `since`; put the release beside each capability in the text instead.

Rules:

- Put a page-level requirement only when it applies to the **whole page**. Overview pages, changelogs and
  references covering several operations do not get a single feature or permission gate.
- Conditions the schema cannot express stay in prose: card reader / payment SDK, Open Sale Only, WEB-SRM,
  industry, location enrolment (gift cards, loyalty) and roles. POS employee management, for example,
  requires the **Owner** role as well as the employee permission — say so in the text.
- `php artisan intelligence:sync-knowledge` rejects unknown feature codes, unknown permissions for a guard,
  unknown channels and a `since` without a matching English release page.

### Conditions at the point of use

- State an operation's conditions beside the instruction, with the exact UI label, the feature's display
  name in Taliup HQ and the exact permission name: "Requires the **Manage Clients** permission."
- Whole-page prerequisites go in a `## Before you start` section near the top (French:
  `## Avant de commencer`). Do not use other headings for prerequisites (`## Prerequisites`,
  `## Prérequis`, `## Before you use Taliup POS`, `### Access requirements`) and do not leave a prerequisite
  as a loose sentence ("Requires the Clients feature…") — move it under that heading.

### Length and scope

- Prefer one task per task guide, normally 150–600 words.
- Reference and overview pages can be longer when their purpose warrants it. Do not split accurate content
  only to meet a word count; split a long page when separate tasks would be clearer to find.

### Settings paths

Write every Settings path the same way: Home → **Settings** → section → control, with bold exact labels.

- Name the group where it helps: **Preferences**, **Register** or **Tools**. **Printer Settings** and
  **Device Settings** are under **Tools**.
- Portrait shows the general sections together on one screen, with **General** selected where the
  **General** / **WEB-SRM** tabs are present; landscape uses the section navigation on the left. Explain this
  once, on `taliup-pos/settings/index`, and link to it rather than repeating it.
- In Open Sale Only, the entry path is **Options** → **Open Settings**, then the same section and control.
- Register hides the auto-settlement Settings entry on every channel, and no Taliup HQ merchant screen
  shows or changes automatic settlement. Do not document either as a merchant workflow. Closing a batch
  in the app is a different task; questions about automatic settlement go to support.

### Support contacts

The support email and phone number appear **only** on `taliup-pos/help/support` (and its French mirror).
Every other page links to that page instead. Merchants of an ISO or partner may have their own support
channel, and the assistant replaces Taliup's contacts with it, which only works reliably when the contacts
live in one place.

## Content boundaries

- Assume Taliup HQ onboarding (Entity, devices, plans) is already done when writing POS pages
- Public audience: ISOs/partners, CS, and merchants — avoid internal-only secrets (demo passcodes → “ask your ISO or partner”)
- Document released features only. A feature is released when it has shipped in the app or is live in
  Taliup HQ; its presence on a development or release branch is not proof. Features still waiting for
  release (appointment cancel/no-show/deposits/payment links, Packages, Memberships) get their pages with
  their release.
- Still deferred: hardware pairing expansion and per-processor settlement internals. WEB-SRM, closing a
  batch, tips, dual pricing and surcharge are documented where employees use them.
- Home tile **Calendar** maps to docs under `taliup-pos/calendar` (not a separate “Scheduling” product tab)
- Existing `taliup-pos/devices/**` pages are hidden from nav but kept for URL compatibility. Move
  instructions that are still relevant into the maintained guides; do not add new content there.

## Navigation

- Keep primary navigation organized by product tasks. Do not create navigation groups per device or
  provider (A920, Elys, Poynt, …).
- Device and provider names are fine in `applies_to`, in availability tables and in instructions where the
  hardware changes the task ("On Poynt, …").
- List every page in `docs.json` in both language trees. Under the site's indexing settings a page that is
  not in `docs.json` is hidden and left out of search.

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
- Do **not** set `description` on the `<Update>`, and do not put a release number in the page `title` —
  a release is identified by its month. Internal train numbers (`2.0.9`) mean nothing
  to a reader, and per-channel numbers belong in the availability table.
- Page frontmatter: `title` and `sidebarTitle` are both the month ("October 2026"), plus the page
  `description`, `keywords` and `applies_to` (`audience: merchant`, `product: shared` when the release covers
  both products).
- `tags` — product only: `Taliup POS`, `Taliup HQ`. These render as filters. Do **not** tag by channel:
  channels ship the same releases on their own schedules, so a channel tag would not filter anything useful.
  Where a capability depends on the payment SDK, say so in the bullet; channel versions belong in the
  availability table.

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
| PAX (Nuvei, Elavon) 2.x | 2.0.11 | Sep 9 |
| PAX (Nuvei, Elavon) 1.x | 1.0.14 | |
```

- Use exactly these channel labels — Taliup HQ maps them to channels when it syncs the knowledge base:

  | Label | Channel | Build |
  | --- | --- | --- |
  | `Poynt` | `poynt` | `:app`, `poynt` flavor |
  | `AiOne` | `aione` | `:app`, `external` flavor |
  | `Elys` | `elys` | `:app`, `elys` flavor |
  | `Castles` | `castles` | `:app`, `castles` flavor |
  | `Paynuity` | `paynuity` | `:app`, `paynuity` flavor |
  | `PAX (Nuvei, Elavon) 2.x` | `pax` | `:app-pax`, `nuvei` / `elavon` flavors |
  | `PAX (Nuvei, Elavon) 1.x` | `pax` | `:app`, `nuvei` / `elavon` flavors |
  | `Taliup HQ` | — | Taliup HQ release (not an app channel) |

- PAX ships two binaries with separate version lines, so each gets its own row.
- Version numbers come from the application module's Gradle configuration in the `taliup-register-pax`
  repo: `productFlavors` (or `defaultConfig` when a flavor sets none) in `app/build.gradle.kts`, and
  `defaultConfig` in `app-pax/build.gradle.kts` for the `:app-pax` binary.
- Build configuration alone does not prove a version shipped. List a channel only once that version has
  actually been released to it, with its release date.
- Until a release has shipped everywhere, keep a `<Note>` saying it is rolling out, and fill the table in
  as each channel goes out.
- The app shows its version at the bottom of **Settings**.

Detailed per-release guides for QA and CS stay in `internal/` with
`noindex: true` and `hidden: true`. The public entry is a short distillation of one.

## Release checklist

For every app or Taliup HQ release that changes what merchants can do:

1. Update the affected feature pages (and add pages for new tasks), with conditions at the point of use.
2. Set `since` on pages whose whole capability is new in this release; otherwise note the release beside
   the capability.
3. Add the release to the changelog page and `changelog/index`, and fill the availability table with the
   confirmed channel versions and dates.
4. Update English and fr-CA together, including `docs.json` for new pages in both trees.
5. Check the site renders (`mint dev`, `mint broken-links`).
6. From the Taliup HQ repo, validate the knowledge base sync:
   `php artisan intelligence:sync-knowledge --path=<docs checkout> --dry-run`
