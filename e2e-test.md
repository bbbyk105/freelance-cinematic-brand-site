# E2E Test Plan — Cinematic Brand Site

## Overview

シネマティックで没入型のブランドサイトのエンドツーエンドテスト計画。

## Tech Stack

- **Framework**: Next.js App Router
- **Styling**: Tailwind CSS
- **Animation**: GSAP ScrollTrigger
- **Testing**: Playwright (recommended)

## Pages Under Test

| Page | Route | Description |
|------|-------|-------------|
| Top | `/` | フルスクリーンシーン切替、ヒーローセクション |
| Service 1 | `/services/video-production` | 映像制作サービス |
| Service 2 | `/services/photography` | 写真撮影サービス |
| Service 3 | `/services/branding` | ブランディングサービス |
| Service 4 | `/services/web-design` | Webデザインサービス |
| Service 5 | `/services/consulting` | コンサルティングサービス |
| News | `/news` | ニュース一覧 |
| Contact | `/contact` | お問い合わせフォーム |

## Test Cases

### TC-001: Top Page — Hero Section
- **Precondition**: Site is running at `localhost:3000`
- **Steps**:
  1. Navigate to `/`
  2. Verify hero section is visible with full-screen layout
  3. Scroll down to trigger ScrollTrigger animation
  4. Verify scene transition occurs smoothly
- **Expected**: Hero animation plays, scene switches on scroll

### TC-002: Navigation
- **Steps**:
  1. Navigate to `/`
  2. Click each navigation link
  3. Verify correct page loads
- **Expected**: All nav links route to correct pages

### TC-003: Service Pages
- **Steps**:
  1. Navigate to each `/services/*` route
  2. Verify page content loads
  3. Check for GSAP animations on scroll
- **Expected**: Service content visible, animations trigger on scroll

### TC-004: News Page
- **Steps**:
  1. Navigate to `/news`
  2. Verify article list is displayed
  3. Click on an article
- **Expected**: News articles render correctly

### TC-005: Contact Form
- **Steps**:
  1. Navigate to `/contact`
  2. Fill in required fields (name, email, message)
  3. Submit the form
- **Expected**: Form submits successfully, confirmation message shown

### TC-006: Responsive Layout
- **Steps**:
  1. Open site on mobile viewport (375px)
  2. Open site on tablet viewport (768px)
  3. Open site on desktop viewport (1440px)
- **Expected**: Layout adapts correctly at all breakpoints

### TC-007: ScrollTrigger Animations
- **Steps**:
  1. Navigate to top page
  2. Scroll through all sections
  3. Verify each section's entrance animation
- **Expected**: GSAP ScrollTrigger fires for each section, no jank

## Automation Setup

```bash
# Install Playwright
npm install -D @playwright/test
npx playwright install

# Run tests
npx playwright test

# Run with UI
npx playwright test --ui
```

## Sample Playwright Test

```typescript
import { test, expect } from '@playwright/test';

test('top page loads with hero section', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/cinematic/i);
  const hero = page.locator('[data-testid="hero-section"]');
  await expect(hero).toBeVisible();
});

test('contact form submits successfully', async ({ page }) => {
  await page.goto('/contact');
  await page.fill('[name="name"]', 'Test User');
  await page.fill('[name="email"]', 'test@example.com');
  await page.fill('[name="message"]', 'E2E test message');
  await page.click('[type="submit"]');
  await expect(page.locator('.success-message')).toBeVisible();
});
```

## CI Integration

Add to `.github/workflows/e2e.yml`:

```yaml
name: E2E Tests
on: [push, pull_request]
jobs:
  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
```
