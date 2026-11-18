# AI assistant docs coverage inventory

Engineering checklist for Phase 1 P2 (plan Part A). Not published (drafts/ is in .mintignore) and not part of the
assistant's knowledge base, which reads only tagged pages. Updated 2026-11-18.

- **Released?** `app main` = merged to the app's origin/main; `YYYY-MM release` = in that changelog; `HQ feature/ai-assistant` =
  checked against the integration branch (production release unconfirmed). Branch presence alone does not establish a shipment.
  `release branch only` = awaiting release confirmation.
- **Verification**: `code-checked` = written or reviewed against the code; an explicit device note identifies workflows also exercised on hardware. `not checked` = gap not researched yet.

Counts: covered 88, partial 0, missing 0, deferred-unreleased 6, total 94 (2026-11-17, after the batch A/B pages).

| Area | Workflow | Product | Released? | Doc path(s) | Status | Verification |
|---|---|---|---|---|---|---|
| Getting started | Activate a device (Device ID, PAXSTORE, Poynt) | App | app main | taliup-pos/activate-device | covered | code-checked |
| Getting started | First sign-in: terms, subscription, demo mode | App | app main | taliup-pos/first-login | covered | code-checked |
| Getting started | Sign in with PIN, switch employee, log out | App | app main | taliup-pos/sign-in-and-out | covered | code-checked |
| Getting started | Clock in and out | App | app main | taliup-pos/clock-in-out | covered | code-checked |
| Getting started | Home screen tiles and gates | App | app main | taliup-pos/home-screen | covered | code-checked |
| Getting started | Getting started guide | App | 2026-11 release | taliup-pos/settings/getting-started | covered | code-checked |
| Getting started | What's new and app version | App | app main | taliup-pos/settings, changelog/index | covered | code-checked |
| Getting started | Working offline | App | app main | taliup-pos/offline | covered | code-checked |
| Getting started | Permissions reference | App | app main | taliup-pos/permissions | covered | code-checked |
| Help | Support contacts, troubleshooting | App | n/a | taliup-pos/help/support, taliup-pos/help/troubleshooting | covered | code-checked |
| Help | AI assistant | App | ships with Phase 1 | taliup-pos/help/assistant | covered | A920Pro walkthroughs below |
| Register | Open Sale (custom amount) | App | app main | taliup-pos/register/open-sale | covered | code-checked |
| Register | Add items, scan, weighable items | App | app main | taliup-pos/register/add-items, taliup-pos/register/scale-barcodes | covered | code-checked |
| Register | Cart: items, guests, save, attach client | App | app main | taliup-pos/register/cart | covered | code-checked |
| Register | Take payment: tender keys, card keys, split, more, manual entry | App | app main | taliup-pos/register/take-payment | covered | code-checked |
| Register | Tips and tip adjust | App | app main | taliup-pos/register/tips, taliup-pos/orders/past-order-actions | covered | code-checked |
| Register | Customer receipt and receipt barcode | App | app main | taliup-pos/register/customer-receipt, taliup-pos/register/receipt-barcode | covered | code-checked |
| Register | Apply discounts | App | app main | taliup-pos/register/apply-discounts | covered | code-checked |
| Register | Order actions menu (bills, kitchen, save, drawer, scanner) | App | app main | taliup-pos/register/options | covered | code-checked |
| Register | Pre-authorization, capture, void auth | App | app main | taliup-pos/register/pre-auth | covered | code-checked |
| Register | Non-referenced refund (Create Refund mode) | App | app main | taliup-pos/register/non-referenced-refund | covered | code-checked |
| Register | Cash payouts | App | app main | taliup-pos/register/cash-payouts | covered | code-checked |
| Register | Gift cards: sell, reload, balance, pay | App | 2026-11 release | taliup-pos/register/gift-cards | covered | code-checked |
| Register | Loyalty | App | 2026-11 release | taliup-pos/register/loyalty | covered | code-checked |
| Register | Helped by | App | 2026-11 release | taliup-pos/register/helped-by | covered | code-checked |
| Register | Print individual bills, move/split items between guests | App | app main | taliup-pos/register/guests-and-bills | covered | code-checked |
| Register | Open Sale Only mode | App | app main | taliup-pos/register/open-sale-only | covered | code-checked |
| Register | Pay by QR | App | release branch only | - | deferred-unreleased | code-checked |
| Register | Sell packages, use package/membership visits | App | release branch only | - | deferred-unreleased | code-checked |
| Register | Appointment checkout with online deposit | App | release branch only | - | deferred-unreleased | code-checked |
| Tables | Floor overview, table orders, move/split/merge, floor plan editing | App | app main | taliup-pos/tables | covered | code-checked |
| Menu / Catalog | Products, services, attributes, categories, featured, taxes, discounts, fees, inventory | App | app main | taliup-pos/catalog/* | covered | code-checked |
| Orders | Find, reopen or cancel an order, act on past orders, sync sales to QuickBooks | App | app main | taliup-pos/orders/* | covered | code-checked |
| Transactions | List, details, search and filters | App | app main | taliup-pos/transactions, taliup-pos/transactions/details, taliup-pos/transactions/search-and-filters | covered | code-checked |
| Transactions | Refund (Refund / Return), void, reprint | App | app main | taliup-pos/transactions/refund, taliup-pos/transactions/void, taliup-pos/transactions/reprint | covered | code-checked |
| Transactions | Close batch | App | app main | taliup-pos/transactions/close-batch | covered | code-checked |
| Transactions | End of Day report | App | 2026-09 release | taliup-pos/transactions/end-of-day | covered | code-checked |
| Clients | List, create, edit, delete, attach to a sale | App | app main | taliup-pos/clients/* | covered | code-checked |
| Clients | Client record details (history, notes, favorites) | App | app main | taliup-pos/clients/client-record | covered | code-checked |
| Link to Pay | Create, send and manage payment links and invoices | App | app main | taliup-pos/link-to-pay/* | covered | code-checked |
| Calendar | Views, create, edit, delete appointments | App | app main | taliup-pos/calendar/* | covered | code-checked |
| Calendar | Appointment cancel, no-show, deposits, payment links | App | release branch only | - | deferred-unreleased | code-checked |
| Analytics | Analytics overview and share | App | app main | taliup-pos/analytics | covered | code-checked |
| Packages / Memberships | Packages and Memberships sections | App | release branch only | - | deferred-unreleased | code-checked |
| Settings | General, device, printers, employees, Tools tiles | App | app main | taliup-pos/settings/* | covered | code-checked |
| Settings | Customer-facing display setup | App | app main | taliup-pos/register/customer-display | covered | code-checked |
| WEB-SRM | Enrolment, billing, cancel/correct, offline, employees, user report, settings, switch to live | App | 2026-08 release | taliup-pos/web-srm/* | covered | code-checked |
| HQ home | Dashboard | HQ | HQ feature/ai-assistant | taliup-hq/merchant/dashboard | covered | EN and fr-CA local dashboard with and without analytics access |
| HQ sales | Orders | HQ | HQ feature/ai-assistant | taliup-hq/merchant/orders | covered | code-checked |
| HQ sales | Transactions (orders, open sales, online, payouts) | HQ | HQ feature/ai-assistant | taliup-hq/merchant/transactions | covered | code-checked |
| HQ sales | Virtual terminal: take, look up, refund payments | HQ | HQ feature/ai-assistant | taliup-hq/merchant/virtual-terminal | covered | code-checked |
| HQ sales | Reports | HQ | HQ feature/ai-assistant | taliup-hq/merchant/reports | covered | code-checked |
| HQ sales | End of Day | HQ | 2026-09 release | taliup-hq/features/end-of-day | covered | code-checked |
| HQ sales | Settlements list (PAX Nuvei) | HQ | HQ feature/ai-assistant | taliup-hq/merchant/settlements | covered | code-checked |
| HQ catalog | Catalogs and categories | HQ | HQ feature/ai-assistant | taliup-hq/merchant/catalogs | covered | code-checked, EN and fr-CA local restaurant menu and category controls |
| HQ catalog | Products | HQ | HQ feature/ai-assistant | taliup-hq/merchant/catalogs/products | covered | code-checked, EN and fr-CA local restaurant item actions |
| HQ catalog | Taxes, discounts, fees | HQ | HQ feature/ai-assistant | taliup-hq/merchant/catalogs/taxes-discounts-fees | covered | code-checked |
| HQ catalog | Bulk import and export | HQ | HQ feature/ai-assistant | taliup-hq/merchant/catalogs/bulk-import | covered | code-checked, EN and fr-CA local import, export and template controls |
| HQ catalog | Scale items | HQ | 2026-09 release | taliup-hq/features/scale-items | covered | code-checked |
| HQ catalog | Services (bookable) | HQ | HQ feature/ai-assistant | taliup-hq/merchant/catalogs/services | covered | code-checked |
| HQ catalog | Attributes / modifiers | HQ | HQ feature/ai-assistant | taliup-hq/merchant/catalogs/attributes | covered | code-checked |
| HQ catalog | Product tags | HQ | HQ feature/ai-assistant | taliup-hq/merchant/catalogs/product-tags | covered | code-checked |
| HQ inventory | Stock, reorder points, bulk update | HQ | HQ feature/ai-assistant | taliup-hq/merchant/inventory | covered | code-checked |
| HQ inventory | Raw materials | HQ | HQ feature/ai-assistant | taliup-hq/merchant/raw-materials | covered | code-checked |
| HQ inventory | Units | HQ | HQ feature/ai-assistant | taliup-hq/merchant/units | covered | code-checked |
| HQ online store | Today's orders, website, promo codes, ads, QR codes, store tags | HQ | HQ feature/ai-assistant | taliup-hq/merchant/online-store/{orders,website,promotions} | covered | code-checked |
| HQ online store | Online ordering, delivery, shipping, Uber Direct settings | HQ | HQ feature/ai-assistant | taliup-hq/merchant/online-store/settings | covered | code-checked |
| HQ tables | Table management in HQ | HQ | HQ feature/ai-assistant | taliup-hq/merchant/tables | covered | code-checked |
| HQ get paid | Invoices | HQ | HQ feature/ai-assistant | taliup-hq/features/invoicing | covered | code-checked, EN and fr-CA local creation and sending controls |
| HQ get paid | Link to Pay in HQ | HQ | HQ feature/ai-assistant | taliup-hq/merchant/link-to-pay | covered | code-checked |
| HQ get paid | Hosted payments | HQ | HQ feature/ai-assistant | taliup-hq/features/hosted-payments | covered | code-checked |
| HQ get paid | Recurring payments | HQ | 2026-09 release | taliup-hq/features/recurring-payments | covered | code-checked |
| HQ customers | Clients | HQ | HQ feature/ai-assistant | taliup-hq/features/clients | covered | code-checked, EN and fr-CA local list and creation form |
| HQ customers | Loyalty | HQ | 2026-11 release | taliup-hq/features/loyalty | covered | code-checked |
| HQ customers | Gift cards | HQ | 2026-11 release | taliup-hq/features/gift-cards | covered | code-checked |
| HQ customers | Memberships, Packages | HQ | not on HQ master | - | deferred-unreleased | code-checked |
| HQ marketing | Campaigns, reviews, referrals | HQ | HQ feature/ai-assistant | taliup-hq/merchant/marketing/{campaigns,reviews,referrals} | covered | code-checked |
| HQ appointments | Calendar in HQ | HQ | HQ feature/ai-assistant (mixed with unreleased cancel/no-show/deposit UI) | taliup-hq/merchant/appointments/calendar (released parts only) | covered | code-checked |
| HQ appointments | Waitlist, forms, inbox, online booking settings | HQ | HQ feature/ai-assistant | taliup-hq/merchant/appointments/{waitlist,forms,inbox}, taliup-hq/merchant/settings/calendar | covered | code-checked |
| HQ team | Employees and POS roles, linked HQ accounts | HQ | HQ feature/ai-assistant | taliup-hq/merchant/employees | covered | code-checked, employee list and add form checked in local HQ |
| HQ team | Timesheets | HQ | HQ feature/ai-assistant | taliup-hq/merchant/timesheets | covered | code-checked |
| HQ team | Employee scheduling | HQ | HQ feature/ai-assistant | taliup-hq/merchant/schedule | covered | code-checked |
| HQ team | Pay runs and commissions | HQ | HQ feature/ai-assistant | taliup-hq/merchant/pay-runs | covered | code-checked |
| HQ team | HQ web users: invite, roles | HQ | HQ feature/ai-assistant | taliup-hq/merchant/web-users | covered | code-checked |
| HQ integrations | QuickBooks sync and settings | HQ | HQ feature/ai-assistant | taliup-hq/merchant/quickbooks | covered | code-checked |
| HQ billing | Add-on marketplace | HQ | HQ feature/ai-assistant | taliup-hq/merchant/marketplace | covered | eligible and ineligible plans checked in local HQ |
| HQ billing | Subscription settings | HQ | HQ feature/ai-assistant | taliup-hq/merchant/settings/subscription | covered | code-checked |
| HQ settings | Business details, hours of operation, receipts | HQ | HQ feature/ai-assistant | taliup-hq/merchant/settings/business | covered | code-checked |
| HQ settings | Payments (tips, tip adjustment, open-sale taxes, dual pricing, surcharge) | HQ | HQ feature/ai-assistant | taliup-hq/merchant/settings/payments | covered | code-checked, tip controls checked in local HQ |
| HQ settings | Brand hub | HQ | HQ feature/ai-assistant | taliup-hq/merchant/brand-hub | covered | code-checked |
| HQ settings | Devices (terminal settings) | HQ | HQ feature/ai-assistant | taliup-hq/merchant/settings/devices | covered | code-checked |
| HQ settings | Calendar, invoice and recurring payment settings | HQ | HQ feature/ai-assistant | taliup-hq/merchant/settings/calendar, taliup-hq/features/invoicing, taliup-hq/features/recurring-payments | covered | code-checked |
| HQ settings | WEB-SRM settings in HQ | HQ | 2026-08 release | taliup-hq/merchant/settings/web-srm | covered | code-checked |
| HQ settings | Your profile (user settings) | HQ | HQ feature/ai-assistant | taliup-hq/merchant/profile | covered | code-checked |

## A920Pro walkthroughs

- Opened the assistant from Home in English, Canadian French and Spanish. Sent the suggested refund question in each language. The French response cited the French article and the Spanish response cited the English fallback. The local provider fixture always answers in English. Answer-language quality still needs a live model evaluation.
- Opened the assistant from the Register's order actions and returned to the uncharged $1.00 amount. Opened it from Open Sale Only, typed with the keyboard visible, sent a hardware digit to the draft and returned to the sale.
- Started a new conversation and verified the offline notice on disconnecting Wi-Fi.
- On the connected A920Pro, retried a failed refund question after restoring connectivity to local HQ. The same question received a sourced answer. Repeated the Home-to-answer flow with the updated Elavon debug build.

## Local verification on 2026-11-17

- All seven `:app` and both `:app-pax` debug variants compiled. The 26 conversation, repository and network tests passed. The updated French assistant screen fit a 1600 × 1000 landscape emulator, including all four suggestions, the privacy notice and the composer.
- The local HQ endpoint returned sourced answers for Poynt, Elys, AiOne, Castles and Paynuity request fixtures. Each run recorded the expected channel and payment SDK. Physical walkthroughs for those five families are still open.
- Mintlify rendered the English and French assistant guides and reported zero broken links across the site. The knowledge sync validated 149 English pages and 149 French mirrors, including 135 merchant pages in each language. A transaction-scoped run of `fr-fallback-overview` cited the French overview with its mirror present and the English overview after temporarily removing the mirror. The transaction restored the original corpus.
- HQ exercised 73 synthetic scenarios across 81 turns with a local model fixture. The single refund smoke checked that the evaluation judge received the retrieved article, its applicability, current employee context and resolved support channel. Local checks also exercised access changes, ISO contacts, card-number redaction, daily pruning, the 100,000-token price boundary and the 50-second request deadline.

## Verification on 2026-11-18

- All nine Android debug variants compiled. All 27 assistant and network tests passed, including a pasted emoji at the 2,000-character limit. The 14 payment-policy tests passed. On the A920Pro, a question sent from Home received a sourced answer through local HQ. Starting a new conversation cleared the exchange.
- The local merchant portal displayed the documented **Payments** entry under **Settings**, the **Ask for tips** switch and, after enabling it in the form, **Tip type** and **Tip choices**. The **Employees** page displayed **Add employee** and **Roles and permissions**. The add-employee form opened. No changes to payment settings were saved.
- The test merchant's plan hid **Add-ons** and HQ returned 403 for the page. With an eligible plan in a rolled-back database transaction, HQ returned the marketplace page and its rendered UI showed **Add-ons** and **Your plan**.
- Mintlify rendered the revised English and French payment and support guides. The local HQ sync validated and activated 149 articles per language. Retrieval returned the configured ISO contact once, as a usable URL, in English, French and the English fallback for Spanish. HQ returned localized terminal-validation and service-error messages in French and Spanish.
- The updated synthetic suite exercised 73 cases and 82 turns on KB revision `85885421960cd9305d7c9320410f57b8d200655d2890339af6446d06335e2c31`. The local provider's canned replies passed the deterministic checks in 14 of 31 security and support cases and 5 of 42 quality cases. For example, the provider did not retrieve the payment guide for the new credit-only follow-up. No judge was configured. The pilot gate remains open.

## Phase 1 review on 2026-11-18

- All nine Android debug variants compiled and all 28 assistant and network tests passed. On an A920Pro, the local assistant returned a sourced refund guide. Revoking the test employee’s token produced the online sign-in notice. It stayed visible after Wi-Fi was disconnected, and the cashier could return to Register and enter an amount.
- On the same terminal, signing in offline as the same employee through **Switch Employee** cleared the previous exchange and showed the offline notice. After screen-off cleared the cashier session, offline sign-in showed the online sign-in notice. Both checks used a fresh encrypted credential cache. The terminal’s original cache failed to open before any assistant code ran and was restored after testing.
- A local database write failure passed through the assistant HTTP route with Flare and Nightwatch enabled and request payload capture on. The serialized reports, application log events and HTTP response contained none of the synthetic question, bearer token or cookie values. An unrelated route retained its usual exception message. Local checks also covered tenant and employee isolation, invalid provider settings, the spending threshold and the 90-day history and pruning rules.
- Mintlify rendered all 34 revised English and French guide pages, including the POS QuickBooks instructions and WEB-SRM prerequisites. The site passed its broken-link check. HQ activated 149 articles per language, including 135 merchant articles per language. Empty and invalid replacements preserved the active index.
- A Register regression test reproduced an unrelated merchant update re-enabling sends after HQ withdrew assistant access. With the fix, the updated test, all 28 assistant and network tests, and all nine debug builds passed.
- The local HQ route replayed the ten most recent completed turns in order and loaded six French merchant guides over two tool rounds. The final SDK request contained all six article bodies, kept the same system prompt and disabled further tools. Its serialized body was 142,623 bytes. Bedrock usage is still needed to measure billed tokens.
- The 73-case eval exercised 82 turns against KB revision `1f8767a87d6a25d2e1844cafabb273ab4b5593344c01cde453fdc8755c97063d`. The canned local replies passed 13 of 31 security and support cases and 5 of 42 other cases. The stored-question check confirmed that HQ masked every card digit beside an order number. The tips action case failed its new guidance and article checks. The Canadian profile and independent judge are still required for the pilot decision.
- Checked the English and French restaurant catalog, category, item and import controls in the local merchant portal, including the linked four-sheet workbook and individual item deletion menu. The local portal also confirmed the client and invoice creation controls, invoice sending options, and dashboard sections available with and without analytics access. The full-access dashboard check used a temporary permission cache for the QA user.
- Mintlify rendered all twelve revised pages and reported zero broken links. The HQ article tool returned the corrected six topics in English and French, and used English for Spanish requests. All nine Android debug variants compiled, and the 28 assistant and network tests and 69 getting-started tests passed.
- The latest local evaluation ran 74 cases and 83 turns against KB revision `62c5027a3519ef38633d1dd9283996e5a6fa599a63aa35af5218f67af45f4669`. The synthetic replies passed deterministic checks for 13 of 31 security and support cases and 5 of 43 quality cases. In the new restaurant import case, the fixture did not load the import article or explain the required permission. The command exited with status 1 and reported both gates as ungraded because the judge was unconfigured. HQ saved the results in `storage/app/intelligence/evals/20261118-174731-help-claude-haiku-5-5-low.jsonl`.

## Next steps

All released workflows in this list now have a page. Still open:
1. Confirm the remaining UI workflows on the corresponding devices and live HQ screens.
2. Deferred-unreleased rows (appointment cancel/no-show/deposits/payment links, Packages, Memberships, Pay by QR) get pages
   with their release; the HQ calendar page must then gain the payment parts it leaves out today.
3. HQ pages describe the redesigned HQ on feature/ai-assistant and must go live with that HQ release.

## Storage and privacy before launch

HQ stores employee conversations in its existing database. The `intelligence_conversations` table records ownership, and `intelligence_runs` holds each question, answer and its limited context. After 90 days a turn drops out of model history. The next successful daily `intelligence:prune` scrubs its content and employee and terminal references. Usage and cost metrics remain.

The default HQ log stack sends diagnostics to daily Laravel files under `storage/logs`, the host's syslog and Flare. The daily file channel keeps 14 days. Assistant exception handling and telemetry filters keep conversation text out of these destinations and Nightwatch. Verify the effective destinations, forwarding, retention and filters in the deployed environment.

Before publishing the final employee notice, confirm the production database and replica regions, where backups and copies are held, and when they expire. The 90-day live cleanup does not remove a message from an earlier backup. The production infrastructure settings establish the maximum additional time a backed-up message can remain.

On 2026-11-18 the configured Haiku 5.5 input, output, five-minute cache write and cache read prices matched the published short- and long-context geographic inference rates for Canada (Central) and Canada West (Calgary). [AWS Bedrock pricing](https://aws.amazon.com/bedrock/pricing/)

Before the pilot, verify the complete tool loop against the Canadian inference profile, destination IAM access, effective account pricing, regional provider-retention settings and invocation logging in the deployed account. Verify that the production proxy, web server and PHP process allow the full 50-second request.

Run the full 74-case evaluation against the approved profile with a separately configured judge. The pilot requires all 31 security and support cases and at least 39 of the 43 other cases to pass. Record the actual cost, per-turn p95 latency, cold and warm cache usage, and largest prompt. Include a measurement with six loaded articles and ten completed turns. The local fixture supplies its own answers, timings and token counts and cannot establish these results.
