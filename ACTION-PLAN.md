# Prioritized SEO Action Plan

**Target Site**: https://cloudhoste.eu  
**Generated Date**: July 21, 2026  

---

## 🔴 CRITICAL (Fix Immediately)

### 1. Fix Broken Hreflang Links in `sitemap.xml`
- **Issue**: `sitemap.xml` references non-existent pages in `it/` and `de/` subdirectories (`it/wp-hosting.html`, `de/wp-hosting.html`, `it/vps-hosting.html`, `de/vps-hosting.html`, `it/n8n-hosting.html`, `de/n8n-hosting.html`, `it/changelog.html`, `de/changelog.html`, `it/faq.html`, `de/faq.html`, `it/about.html`, `de/about.html`).
- **Fix**: Remove non-existent hreflang links from `sitemap.xml` so search engine crawlers do not encounter 404 errors.

### 2. Add Missing HTML Pages to `sitemap.xml`
- **Issue**: Over 60 active HTML pages are missing from `sitemap.xml`.
- **Fix**: Regenerate `sitemap.xml` to include all key landing pages (`domain.html`, `cpanel-hosting.html`, `reseller-hosting.html`, `email-hosting.html`, `dedicated-server-hosting.html`, `ddos-protection.html`, `ssl-certificate.html`, `contact.html`, `privacy-policy.html`, `features.html`, `review.html`, `case-study.html`, `career.html`, `knowledge-base.html`).

---

## 🟠 HIGH SEVERITY (Fix Within 1 Week)

### 3. Create `llms.txt` Standard for Generative AI Search (GEO)
- **Issue**: Missing `llms.txt` file for LLM crawlers (ChatGPT, Perplexity, Claude, Bing Copilot).
- **Fix**: Create `llms.txt` in root directory detailing CloudHoste's service overview, hosting pricing, server locations in Europe, GDPR compliance, and direct links to product pages.

### 4. Update `robots.txt` for AI Crawlers
- **Issue**: `robots.txt` does not explicitly declare rules for AI web crawlers.
- **Fix**: Add explicit `Allow` rules for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Bytespider`, `Google-Extended`, and reference `llms.txt`.

### 5. Standardize Product Schema & Add Missing Schemas
- **Fix**:
  - Update `vps-hosting.html` JSON-LD schema to set `priceCurrency: "EUR"` and offer URL to `https://cloudhoste.eu/vps-hosting.html`.
  - Add `Product` schema to `wp-hosting.html`, `n8n-hosting.html`, `cpanel-hosting.html`, `reseller-hosting.html`, `dedicated-server-hosting.html`.
  - Add `FAQPage` JSON-LD schema to `faq.html`.
  - Add `WebSite` schema with `SearchAction` to `index.html`.

---

## 🟡 MEDIUM SEVERITY (Target Within 1 Month)

### 6. Enhance Security Headers in `.htaccess`
- **Fix**: Add the following headers to `.htaccess`:
  ```apache
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
  ```

### 7. Unique Meta Descriptions for All Subpages
- **Fix**: Add unique `<meta name="description">` tags to blog pages and how-to documentation pages.

---

## 🟢 LOW SEVERITY / MAINTENANCE (Backlog)

### 8. Optimize Image Alt Attributes
- **Fix**: Audit and replace generic alt attributes (e.g. `alt="image"`) with descriptive alt text across feature icons.
