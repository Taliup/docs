---
title: "Release 2.0.9 — internal feature guide"
sidebarTitle: "2.0.9 internal"
description: "Internal QA and CS guide for Taliup POS and Taliup HQ 2.0.9."
noindex: true
hidden: true
---

# Release 2.0.9 — internal feature guide

For CS, ISOs, and QA. Not public merchant docs.

**Compared to** the last MEV-unified snapshot (`852f88fc5`, version bump Aug 24) **plus** the landing-screen setting that was already done but not in the last ship.

POS `feature/pos_email_receipts` and the follow-up **Scope receipts and track guest payments** commit (`3a83ceeeb`) are on `release/2.0.9`. HQ already has the matching send-receipt work, including guest-tender linking for emailed Guest Fully Paid receipts.

---

## What to walk through

| Area | App | Why it is in 2.0.9 |
|---|---|---|
| Default screen after login | POS | Missed last ship; ships now |
| Customer receipt chooser | POS + HQ | New |
| Scale / weighable items | POS + HQ | New |
| End of Day devices and users | POS + HQ | New / expanded |
| Recurring Payments | HQ | New |
| Table split and guest payments | POS + HQ | Receipt scoping + guest tender linking |
| Demo mode $1 cap | POS | New limit |
| View all terminal transactions | HQ permission + POS list | New permission |
| Orders list age | POS | Last 60 days only |

---

## Taliup POS

### 1. Default screen after login

After a staff member enters their passcode, the terminal can open **Home** or **Register**.

**Set it up**

1. Home → **Settings** → **General**.
2. Find **Default Screen After Login**.
3. Tap **Home** or **Register**.

This is per terminal. It is hidden on Open Sale–only merchants (they always land in Register).

WEB-SRM devices that still need enrolment still go through **Enrol this device** first. After that, the setting applies.

**Try it**

1. Set the destination to **Home**. Log out. Log in. You should see Home tiles.
2. Set it to **Register**. Log out. Log in. You should land in Register.
3. From Register, tap Back. You should return to Home (not get stuck reopening Register).

This is different from **Default Register View** (Open Sale vs Menu/Catalog), which only applies after Register is already open.

### 2. Customer receipt after payment

After a sale, **Print Customer Copy Receipt?** is replaced by **Choose customer receipt**.

| Choice | What happens |
|---|---|
| **No Receipt** | No customer copy |
| **Paper** | Prints the customer copy |
| **Email** | Sends the receipt. Client with email: sends to that address. Client with no email: Email is hidden. No client: type an address |

The merchant copy still prints unless **Skip Merchant Receipt Copy** is on.

**Auto-Print Customer Receipt** (Settings → **General**) prints the customer copy and skips this prompt.

On a customer-facing display, the customer picks. Staff see **Customer is choosing a receipt…** and can **Take over** or tap **No Receipt**.

WEB-SRM still asks **Does the customer want a paper receipt?**

Reprint later from Transaction Details is paper only. Email is only at sale time.

**When Email is hidden**

| After this payment | Customer prompt | Email |
|---|---|---|
| Open Sale / order / table **Pay Full** (no guest pays) | **Choose customer receipt** | Shown |
| Guest **Pay Full** (table can still be open) | **Choose customer receipt** | Shown |
| Mid split (balance still due) | **Paper** / **No Receipt** only | Hidden |
| Last **order** split (no guest pays) | Tender: Paper / No → then **Choose full order customer receipt** | On the full-order prompt only |
| Last **guest** split | Tender: Paper / No → then **Guest Fully Paid** | On Guest Fully Paid only |
| Rest of table after a guest | **Choose customer receipt** | Shown |

**Choose full order customer receipt** is only for a table or saved order that was **amount-split with no guest payments**. It does not appear after any guest pay, or after paying the rest of the table.

**Skip Fully Paid Receipt Prompts** skips **Guest Fully Paid**. It does not skip **Choose customer receipt** or **Choose full order customer receipt**. **Auto-Print Customer Receipt** still prints the customer copy and skips those choosers.

### 3. Scale barcodes and weighable items

Cashiers can scan a counter-scale sticker, or type a weight, instead of adding quantity 1.

**HQ setup (once per product)**

1. Open the product in Taliup HQ (or POS **Menu / Catalog → Inventory**).
2. Set **SKU** to the exact 5-digit PLU on the scale. No extra characters.
3. Put the product on the catalog this terminal uses.
4. For **weight** stickers: turn **Weighable** on and pick a unit of **kg**, **g**, **lb**, or **oz**.
5. For **price** stickers: leave Weighable off. The printed dollar amount wins.

Custom price and Weighable cannot be on together.

**Scan in Register**

1. Home → **Register** → **Menu** or **Catalog** (not Open Sale).
2. Scan the sticker with the hardware scanner, or **Options → Open Scanner**.
3. If the item has modifiers, finish those, then **Apply**.
4. Weight lines show the decoded amount with the unit (for example `0.450 kg`). Then **Pay**.

