# Next.js Admin

- Next.js
- TypeScript
- Storybook
- ESLint
- Prettier
- Husky
- lint-staged
- Jest (Unit テスト + Snapshot)
- storycap + reg-suit(ビジュアルリグレッションテスト)

## 参考

<https://zenn.dev/nus3/articles/257d724e24a39b756b5a>

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

※eslint は初期設定されている eslint-config-next を利用する
その他必要な eslint のルールは個別で設定

以下のファイルを作成、修正

- .eslintrc
- .eslintignore
- .prettierrc
- .prettierignore
