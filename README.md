# Next.js Admin

- Next.js
- TypeScript
- Storybook
- ESLint
- Prettier
- Husky（Git hooks が簡単にできるパッケージ）
- lint-staged（ステージングしたファイルに対し、特定のコマンドが実行できるパッケージ）
- Jest (Unit テスト + Snapshot)
- storycap + reg-suit(ビジュアルリグレッションテスト)

## 参考

[https://zenn.dev/nus3/articles/257d724e24a39b756b5a](ぼくのかんがえたNext.jsの構成)
[https://material-app.bootlab.io/pages/profile](デザイン参考)
[https://ryotarch.com/javascript/react/next-js-with-csr/](Next.jsでCSRアプリを実装する)

## 1. プロジェクトを作成

```:bash
yarn create next-app --ts
```

## 2. ディレクトリの移動

```:bash
mkdir src && mv pages src && mv styles src
```

## 3. typescript の設定追加

```:bash
yarn add --dev typescript @types/react @types/react-dom @types/node
```

## 4. tsconfig.json を修正

## 5. eslint + prettier の導入

vscode の設定

- code-基本設定-設定-ワークスペース-拡張機能-setting.json で編集から.vscode/setting.json を作成
- extensions.json を作成

```:bash
yarn add -D prettier eslint-config-prettier
```

※eslint は初期設定されている [https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js](eslint-config-next) を利用する
その他必要な eslint のルールは個別で設定

以下のファイルを作成、修正

- .eslintrc
- .eslintignore
- .prettierrc
- .prettierignore

## 6. lint-staged + husky の導入

```:bash
yarn add --dev husky lint-staged
```

- lint-staged の設定を package.json に追加

```:json
 "lint-staged": {
   "*.@(ts|tsx)": [
     "yarn lint",
     "yarn format",
     "yarn lint:fix"
   ]
 },
```

- husky の設定追加

```:bash
yarn husky install
yarn husky add .husky/pre-commit "yarn lint-staged"
yarn husky add .husky/pre-push "yarn type-check"
```

## 7. material-ui の導入

```:bash
yarn add @material-ui/core @material-ui/icons
```

## 8. Next.js の CSR(SPA)化

\_app.tsx を変更する