**Type weight instead of scanning**

1. Settings → **General** → **Weighable items**.
2. Choose **Enter weight** (default is **Scale labels**).
3. In Register, tap the weighable item, type the weight, confirm.
4. This setting stays on this terminal only.

In **Scale labels** mode, tapping a weighable item does **not** add 1. Scan or switch the setting.

**Receipts:** kitchen and customer copies should show the weighable quantity and unit, not a fake “1”.

### 4. End of Day — devices and users

Home → **Transactions** → **End Of Day**.

Needs the **End of Day Report** feature on the plan, and manage-transactions permission.

This does **not** settle or close the card batch. Documentation only.

**Generate**

1. Open **Report Setup**.
2. **Devices** and **Users** default to **All devices** and **All users**.
3. Tap **Change** to pick specific terminals or staff. Keep at least one of each.
4. Set **Business Date** (today, or any day in the last 3 months).
5. Tap **Generate & Print**, review **Review Merchant Report**, then **Generate**.

**Reprint**

Open **EOD History**. Each row shows date, total, devices, and users. Tap **Reprint**.

New reports reprint the snapshot that was saved. Very old reports may recalculate.

### 5. Demo mode $1 cap

In **Demo Mode**, a sale (including tip adjust and Link to Pay) cannot go over **$1.00**.

You should see **Demo Mode payments cannot exceed $1.00.** if someone tries a larger amount.

### 6. Transactions and orders

- **Transactions** on a device can show other terminals’ payments when the signed-in role has **View All Terminal Transactions** (see HQ below). Without it, staff only see this terminal.
- **Orders** on the POS list only the last **60 days**. Older tickets stay in HQ.

### 7. Table / split / guest payments (receipts)

No new Home tiles. What changed is **what prints, what Emails, and which prompt appears** after guest and rest-of-table pays.

Use a **new table** for each case. Do not reuse mid-splits created before this build.

#### Prompts

| Flow | Prompts | Email |
|---|---|---|
| Table **Pay Full**, no guest has paid | Merchant → **Choose customer receipt** | On |
| Table **amount-split**, no guest has paid | Each tender: merchant → Paper / No. Last tender then **Choose full order customer receipt** | On the full-order prompt only |
| Guest **Pay Full** | Merchant → **Choose customer receipt**. **No** Guest Fully Paid. **No** full-order chooser | On, even if the table is still open |
| Guest **splits** | Mid and last tender: merchant → Paper / No (payment slip only). Last tender then **Guest Fully Paid** (Paper / Email / No) | On Guest Fully Paid only |
| Rest of table after a guest | Merchant → **Choose customer receipt**. **No** full-order chooser. **No** Guest Fully Paid | On |

**Guest Fully Paid** exists only because guest split tenders are **transaction-only**. That chooser is the itemized guest bill.

#### What should print

| Receipt | Items | Totals |
|---|---|---|
| Guest **Pay Full** | That guest only | Grand total = that guest. One tender |
| Guest **split** mid / last tender | None (payment slip) | That tender only, including tip / surcharge on the tender block |
| **Guest Fully Paid** | That guest’s items | All of that guest’s tenders. Total = sum of those pays (not the last pay only) |
| Rest of table **Pay Full** | Unpaid guests / items only | Grand total = remaining bill. Tip is on the remaining amount, not the original table |
| Rest of table **split** | Unpaid guests / items only (not already-paid guests) | Grand total stays the **remaining bill**. Total paid / balance due move with each tender. Tender block = that pay |
| Table amount-split, no guests | Full table items | Mid: this tender + balance due. Last tender: this pay. Full-order copy: all tenders |

**Rest-of-table split example** (Guest 1 already paid $18.40; G2+G3 remaining $28.74; cash $10 then card $18.74)

| Slip | Grand total | Total paid | Balance due | Tender |
|---|---|---|---|---|
| $10 cash | $28.74 | $10.00 | $18.74 | $10 cash |
| $18.74 card | $28.74 | $28.74 | $0.00 | $18.74 card |

Guest 1’s items must not appear on those two slips.

#### Re-pay after adding items

If a guest already paid, then you add a new item to that guest and pay again:

- **Pay Full** on the new cycle: itemize **this cycle’s items only**. One customer prompt with Email. No Guest Fully Paid.
- **Split** the new cycle: payment slips, then Guest Fully Paid for **this cycle** (items + this cycle’s tenders).

#### Other table checks (still valid)

- Split a table check **N ways** or **Custom** with **no** guest pays. Remaining balance and table stay correct. Last split still gets **Choose full order customer receipt**.
- Decline or cancel a card on a guest. The table does not release. You can retry.
- Partial approval (processor takes less than asked). The table stays open. You are not shown a fully-paid prompt.
- Item-level discounts / adjustments on a split table. Totals should match across Register, the customer display, and the receipt.
- From Register, go Home. Register should not pop back open by itself.

---

## Taliup HQ

