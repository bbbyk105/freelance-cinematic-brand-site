# E2E Test Plan — Cinematic Brand Site

## Overview

このドキュメントはシネマティックブランドサイトのE2Eテスト計画を定義します。

## Tech Stack

- Next.js App Router
- GSAP ScrollTrigger
- Tailwind CSS

## Test Scenarios

### 1. トップページ

- [ ] ページが正常にロードされる
- [ ] フルスクリーンのヒーローセクションが表示される
- [ ] GSAP ScrollTrigger によるシーン切替アニメーションが動作する

### 2. サービスページ (5ページ)

- [ ] 各サービスページへのナビゲーションが機能する
- [ ] サービス詳細コンテンツが表示される
- [ ] シネマティックな画像/映像トランジションが動作する

### 3. News ページ

- [ ] ニュース一覧が表示される
- [ ] 各記事へのリンクが機能する

### 4. 問い合わせページ

- [ ] フォームが表示される
- [ ] バリデーションが機能する
- [ ] 送信が成功する

## Implementation Notes

- Playwright または Cypress を使用したE2Eテスト実装を推奨
- ScrollTrigger アニメーションのテストには `waitForAnimation` ヘルパーを使用
- モバイル/デスクトップ両方のビューポートでテストを実施

## CI/CD Integration

GitHub Actions ワークフローに組み込み、PR ごとに自動実行する。
