1. タイトルと概要、URL
# タイトル
CRWN Clothing
# 概要
洋服専門のECサイトです。
5つのジャンルごとに商品があります。
# URL
http://Ezure-HARUNA.github.io/ec-site
2. 使用技術
- React 17.0.2
- react-dom 17.0.2
- react-redux" 7.2.6 
- react-router-dom  5,
- react-stripe-checkout 2.6.3
- redux-logger 3.0.6
- redux-persist 6.0.0
- reselect 4.1.5
- firebase 9.6.1
(以降追加予定技術)
- Hooks
- GraphQL
- ContextAPI

3. 機能
- ユーザー登録、ログイン、ログアウト機能(メールアドレス・パスワード、Googleによる認証)
- カートに商品を追加する機能
- チェックアウト後、商品の数を編集する機能、商品を削除する機能
- 決済機能

4. 使い方
ユーザー登録・ログイン後、ホーム画面に遷移します
テストログインは下記の入力でできます
`email: usera@gmail.com, password: 111111`
ログイン画面
![ログイン](https://user-images.githubusercontent.com/60723063/147054908-6adf6912-046e-4f1a-ba7f-fe16b0b98975.png)


ホーム画面にジャンル一覧があり、クリックするとジャンルごとに商品を見ることが可能です
ホーム画面
![ホーム画面](https://user-images.githubusercontent.com/60723063/147055087-4ab82faa-87e3-49ab-a915-6e26c6cc5702.png)
ジャンルごとの画面
![ジャンルごと](https://user-images.githubusercontent.com/60723063/147055130-c203cb92-7600-459f-9de5-19a1768d30c1.png)

ヘッダーのSHOPメニューから、全商品一覧を閲覧することも可能です
商品画像状にあるADD TO CARTボタンを押すことで、商品を追加できます
![add to cart](https://user-images.githubusercontent.com/60723063/147055242-143368d0-349a-4cc7-b000-8757c088a8e5.png)

ヘッダーのカートアイコンを押すと、カート内の商品を閲覧できます。このポップアップからチェックアウトできます。
ポップアップの表示画面
![ポップアップ](https://user-images.githubusercontent.com/60723063/147055295-bf4939bf-d491-4cb6-aa21-d4778a38be68.png)

チェックアウト画面では、商品の数の編集や商品の削除ができます。
下のPay Nowボタンから決済を行うことができます。
チェックアウト画面
![チェックアウト](https://user-images.githubusercontent.com/60723063/147055332-748df7e2-31b0-45af-af4c-ff1d90b17ef8.png)

テスト用のクレジットカード番号は4242 4242 4242 4242です。
ExpとCVCは任意の番号で大丈夫です(Expは今日以降の日付であればOK)。
住所と4242の画面
![住所](https://user-images.githubusercontent.com/60723063/147055375-47ae6cbc-1b82-425a-93b5-b1e199f8a787.png)
![カード情報](https://user-images.githubusercontent.com/60723063/147055418-f2db7d7a-00ea-4f92-8da7-1af45d90f54c.png)


ブランチの扱い方

- feature/#12_replace_to_hamburger_menu といったかんじでブランチを作成
- Issue を立てるとその Issue に番号、例えば#12 が割り振られるので、それをブランチ名に含める
  開発進める
- feature 開発完了
- Issue に書いた内容のタスクが完了したので、develop ブランチにマージコミットする
- main ブランチには直接 push しない

- yarn add node-sass で、css ファイルの記述を sass 形式で書くことができる
