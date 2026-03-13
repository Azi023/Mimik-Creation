# SLPL IMAGE FIX — Add Gallery Images to SLPL UAE Case Study
# Project: ~/workspace/Mimik_Creation/mimik-website
# Time: ~3 minutes

---

## CRITICAL RULES
- Read files before modifying
- Do NOT touch fonts, animations, layout, .htaccess, or any other case studies
- Only affects: SLPL images + SLPL case study data entry

---

## STEP 1: VERIFY THE SOURCE FILES

```bash
cd ~/workspace/Mimik_Creation/mimik-website

# List the SLPL PNGs in project root
ls -lh SLPL*.png

# Check current SLPL portfolio folder
ls -la public/portfolio/slpl-uae/ 2>/dev/null || echo "NO slpl-uae folder"
ls -la public/portfolio/slpl/ 2>/dev/null || echo "NO slpl folder"
```

Note the exact folder name used for SLPL in `public/portfolio/`.

---

## STEP 2: MOVE, CONVERT, COMPRESS

```bash
# Create the folder if it doesn't exist (use whatever slug the case study data uses)
# First check what slug SLPL uses in caseStudies.ts:
grep -n "slpl" src/data/caseStudies.ts | head -5

# Create folder matching the slug (likely slpl-uae or slpl)
mkdir -p public/portfolio/slpl-uae

# Copy PNGs to portfolio folder with clean names
cp "SLPL - Champions.png" public/portfolio/slpl-uae/champions.png
cp "SLPL - Weekly Fixtures - W04.png" public/portfolio/slpl-uae/weekly-fixtures.png
cp "SLPL - W04 - Leading Run Scorer.png" public/portfolio/slpl-uae/leading-run-scorer.png
cp "SLPL - Plate Final - Match Scorecard.png" public/portfolio/slpl-uae/plate-final-scorecard.png
cp "SLPL - Cup Trophy Finals.png" public/portfolio/slpl-uae/cup-trophy-finals.png

# Convert to WebP at q65 (these are 2.5-5.5MB PNGs — need aggressive compression)
find public/portfolio/slpl-uae/ -name "*.png" -exec sh -c '
  echo "Converting: $1 ($(du -h "$1" | cut -f1))"
  cwebp -q 65 "$1" -o "${1%.png}.webp"
' _ {} \;

# Check if any are still over 500KB — if so, resize dimensions too
for f in public/portfolio/slpl-uae/*.webp; do
  size=$(stat -c%s "$f" 2>/dev/null || stat -f%z "$f" 2>/dev/null)
  if [ "$size" -gt 512000 ]; then
    echo "Large: $f ($(du -h "$f" | cut -f1)) — resizing to max 2000px width"
    cwebp -q 65 -resize 2000 0 "${f%.webp}.png" -o "$f" 2>/dev/null || \
    cwebp -q 55 "$f" -o "$f.tmp" 2>/dev/null && mv "$f.tmp" "$f"
  fi
done

# Delete the PNG copies from portfolio folder
rm -f public/portfolio/slpl-uae/*.png

# Verify
echo "=== SLPL images ==="
ls -lh public/portfolio/slpl-uae/*.webp
```

---

## STEP 3: DELETE SOURCE PNGs FROM PROJECT ROOT

```bash
rm -f "SLPL - Champions.png"
rm -f "SLPL - Weekly Fixtures - W04.png"
rm -f "SLPL - W04 - Leading Run Scorer.png"
rm -f "SLPL - Plate Final - Match Scorecard.png"
rm -f "SLPL - Cup Trophy Finals.png"

# Also clean up SPACING_AUDIT.md if still in root
rm -f SPACING_AUDIT.md

# Verify root is clean
ls *.png 2>/dev/null && echo "WARNING: PNGs still in root" || echo "Root clean ✅"
ls *.md 2>/dev/null | grep -v "CLAUDE\|README\|PRODUCTION" || echo "No stray MDs ✅"
```

---

## STEP 4: WIRE IMAGES INTO SLPL CASE STUDY DATA

**Step 4a: Read the current SLPL entry**

```bash
# Find the SLPL entry in caseStudies.ts and show its full content
grep -n "slpl" src/data/caseStudies.ts | head -5

# Get the line numbers and read the full entry
# Adapt the line numbers based on grep output above
```

Read the complete SLPL entry to find:
- The exact field name for gallery images (could be `galleryImages`, `images`, `gallery`, etc.)
- The current values (likely empty array or placeholder paths)
- The `coverImage` field (update this too if it's a placeholder)

**Step 4b: Update the image references**

Replace the SLPL gallery images with the new WebP files. The paths should be:
- `/portfolio/slpl-uae/champions.webp`
- `/portfolio/slpl-uae/weekly-fixtures.webp`
- `/portfolio/slpl-uae/leading-run-scorer.webp`
- `/portfolio/slpl-uae/plate-final-scorecard.webp`
- `/portfolio/slpl-uae/cup-trophy-finals.webp`

Also update the `coverImage` to use `champions.webp` (the tournament champions photo is the most visually striking for the card).

**IMPORTANT:** Adapt folder name (`slpl-uae` vs `slpl`) based on what you found in Step 1. The path must match the actual folder.

---

## STEP 5: BUILD AND VERIFY

```bash
npm run build 2>&1 | tail -5
du -sh dist/

# Verify SLPL images are in the build
ls -lh dist/portfolio/slpl-uae/*.webp 2>/dev/null || ls -lh dist/portfolio/slpl/*.webp 2>/dev/null

echo "=== Total dist size ==="
du -sh dist/
```

---

## STEP 6: COMMIT

```bash
git add -A
git commit -m "feat: add SLPL UAE event gallery images — champions, fixtures, scorecards, trophy finals"
```

---

## EXPECTED RESULT
- SLPL case study gallery shows 5 real event images instead of "Images coming soon"
- SLPL card on /our-work shows the champions photo as cover
- No stray PNGs in project root
- dist/ should only grow by ~1-2MB (compressed WebPs)
