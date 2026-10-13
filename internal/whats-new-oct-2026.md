---
title: "What's new — October 2026"
sidebarTitle: "What's new (Oct 2026)"
noindex: true
hidden: true

---

## What's new

| What | Where | In one sentence |
|---|---|---|
| **Loyalty** | Taliup POS + Taliup HQ | Enrol clients with a printed or digital card, earn on paid sales, redeem as a pre-tax discount. |
| **Gift Cards** | Taliup POS + Taliup HQ | Sell, reload, batch-load, and check cards from **Order actions**; pay with **Gift card**. |
| **Floor plans** | Taliup POS + Taliup HQ | Tables grouped by room, list or floor plan view, pinch/rotate editing with a grid. |
| **Manual card entry** | Taliup POS | **Manual entry** tender, only on card readers that accept keyed card details. |
| **Share Analytics** | Taliup POS | **Share** → QR code (PDF, 15 minutes) or email. |
| **What's new in the app** | Taliup POS | Shown after an update; tap the app version in Settings to reopen. |
| **Redesign** | Taliup POS | Every screen has a new look. Screenshots in the docs predate it. |
| **Payment screen** | Taliup POS | Tender keys show the charge amount; three distinct cash suggestions; fourth tip preset. |
| **Calendar** | Taliup POS + Taliup HQ | **Time conflict** → **Change time** / **Book anyway**; services up to 8 hours. |
| **Past favorites** | Taliup POS | Shipped in September, first listed in October. |

---

## Loyalty

**Taliup HQ setup:** sidebar → **Loyalty**.

1. **Locations** → **Activate** → secure checkout. Needs a terminal on the location.
2. **Program Rules** → points per 1.00, minimum purchase, rounding, points per reward, reward value, minimum to redeem, welcome bonus → **Save rules**.
3. **Cards** → **Add card numbers** for printed cards (charged per number). Optionally turn on automatic refill of digital numbers.

**On the terminal:**

- Enrol: **New client** → **Join loyalty**, or tap the attached client → **Enrol in loyalty**. Digital is the default; **Scan a printed card** to hand one over. Digital needs a client email.
- Scan a member card in Register to attach them. Scan an unassigned card with a client attached to enrol them.
- Redeem: tap the attached client → **Redeem points** → **Apply … off**. Points are taken at payment.
- An order with a reward cannot be saved, and Link To Pay removes the reward.
- Void or full refund reverses points.
- **Print rewards signup** (Settings → General) prints a join code on non-member receipts.

Full docs: [Loyalty on POS](/taliup-pos/register/loyalty) · [Loyalty in HQ](/taliup-hq/features/loyalty).

---

## Gift Cards

**Taliup HQ setup:** sidebar → **Gift Cards** → turn on each location (secure checkout). Keep digital numbers in stock (**Add numbers now** or automatic refill).

**On the terminal:** Register → **Order actions** → **Gift Cards**.

- **Sell gift card** → **Physical card** (scan) or **Digital card** (needs a client with email) → amount → add → pay. The card loads after payment.
- **Load a batch** → **Each card**, **First and last**, or **Card set**.
- Sell, reload, and batch are hidden on Open Sale and on table orders. **Gift card balance** works everywhere.
- Pay: **Gift card** tender (or **More payment types**) → scan → **Check balance** → **Apply**. A partial balance continues as a split.
- A gift card cannot pay for a gift card. A sale with a gift card line cannot be saved.
- Refunds on a gift-card sale go back onto the card.
- Offline: gift cards are unavailable. Failed loads → **Retry gift card load**.

Full docs: [Gift cards on POS](/taliup-pos/register/gift-cards) · [Gift Cards in HQ](/taliup-hq/features/gift-cards).

---

## Floor plans

- **Tables** → **Floor plan** / **List**. Plan tabs swipe.
- **Manage floor plans** → add, rename, reorder, disable, delete. Deleting moves tables to **Ungrouped**.
- **Edit layout** → drag, pinch to resize, twist to rotate (snaps to 45°) → **Save layout**.
- Disabling a plan needs every table free. Overlapping tables block saving.
- Taliup HQ: **Table Management** opens the same floor plans.

---

## A short demo path

1. HQ: activate Loyalty on a location and save rules with a welcome bonus.
2. POS: create a client with **Join loyalty** on, enrol digitally, and check the email and wallet pass.
3. Sell to that member, pay, and confirm points earned on the receipt.
4. Next sale: **Redeem points**, pay, and confirm **Loyalty reward** and points used.
5. Void that sale and confirm the points reverse.
6. HQ: turn on Gift Cards. POS: sell a digital card to a client with email, then pay a second sale partly with that card.
7. Refund the second sale and confirm the balance returns to the card.
8. Tables: create a second floor plan, move a table into it, edit the layout, and save.
9. Analytics → **Share** → scan the QR code.
10. Settings → tap the version to reopen **What's new**.
