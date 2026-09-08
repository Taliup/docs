---
title: "What's new — Taliup POS and Taliup HQ"
sidebarTitle: "What's new"
noindex: true
hidden: true

---

## What's new

| What | Where | In one sentence |
|---|---|---|
| **Choose customer receipt** | Taliup POS | After a sale, staff or the customer picks **No Receipt**, **Paper**, or **Email**. |
| **Default screen after login** | Taliup POS | Each terminal can open **Home** or **Register** after a passcode. |
| **Scale barcodes and weighable items** | Taliup POS + Taliup HQ | Scan a scale sticker, or type a weight, instead of adding quantity 1. |
| **End of Day** | Taliup POS + Taliup HQ | Run the daily report for all devices and staff, or pick specific ones. |
| **Recurring Payments** | Taliup HQ | Set up a schedule, send a checkout link, and collect payments in the portal. |
| **Table, guest, and split receipts** | Taliup POS | Receipts now match who paid and what is still open. |
| **View all terminal transactions** | Taliup HQ permission + POS | A role can see every terminal’s payments, not only this device. |
| **Orders list** | Taliup POS | The terminal shows the last **60 days**. Older orders stay in Taliup HQ. |
| **Demo mode** | Taliup POS | A sale cannot go over **$1.00**. |

---

## Customer receipts

After a sale, **Print Customer Copy Receipt?** is replaced by **Choose customer receipt**.

| Choice | What happens |
|---|---|
| **No Receipt** | No customer copy |
| **Paper** | Prints the customer copy |
| **Email** | Sends the receipt. Client with an email: sends there. Client with no email: **Email** is hidden. No client: type an address |

The merchant copy still prints unless **Skip Merchant Receipt Copy** is on.

**Auto-Print Customer Receipt** (Settings → **General**) prints the customer copy and skips this prompt.

On a customer-facing display, the customer picks. Staff see **Customer is choosing a receipt…** and can **Take over** or tap **No Receipt**.

In Québec WEB-SRM, the terminal still asks **Does the customer want a paper receipt?**

Reprint later from Transaction Details is paper only. Email is only at sale time.

### When Email is available

| After this payment | What staff see | Email |
|---|---|---|
| Open Sale, saved order, or table **Pay Full** (no guest has paid) | **Choose customer receipt** | Shown |
| Guest **Pay Full** (the table can still be open) | **Choose customer receipt** | Shown |
| A split while money is still due | **Paper** and **No Receipt** only | Hidden |
| Last split on an order or table, **no guest payments** | Paper / No, then **Choose full order customer receipt** | On the full-order prompt only |
| Last split on a **guest** | Paper / No, then **Guest Fully Paid** | On **Guest Fully Paid** only |
| Rest of the table after a guest | **Choose customer receipt** | Shown |

**Choose full order customer receipt** is only for a table or saved order that was split by amount with **no guest payments**. It does not appear after a guest pays, or after you pay the rest of the table.

**Skip Fully Paid Receipt Prompts** skips **Guest Fully Paid**. It does not skip **Choose customer receipt** or **Choose full order customer receipt**.

---

## Default screen after login

After a staff member enters their passcode, the terminal can open **Home** or **Register**.

1. Home → **Settings** → **General**.
2. Find **Default Screen After Login**.
3. Tap **Home** or **Register**.

This is per terminal. Open Sale–only merchants always land in Register, so they will not see this setting.

This is different from **Default Register View** (Open Sale vs Menu / Catalog), which only applies after Register is already open.

---

## Scale barcodes and weighable items

Cashiers can scan a counter-scale sticker, or type a weight, instead of adding quantity 1.

**Set up the product in Taliup HQ** (or POS **Menu / Catalog → Inventory**)

1. Set **SKU** to the exact 5-digit PLU on the scale.
2. Put the product on the catalog this terminal uses.
3. Weight stickers: turn **Weighable** on and pick **kg**, **g**, **lb**, or **oz**.
4. Price stickers: leave Weighable off. The printed dollar amount wins.

Custom price and Weighable cannot be on together.

**Scan in Register**

1. Home → **Register** → **Menu** or **Catalog** (not Open Sale).
2. Scan the sticker, or **Options → Open Scanner**.
3. Finish modifiers if asked, then **Apply**.
4. Weight lines show the amount with the unit (for example `0.450 kg`). Then **Pay**.

