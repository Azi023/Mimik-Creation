# Image Optimization Audit

This report details the findings of the image optimization audit.

## Summary

The most critical performance issue on this website is the lack of image optimization. Several images are multiple megabytes in size, leading to a massive total page weight and slow load times.

---

## Images Requiring Immediate Optimization (>200 KB)

The following images are critically large and must be optimized. They are responsible for the majority of the site's large build size.

| Path | Size | Recommendation |
| :--- | :--- | :--- |
| `public/Projects/park.png` | **10.9 MB** | Compress, resize, convert to WebP |
| `public/Projects/ruqyah.png`| **6.0 MB** | Compress, resize, convert to WebP |
| `public/Projects/boring.png`| **5.6 MB** | Compress, resize, convert to WebP |
| `public/Projects/GU.png` | **4.6 MB** | Compress, resize, convert to WebP |
| `public/Projects/bfresh.jpg`| **3.8 MB** | Compress, resize, convert to WebP |
| `public/Projects/keily.jpg` | **2.9 MB** | Compress, resize, convert to WebP |
| `public/Projects/jaya.png` | **1.2 MB** | Compress, resize, convert to WebP |
| `public/Logo2.png` | **232 KB** | Compress, convert to WebP/SVG |
| `public/Logo.png` | **226 KB** | Compress, convert to WebP/SVG |

---

## Other Images for Review

These images are under 200 KB but could still benefit from compression and format changes.

| Path | Size |
| :--- | :--- |
| `src/assets/hero-bg.jpg` | 165 KB |
| `public/android-chrome-512x512.png` | 59 KB |
| `src/assets/project-web.jpg` | 45 KB |
| `src/assets/project-branding.jpg` | 40 KB |
| `src/assets/project-packaging.jpg`| 38 KB |
| `public/Projects/Logo-F.png` | 28 KB |
| `src/assets/project-photography.jpg` | 26 KB |

---

## `<img>` Tag Attributes (`width` & `height`)

*   **Status**: **NEEDS IMPROVEMENT**
*   **Finding**: The `<img>` tags used in the following components are missing `width` and `height` attributes:
    *   `src/components/BentoProjects.tsx`
    *   `src/components/CaseStudies.tsx`
    *   `src/components/Footer.tsx`
    *   `src/components/Navbar.tsx`
*   **Recommendation**: Add `width` and `height` attributes to all `<img>` tags. This helps the browser reserve space for the image before it loads, reducing Cumulative Layout Shift (CLS) and improving user experience.

    **Example:**
    ```jsx
    // Before
    <img src={project.image} alt={project.title} loading="lazy" />

    // After (assuming image is 800x600)
    <img src={project.image} alt={project.title} width="800" height="600" loading="lazy" />
    ```
    Even though CSS controls the final rendered size, providing these attributes is a best practice for performance.

---

## General Recommendations

1.  **Automate Optimization:** Manually optimizing images is not scalable. Use a Vite plugin like `vite-plugin-image-optimizer` to automatically compress and convert images during the build process.
2.  **Serve Modern Formats:** Implement logic to serve images in `WebP` or `AVIF` formats to browsers that support them, with a fallback to JPG/PNG. The `<picture>` element is ideal for this.
3.  **Lazy Loading:** The `loading="lazy"` attribute is correctly applied in `BentoProjects.tsx`. Ensure this is used for all below-the-fold images.
