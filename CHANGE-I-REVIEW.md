# Change I Review — Mother & Baby Service Text

## Status: Needs Review

The Mother & Baby service text was updated as part of the LR4 changes, but Masami has indicated it needs review before going live.

---

## What Was Changed

**File:** `src/data/site-data.ts` (lines 66-94)

The `mother-baby` service object was updated with new text covering:
- Pregnant mothers section
- Mothers and babies section
- Benefits for Baby
- Benefits for Mother
- Home visit information

---

## Current Text (Deployed)

The current description includes:

```
For pregnant mothers — CST offers a safe and deeply relaxing treatment...

Benefits for Baby:
• Colic and Reflux: Eases tummy tension.
• Birth Strain: Releases muscle tightness from difficult or fast births.
• Feeding: Helps the jaw relax for better latching.
• Sleep: Calms the nervous system so they rest easier.

Benefits for Mother:
• Nervous System: Relaxes the body and lowers stress hormones.
• Recovery: Eases pelvic and back pain from pregnancy and delivery.
• Bonding: Calming both of you together builds a stronger connection.

I provide home visits for mother and baby treatments within a 15 mile radius of Glastonbury.
Please contact me directly at masami@luminousrebirth.com or 07496 959998 for more detail.
```

---

## Original Text (Before Change I)

```
Specialist craniosacral therapy designed for mothers and babies. This gentle approach supports post-natal recovery for mothers and helps babies with issues such as colic, feeding difficulties, and birth trauma.
```

---

## What Needs to Happen

1. **Review the current text** on the live site: https://luminousrebirth.com/services/mother-baby
2. **Decide what to keep/change** — the new text may need formatting adjustments or content edits
3. **Update `src/data/site-data.ts`** with the revised text
4. **Run lint and build:** `npm run lint && npm run build`
5. **Commit and push** to deploy the changes

---

## Reference: Original PDF Text

From the LR4 changes PDF, the requested text was:

```
For pregnant mother - CST offers a safe and deeply relaxing treatment to have throughout your
pregnancy.

The benefits of the treatments can be experienced at different levels:
- Alleviate physical pain and symptoms including spinal and pelvis pain, rib/backpain, headaches,
indigestions.
- Help to settle the nervous system and hormonal balance reducing stress and anxiety.
- Promote profound relaxation creating a field where mummy and baby can feel a deep sense of
connection and bonding.

For mother and babies - CST offers gentle hands-on treatment that relieves stress in your baby's
head, neck, and spine. It helps babies settle, feed, and sleep better. Because both bodies are
connected, we often treat mothers and babies together.

Benefits for Baby
CST helps ease many common newborn issues:
Colic and Reflux: Eases tummy tension.
•
•
Birth Strain: Releases muscle tightness from difficult or fast births.
•
Feeding: Helps the jaw relax for better latching.
•
Sleep: Calms the nervous system so they rest easier.

Benefits for Mother
The first weeks after birth are hard on a mother's body. CST helps mothers in these ways:
Nervous System: Relaxes the body and lowers stress hormones.
•
•
Recovery: Eases pelvic and back pain from pregnancy and delivery.
•
Bonding: Calming both of you together builds a stronger connection.

I provide home visits for mother and baby treatments within a 15 mile radius
of Glastonbury.
Please contact me directly at masami@luminousrebirth.com or 07496 959998
for more detail.
```

---

## Related Files

- `src/data/site-data.ts` — Main data file (lines 66-94)
- `src/app/services/mother-baby/page.tsx` — Service page (uses ServicePageTemplate)
- `src/components/ServicePageTemplate.tsx` — Shared template component

---

## Notes

- The service page uses `ServicePageTemplate` which renders `description`, `whatToExpect`, and `benefits`
- The `description` field supports `\n\n` for paragraph breaks
- The `whatToExpect` and `benefits` arrays render as bullet lists with checkmarks