**Type a weight instead**

1. Settings → **General** → **Weighable items**.
2. Choose **Enter weight** (default is **Scale labels**).
3. Tap the item, type the weight, confirm.

In **Scale labels** mode, tapping a weighable item does **not** add 1. Scan, or switch the setting.

Kitchen and customer receipts show the real weight and unit, not a fake “1”.

**Labels the terminal reads**

Most counter scales print these (Hobart, Mettler Toledo, Bizerba, DIGI, CAS, and similar). The product **SKU** must be the 5-digit PLU on the sticker.

| Sticker | Starts with | Taliup reads |
|---|---|---|
| 12 digits | `2` | Price |
| 13 digits | `02` or `20` | Price |
| 13 digits | `21`–`29` | Weight |

The terminal does not read QR codes, Code 128, or a scale plugged into the device — only the printed sticker. Full setup: [Scale barcodes](/taliup-pos/register/scale-barcodes).

---

## End of Day

This report does **not** settle or close the card batch.

**On the terminal:** Home → **Transactions** → **End Of Day**.

1. Open **Report Setup**.
2. **Devices** and **Users** default to all. Tap **Change** to pick specific ones.
3. Set **Business Date** (today, or any day in the last 3 months).
4. **Generate & Print**, review, then **Generate**.
5. Reprint later from **EOD History**.

**In Taliup HQ:** sidebar → **End of Day**. Needs the feature on the plan and **View Reports**.

1. Set **Business Date**. Optionally set **Location**.
2. Filter terminals and employees, or leave all.
3. **Apply Filters**, then **Generate Document** for a PDF.

---

## Recurring Payments (Taliup HQ)

The Converge MID must have recurring billing turned on at Elavon. If that flag is off, Taliup HQ can still show Recurring Payments, but checkout and scheduled charges will fail. Ask Elavon (or the ISO) to enable recurring on that MID before you demo.

Sidebar → **Recurring Payments**.

Needs the **Recurring Payments** feature on the plan, and an **Elavon Converge** gateway on at least one location. Other processors stay available for everything else.

**Settings**

- Allow the customer to cancel from their manage page.
- How many days the checkout email link stays valid (1–90).

**Create an agreement**

1. **New agreement**.
2. Pick or add a **Client** (email required).
3. Pick a **Location** if there is more than one.
4. Add plan items. Choose modifiers if asked.
5. Set **Frequency**: Daily, Weekly, Biweekly, Monthly, or Annually.
6. Optional: free trial (card saved now, first charge later).
7. Optional: end date. Blank means bill until cancelled.
8. **Create agreement**. The customer gets a checkout email.

After checkout, first payment (or card save on a trial) starts the schedule. You can pause, resume, cancel, change the next date, charge a missed payment, or resend the link. Declined cycles stay on the schedule and retry next time.

---

## Other POS and HQ notes

- **Demo Mode:** a sale cannot go over **$1.00**. Staff see **Demo Mode payments cannot exceed $1.00.**
- **View All Terminal Transactions:** turn this on for a role in Taliup HQ if they should see every terminal in POS **Transactions**. Owners and Managers already have it. Without it, staff only see this device.
- **Orders** on the terminal: last **60 days**. Older tickets stay in Taliup HQ.
- When POS sends **Email**, the customer gets that receipt. Dual pricing shows as **Card Price Adjustment**.
- If a feature is not on the plan, the screen shows a lock and a short message instead of a blank page.

---

## A short demo path

1. Settings → **Default Screen After Login** → Home, log out/in. Then Register, log out/in.
2. Sale with a client email → **Email**, then **Paper**, then **No Receipt**.
3. Guest **Pay Full** while the table is still open → Email is there. Receipt is that guest only.
4. Guest split $10 then the rest → payment slips, then **Guest Fully Paid**. Email lists both payments and the guest total.
5. Rest of the table Pay Full → unpaid items only, Email on.
6. Rest of the table split $10 then the rest → unpaid items, balance due, last Email is this remaining bill only.
7. Guest already paid → add an item → pay again. Only the new item is on that receipt.
8. Scan a scale sticker, or type a weight.
9. End of Day on the terminal and in Taliup HQ.
10. Recurring Payments: create an agreement and open the checkout email (Converge location).
11. Demo mode: try $1.01 — it should block.