### 1. Scale items (pairs with POS)

Same product setup as POS Inventory.

1. Catalog / Products → open the item.
2. Set **SKU** to the scale PLU.
3. On **Sold by**, turn **Weighable** on and pick **kg / g / lb / oz**.
4. You can also set this when creating from a catalog/category, or on a products bulk-upload sheet.

If no weight unit exists, add one under Inventory → Units first.

### 2. End of Day filters

Merchant sidebar → **End of Day**. Needs the feature on the plan and **View Reports**.

1. Set **Business Date**.
2. Optionally set **Location**.
3. **Filter Terminals** and **Filter Employees** — multi-select. Default is all.
4. **Apply Filters** to refresh the on-screen summary.
5. **Generate Document** for a PDF (view / download / print).

Same rule as POS: this does not settle batches.

### 3. Recurring Payments (new)

Merchant sidebar → **Recurring Payments**.

Needs an **Elavon Converge** gateway on at least one location. Other processors stay available for everything else.

**Settings** (Recurring Payments → **Settings**)

- Allow the customer to cancel from their manage page.
- How many days the checkout email link stays valid (1–90).

**Create an agreement**

1. **New agreement**.
2. Pick or add a **Client** (email required for the link).
3. Pick a **Location** if there is more than one.
4. Add plan items (catalog products/services, or a custom item). Choose modifiers if asked.
5. Set **Frequency**: Daily, Weekly, Biweekly, Monthly, or Annually.
6. Optional: **Offer a free trial** (customer saves a card now, first charge after the trial).
7. Optional: **End date**. Blank means bill until cancelled.
8. **Create agreement**. The customer gets a hosted checkout email.

**After checkout**

- First payment (or card save on a trial) starts the schedule.
- HQ list tabs: **All**, **Needs attention**, **Active**, **Pending**, **Closed**.
- Open an agreement to pause, resume, cancel, change amount/frequency/next date, charge a missed payment, or resend the link.
- Customer manage page: update card; cancel only if you allowed it.

Declined cycles stay on the schedule and retry next time. Merchant and customer get a decline email.

### 4. View All Terminal Transactions

App-user permission: **View All Terminal Transactions**.

- Description: view transactions from every terminal, not only the one you are signed in on.
- Owners and Managers should already have it after this release’s backfill.
- For other roles: Taliup HQ → user / role permissions → enable it if they should see the full store on POS **Transactions**.

### 5. Register email receipts

This is the HQ side of the POS customer receipt chooser. No new HQ screen to click through. When POS sends **Email**, the customer gets the receipt at that address. Dual pricing shows as **Card Price Adjustment**. A guest email may create and attach a client.

For **Guest Fully Paid** email after guest splits, HQ must list **every** payment that guest made and total them. A mid guest split of $10 plus a last pay of $11.28 should email **$21.28** and both tenders — not only the last $11.28. Modifier lines use modifier price × item quantity.

### 6. Smaller HQ fixes

| What | What to check |
|---|---|
| Poynt refunds | A Poynt refund in HQ / POS should store and show the **dollar** amount, not 100× too large. |
| Feature not on the plan | Locked screens show a lock icon, a short message, and a plan pill instead of a blank or broken page. |
| Client → Transactions tab | Retry and paging should load the list again instead of hanging. |
| QuickBooks import (FR) | French copy for the QuickBooks import path is corrected. |

---

## Suggested smoke path (30–40 min)

1. POS: set **Default Screen After Login** to Home, log out/in, then to Register, log out/in.
2. POS: sale with a client email → **Email**. Confirm the inbox. Repeat with **Paper** and **No Receipt**.
3. POS: guest **Pay Full** while the table is still open → Email is on the customer prompt. Receipt is that guest only. No Guest Fully Paid.
4. POS: guest sale → Email, type an address. Confirm the email.
5. POS: attached client with no email → Email is hidden.
6. POS: Auto-Print Customer Receipt on → sale skips the chooser and prints.
7. POS: weighable product — scan a scale sticker, then try **Enter weight**.
8. POS: End of Day — All devices/users, then a single device + single user. Preview and print. Reprint from history.
9. HQ: End of Day — same filters, generate PDF.
10. HQ: create a Recurring Payment (Converge location), open the email link, complete checkout (or trial card save).
11. Restaurant: table amount-split, **no** guest pays — last split then **Choose full order customer receipt**. Email lists all tenders.
12. Restaurant: Guest 1 Pay Full, then rest of table Pay Full — unpaid items only, Email on, no full-order chooser, tip on remaining.
13. Restaurant: Guest 1 split $10 then remainder → payment slips, then **Guest Fully Paid**. Email lists both pays and the full guest total.
14. Restaurant: Guest 1 paid, rest of table split $10 + remainder — unpaid items only, grand total stays the remaining bill, balance due moves, no full-order chooser.
15. Demo mode: try $1.01 — should block.
16. WEB-SRM (if available): still **Does the customer want a paper receipt?**, not the new chooser.
