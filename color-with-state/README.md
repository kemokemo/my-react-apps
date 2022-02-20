# Color with state

色見本アプリの実装。ルートコンポーネントでステートを一元管理する練習。

- Start with `yarn start`
- Test with `yarn test`
- Build with `yarn build`

## ポイント

データはプロパティ経由で上から下へ、ユーザー操作は関数プロパティ経由でコンポーネントツリーを下から上へ。

`state`を伝搬させる仕組み`useState`。返り値の1つ目は最新の値で、2つ目は値を更新する関数が得られる。

```js
[value, setValue] = useState(initialValue);
```

カスタムフックを作るときにも参考になるかも。
