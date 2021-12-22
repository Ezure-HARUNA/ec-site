# タイトルと概要、URL

## タイトル

CRWN Clothing

## 概要

洋服専門の EC サイトです。
5 つのジャンルごとに商品があります。

## URL

http://Ezure-HARUNA.github.io/ec-site

## 使用技術

- React 17.0.2
- react-dom 17.0.2
- react-redux" 7.2.6
- react-router-dom 5,
- react-stripe-checkout 2.6.3
- redux-logger 3.0.6
- redux-persist 6.0.0
- reselect 4.1.5
- firebase 9.6.1
  (以降追加予定技術)
- Hooks
- GraphQL
- ContextAPI

# 機能

- ユーザー登録、ログイン、ログアウト機能(メールアドレス・パスワード、Google による認証)
- カートに商品を追加する機能
- チェックアウト後、商品の数を編集する機能、商品を削除する機能
- 決済機能

# 使い方

ユーザー登録・ログイン後、ホーム画面に遷移します。テストログインは下記の入力でできます</br>
email: usera@gmail.com</br>
password: 111111</br>
<img src="https://user-images.githubusercontent.com/60723063/147054908-6adf6912-046e-4f1a-ba7f-fe16b0b98975.png" width="400" >
</br>
</br>

ホーム画面にジャンル一覧があり、クリックするとジャンルごとに商品を見ることが可能です
<img src="https://user-images.githubusercontent.com/60723063/147055087-4ab82faa-87e3-49ab-a915-6e26c6cc5702.png" alt="ホーム画面" width="330" >
<img src="https://user-images.githubusercontent.com/60723063/147055130-c203cb92-7600-459f-9de5-19a1768d30c1.png" alt="ジャンルごと" width="330" >
</br>
</br>

ヘッダーの SHOP メニューから、全商品一覧を閲覧することも可能です。</br>
商品画像状にある ADD TO CART ボタンを押すことで、商品を追加できます</br>

</br>
</br>

ヘッダーのカートアイコンを押すと、カート内の商品を閲覧できます。</br>
このポップアップからチェックアウトできます。
<img src="https://user-images.githubusercontent.com/60723063/147055295-bf4939bf-d491-4cb6-aa21-d4778a38be68.png" alt="ポップアップ" width="400" >
</br>
</br>

チェックアウト画面では、商品の数の編集や商品の削除ができます。</br>
下の Pay Now ボタンから決済を行うことができます。
<img src="https://user-images.githubusercontent.com/60723063/147055332-748df7e2-31b0-45af-af4c-ff1d90b17ef8.png" alt="チェックアウト" width="400" >
</br>
</br>

テスト用のクレジットカード番号は 4242 4242 4242 4242 です。</br>
Exp と CVC は任意の番号で大丈夫です(Exp は今日以降の日付であれば OK)。

<img src="https://user-images.githubusercontent.com/60723063/147055375-47ae6cbc-1b82-425a-93b5-b1e199f8a787.png" alt="住所" width="330" >
<img src="https://user-images.githubusercontent.com/60723063/147055418-f2db7d7a-00ea-4f92-8da7-1af45d90f54c.png" alt="カード情報" width="330" >
</br>
</br>

# 使い方

`git clone git@github.com:Ezure-HARUNA/ec-site.git`</br>
`cd ec-site`</br>
`yarn`</br>
</br>

# Auther

https://github.com/Ezure-HARUNA/

# Licence

This software is released under the MIT License, see LICENSE.txt.

</br>
</br>
</br>

※以下は自分用へのメモです

# 備考

GitHub pages を更新したい場合
`yarn run deploy`で更新する(一日の回数に限度がある)

# ブランチの扱い方

- feature/#12_replace_to_hamburger_menu といったかんじでブランチを作成
- Issue を立てるとその Issue に番号、例えば#12 が割り振られるので、それをブランチ名に含める
  開発進める
- feature 開発完了
- Issue に書いた内容のタスクが完了したので、develop ブランチにマージコミットする
- main ブランチには直接 push しない

- yarn add node-sass で、css ファイルの記述を sass 形式で書くことができる
