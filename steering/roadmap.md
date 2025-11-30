# 🍞 ベーカリーセンター業務マニュアル開発プロジェクト（引継ぎ用）

## 📌 プロジェクト概要

- **目的:** 業務の属人化解消と PC 作業の簡略化
- **ツール:** Nextra v4 (App Router), Next.js 16
- **デプロイ:** Static Export (`output: 'export'`)

---

## 🛤 開発ロードマップ & 進捗状況

### ✅ Phase 1: 環境構築 (完了！)

- [x] Next.js + Nextra v4 のインストール
- [x] `app` ディレクトリ構成のセットアップ
- [x] `mdx-components.js` の配置

### ✅ Phase 2: ディレクトリ構成 & ナビゲーション (完了！)

- [x] フォルダ作成 (`01_daily`, `02_weekly` 等)
- [x] `_meta.js` によるサイドバー設定
- [x] ページ階層の正規化 (フォルダ/page.mdx 形式)

### ✅ Phase 3: 機能実装 (完了！)

- [x] コピーボタンの実装 (`defaultShowCopyCode: true`)
- [x] **検索機能 (Pagefind) の導入**
  - `pagefind` パッケージのインストール
  - `package.json` への `postbuild` スクリプト追加
  - `out/_pagefind` 生成の確認

### 🚧 Phase 4: コンテンツ充実 (これからの作業！)

- [ ] 実際の業務フローの記述
- [ ] 画像の追加 (`public/images` への配置と表示)
- [ ] Callout (注釈) を使った装飾
- [ ] リンク切れ等のチェック

### 🚀 Phase 5: 運用準備

- [ ] スマホ実機での表示確認 (レスポンシブ)
- [ ] 最終ビルドチェック

---

## ⚠️ 現在の環境メモ (New えいみーへの伝言)

- **Nextra Version:** v4 (App Router 使用)
- **検索機能:** `npm run build` 後に `postbuild` で Pagefind を走らせて生成しています。
- **プレビュー方法:** `output: 'export'` 設定済みのため、`npm run build` → `npx serve out` で確認中。
