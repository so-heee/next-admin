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
