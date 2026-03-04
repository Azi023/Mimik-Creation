#!/bin/bash
# process-portfolio-images.sh
# Developer utility: scans Portfolio Assets folder and reports image inventory.
# Not part of the build pipeline.

ASSETS_DIR="${HOME}/workspace/Mimik_Creation/Portfolio Assets - Mimik"
CONVERTER="${HOME}/image-converter/convert-images.js"

if [ ! -d "$ASSETS_DIR" ]; then
  echo "Error: Portfolio Assets directory not found at $ASSETS_DIR"
  exit 1
fi

echo "=== Portfolio Image Inventory ==="
echo ""

total_files=0
total_size=0
non_webp=0

for dir in "$ASSETS_DIR"/*/; do
  client=$(basename "$dir")
  count=$(find "$dir" -maxdepth 1 -type f \( -name "*.webp" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | wc -l)
  size=$(du -sh "$dir" 2>/dev/null | cut -f1)

  # Check for non-webp files
  non_webp_files=$(find "$dir" -maxdepth 1 -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) 2>/dev/null)
  non_webp_count=$(echo "$non_webp_files" | grep -c . 2>/dev/null || echo 0)

  printf "%-25s %3d images  %8s" "$client" "$count" "$size"

  if [ "$non_webp_count" -gt 0 ] && [ -n "$non_webp_files" ]; then
    printf "  [!] %d non-WebP files need conversion" "$non_webp_count"
    non_webp=$((non_webp + non_webp_count))
  fi

  echo ""
  total_files=$((total_files + count))
done

# Check subdirectories (like Website-Services/*)
for dir in "$ASSETS_DIR"/Website-Services/*/; do
  if [ -d "$dir" ]; then
    client="Website-Services/$(basename "$dir")"
    count=$(find "$dir" -maxdepth 1 -type f \( -name "*.webp" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | wc -l)
    size=$(du -sh "$dir" 2>/dev/null | cut -f1)
    printf "%-25s %3d images  %8s\n" "$client" "$count" "$size"
    total_files=$((total_files + count))
  fi
done

echo ""
echo "=== Summary ==="
echo "Total image files: $total_files"
if [ "$non_webp" -gt 0 ]; then
  echo "Non-WebP files needing conversion: $non_webp"
  if [ -f "$CONVERTER" ]; then
    echo "Converter available at: $CONVERTER"
  else
    echo "Warning: Converter not found at $CONVERTER"
  fi
else
  echo "All images are WebP format."
fi
