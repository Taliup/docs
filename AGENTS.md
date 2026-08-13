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
