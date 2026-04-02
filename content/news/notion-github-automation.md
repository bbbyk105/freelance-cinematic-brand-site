---
title: Notion APIとGitHubを連携した開発自動化の仕組み
date: "2026.03.15"
slug: notion-github-automation
tag: BLOG
---

Notion をタスク管理の中心に据え、GitHub と API 連携することで開発フロー全体を自動化する仕組みを構築しました。

## アーキテクチャ概要

Notion のデータベースに登録されたタスクを定期的にポーリングし、条件を満たすタスクを自動的にパイプラインへ投入します。

1. **タスク検出**: Notion API でステータスが「todo」のタスクをスキャン
2. **Issue 作成**: GitHub API で Issue を自動作成し、Notion に URL を書き戻し
3. **ブランチ作成**: `feature/issue-{N}` ブランチを自動生成
4. **実装**: AI エージェントがコードを実装し、push
5. **PR 作成**: Pull Request を自動作成、Telegram で承認通知

## 導入効果

手動で行っていたタスク管理・Issue 作成・ブランチ運用が完全に自動化され、開発者はコードレビューと意思決定に集中できるようになりました。
