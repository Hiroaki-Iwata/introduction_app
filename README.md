# 岩田大明の自己紹介サイト

## 何をするサイトか？
自分の黒歴史みたいなものを追体験してもらうことで、

自分のことを知ってもらおう！という魂胆です。

## 遊び方
最初に自己紹介を見るか小学生・中学生・高校生編を選択できます。

自己紹介と学生編を一つだけでも読んでいただけると嬉しいです！

基本的には過去の岩田が選択肢に直面するので、

「自分ならこうするな」でも「岩田ならこうするな」でも良いので、選択してみてください。

## 開発環境
### 実行環境 Node.js
JavaScriptの実行環境です。

>現在では
>
>「Node.jsはサーバサイドのJavaScript実行環境や
>
>クライアントサイドJavaScriptの開発環境として利用される」
>
>というのが誤解を与えにくいNode.jsの説明になるかと思います。

だそうです。

~~難しいです。~~
### 言語 TypeScript
静的型付けを使ってみたかったので使用しました。

コード補完も強力でストレスフリーな気がします。
### モジュールバンドラー webpack
JavaScriptモジュールを束ねることができるツールです。

詳しくないです。JavaScriptにコンパイルしなくてもローカルで実行できるため使用。
### フレームワーク Phaser3
>PhaserはHTML5ゲームを作成するために使用できる2Dゲームフレームワーク

だそうです。

使用することでコードがかなり短縮されます。

・・・が、日本語の文献がまだ少なく、英語のドキュメントを読むのに苦労しました。

~~Deepl翻訳最高！~~

### バージョン管理 GitHub
以前、自分の製作物がOSのアップデートで動かなくなり、

色々いじくり回した結果取り返しのつかないことになりました。

それ以来ちゃんとGitHubに上げたりバックアップするようになりました。

~~Bitbucketの方が使い勝手良かったけど、移行面倒で結局GitHubです。~~

## 製作について
経緯、参考文献、所感など

### 製作経緯
ノベルゲームを作ってみたかったのですが、

JavaScriptによさそうなフレームワークがあったので

元々勉強しようと思っていたTypeScriptで書いてみようということになりました。

### 実装の参考文献
ゲーム機能の実装部分は

[TypeScriptを使ってノベルゲームを作ろう（Qiita）](https://qiita.com/non_cal/items/622108030aa2e516260c)

を参考にしました。

かなり詳しく書かれていたのでとてもお世話になりました。

ここに書かれていないことは自分で

[Phaser3のドキュメント](https://photonstorm.github.io/phaser3-docs/index.html)

を読んで頑張りました。

### 所感
コードと格闘するのは久しぶりだったので苦戦しましたが、

なんとか形になってよかったと思います。

か○いたちの夜みたいな立ち絵を作りたくて、Photoshopを初めて使用しましたが、

心強い同期が教えてくれてとても助かりました。

Photoshopの被写体を選択という機能、最高です。

なにせ宇津木くんの髪を正確に切り取ってくれましたからね。

## 実装したかったこと
期間の制限もありできなかったことがいくつかあります。

### 一文字ずつ表示
ノベルゲームにありがちな文字を一文字ずつ表示するというのに挑戦しましたが、

同じフレームワークを使っているのに自分の参考にしていたものと書き方が違いすぎて

うまくいきませんでした。

### BGM
自分の書き方だと重要な要素のBGMが

途中でぶった斬られてしまうことに終盤になって気づきました。

修正しようとするとほぼ書き直しなので見送りました・・・。

### フォント
もっとか○いたちの夜のようなフォントが存在していたのですが、

webフォントになかったためソースコードに含めなければならなくなり、

重くなりそうなので泣く泣く実装を見送りました。

## 最後に
通してプレイしていただくと、

「こんな人生送ってきて岩田ができたんだな」と感じていただけるような気がします。多分。

黒歴史とは言いつつ、触れられて嫌なものではないので、

どんどん触れちゃってください。

**というか紹介して全く触れられないのも辛いのでいじってください。**

それから、同期の宇津木くん、立ち絵の出演ありがとうございました。

![宇津木くん](https://pbs.twimg.com/media/FQsBRVsagAA2ovf?format=png&name=900x900)
