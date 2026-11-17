# AI assistant docs coverage inventory

Engineering checklist for Phase 1 P2 (plan Part A). Not published (drafts/ is in .mintignore) and not part of the
assistant's knowledge base, which reads only tagged pages. Updated 2026-11-17.

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
| Orders | Find, reopen, cancel open orders; past order actions | App | app main | taliup-pos/orders/* | covered | code-checked |
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
| HQ home | Dashboard | HQ | HQ feature/ai-assistant | taliup-hq/merchant/dashboard | covered | code-checked |
| HQ sales | Orders | HQ | HQ feature/ai-assistant | taliup-hq/merchant/orders | covered | code-checked |
| HQ sales | Transactions (orders, open sales, online, payouts) | HQ | HQ feature/ai-assistant | taliup-hq/merchant/transactions | covered | code-checked |
| HQ sales | Virtual terminal: take, look up, refund payments | HQ | HQ feature/ai-assistant | taliup-hq/merchant/virtual-terminal | covered | code-checked |
| HQ sales | Reports | HQ | HQ feature/ai-assistant | taliup-hq/merchant/reports | covered | code-checked |
| HQ sales | End of Day | HQ | 2026-09 release | taliup-hq/features/end-of-day | covered | code-checked |
| HQ sales | Settlements list (PAX Nuvei) | HQ | HQ feature/ai-assistant | taliup-hq/merchant/settlements | covered | code-checked |
| HQ catalog | Catalogs and categories | HQ | HQ feature/ai-assistant | taliup-hq/merchant/catalogs | covered | code-checked |
| HQ catalog | Products | HQ | HQ feature/ai-assistant | taliup-hq/merchant/catalogs/products | covered | code-checked |
| HQ catalog | Taxes, discounts, fees | HQ | HQ feature/ai-assistant | taliup-hq/merchant/catalogs/taxes-discounts-fees | covered | code-checked |
| HQ catalog | Bulk import and export | HQ | HQ feature/ai-assistant | taliup-hq/merchant/catalogs/bulk-import | covered | code-checked |
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
| HQ get paid | Invoices | HQ | HQ feature/ai-assistant | taliup-hq/features/invoicing | covered | code-checked |
| HQ get paid | Link to Pay in HQ | HQ | HQ feature/ai-assistant | taliup-hq/merchant/link-to-pay | covered | code-checked |
| HQ get paid | Hosted payments | HQ | HQ feature/ai-assistant | taliup-hq/features/hosted-payments | covered | code-checked |
| HQ get paid | Recurring payments | HQ | 2026-09 release | taliup-hq/features/recurring-payments | covered | code-checked |
| HQ customers | Clients | HQ | HQ feature/ai-assistant | taliup-hq/features/clients | covered | code-checked |
| HQ customers | Loyalty | HQ | 2026-11 release | taliup-hq/features/loyalty | covered | code-checked |
| HQ customers | Gift cards | HQ | 2026-11 release | taliup-hq/features/gift-cards | covered | code-checked |
| HQ customers | Memberships, Packages | HQ | not on HQ master | - | deferred-unreleased | code-checked |
| HQ marketing | Campaigns, reviews, referrals | HQ | HQ feature/ai-assistant | taliup-hq/merchant/marketing/{campaigns,reviews,referrals} | covered | code-checked |
| HQ appointments | Calendar in HQ | HQ | HQ feature/ai-assistant (mixed with unreleased cancel/no-show/deposit UI) | taliup-hq/merchant/appointments/calendar (released parts only) | covered | code-checked |
| HQ appointments | Waitlist, forms, inbox, online booking settings | HQ | HQ feature/ai-assistant | taliup-hq/merchant/appointments/{waitlist,forms,inbox}, taliup-hq/merchant/settings/calendar | covered | code-checked |
| HQ team | Employees and POS roles, linked HQ accounts | HQ | HQ feature/ai-assistant | taliup-hq/merchant/employees | covered | code-checked |
| HQ team | Timesheets | HQ | HQ feature/ai-assistant | taliup-hq/merchant/timesheets | covered | code-checked |
| HQ team | Employee scheduling | HQ | HQ feature/ai-assistant | taliup-hq/merchant/schedule | covered | code-checked |
| HQ team | Pay runs and commissions | HQ | HQ feature/ai-assistant | taliup-hq/merchant/pay-runs | covered | code-checked |
| HQ team | HQ web users: invite, roles | HQ | HQ feature/ai-assistant | taliup-hq/merchant/web-users | covered | code-checked |
| HQ integrations | QuickBooks sync and settings | HQ | HQ feature/ai-assistant | taliup-hq/merchant/quickbooks | covered | code-checked |
| HQ billing | Add-on marketplace | HQ | HQ feature/ai-assistant | taliup-hq/merchant/marketplace | covered | code-checked |
| HQ billing | Subscription settings | HQ | HQ feature/ai-assistant | taliup-hq/merchant/settings/subscription | covered | code-checked |
| HQ settings | Business details, hours of operation, receipts | HQ | HQ feature/ai-assistant | taliup-hq/merchant/settings/business | covered | code-checked |
| HQ settings | Payments (tips, tip adjustment, open-sale taxes, dual pricing, surcharge) | HQ | HQ feature/ai-assistant | taliup-hq/merchant/settings/payments | covered | code-checked |
| HQ settings | Brand hub | HQ | HQ feature/ai-assistant | taliup-hq/merchant/brand-hub | covered | code-checked |
| HQ settings | Devices (terminal settings) | HQ | HQ feature/ai-assistant | taliup-hq/merchant/settings/devices | covered | code-checked |
| HQ settings | Calendar, invoice and recurring payment settings | HQ | HQ feature/ai-assistant | taliup-hq/merchant/settings/calendar, taliup-hq/features/invoicing, taliup-hq/features/recurring-payments | covered | code-checked |
| HQ settings | WEB-SRM settings in HQ | HQ | 2026-08 release | taliup-hq/merchant/settings/web-srm | covered | code-checked |
| HQ settings | Your profile (user settings) | HQ | HQ feature/ai-assistant | taliup-hq/merchant/profile | covered | code-checked |

## A920Pro walkthroughs

- Opened the assistant from Home in English, Canadian French and Spanish. Sent the suggested refund question in each language. The French response cited the French article and the Spanish response cited the English fallback. The local provider fixture always answers in English. Answer-language quality still needs a live model evaluation.
- Opened the assistant from the Register's order actions and returned to the uncharged $1.00 amount. Opened it from Open Sale Only, typed with the keyboard visible, sent a hardware digit to the draft and returned to the sale.
- Started a new conversation and verified the offline notice on disconnecting Wi-Fi.

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

The configured Canada Bedrock profile handles inference. Before the pilot, verify the account's model access, regional provider-retention settings and invocation logging, then run the full help evaluation against that profile.
