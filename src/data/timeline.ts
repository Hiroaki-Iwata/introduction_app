import { Timelines } from '../type/Timelines';

//TODO:効果音・BGMの実装
//TODO:高校生編の描写を丁寧に
//TODO クレジット

export const timelineData: Timelines = {
  start: [
      {type: 'dialog',text:'どのシナリオをプレイしますか？▼'},
      {type: 'timelineTransition', timelineID: 'choice_scenario'},//どこのタイムラインに飛ばすか
  ],
  choice_scenario: [//シナリオ選択
    {type: 'choice', choices: [
      {text: '自己紹介', timelineID: 'intro'},
      {text: '小学生の章', timelineID: 'syo01'},
      {text: '中学生の章', timelineID: 'chu01'},
      {text: '高校生の章', timelineID: 'kou01'}
    ]}
  ],
  intro:[
    {type:'dialog', text:'私は岩田大明（ひろあき）といいます。'},
    {type:'dialog', text:'北海道札幌出身で、大学時代から一人暮らししていました。'},
    {type:'dialog', text:'趣味はゲームで、ゼル伝、スプラトゥーン、APEXなどやってました。'},
    {type:'dialog', text:'基本的にはRPGが好きです。ロマサガ、MOTHER2、FFシリーズ、DQシリーズ、クロノトリガー、ペルソナシリーズ、スーパーマリオRPG、ポケモン、キングダムハーツ、ダークソウル、ニーアなど・・・'},
    {type:'dialog', text:'古いゲームも新しいゲームも好きです。実家にあったスーファミを今住んでるところに持ってくるくらいにはスーファミ好きです。'},
    {type:'dialog', text:'これからご指導ご鞭撻のほど、よろしくお願いいたします。'},
    {type: 'timelineTransition', timelineID: 'choice_scenario'},
  ],
//--------------------------------------------------------------
  syo01: [//小学生開始_ヒロインの名前編
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'mother'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '-----ヒロインの名前編-----'},
    {type: 'dialog', text: 'MOTHER2やろうっと ▼',actorName: '小学生岩田'},
    {type: 'dialog', text: '僕はMOTHER2のカセットに息を吹きかけて本体に挿し、スーパーファミコンを起動した。▼'},
    {type: 'dialog', text: 'ヒロインの名前かぁ▼',actorName: '小学生岩田'},
    {type: 'timelineTransition', timelineID: 'choice_syo01'},
  ],
  choice_syo01: [//小学生：ヒロイン名前どうする
    {type: 'setBackground', x: 400, y: 300, key: 'mother'},
    {type: 'dialog', text: 'ヒロインの名前を自分で付けられるようだが、どうする？▼'},
    {type: 'choice', choices: [
      {text: 'デフォルトの名前をつける', timelineID: 'syo01_x'},
      {text: 'クラスの好きな子の名前をつける', timelineID: 'syo01_o'},
    ]}
  ],
  syo01_x: [//不正解の場合選択肢に戻す
    {type: 'setBackground', x: 400, y: 300, key: 'mother'},
    {type: 'dialog', text: 'デフォルトにしようかな・・・▼', actorName: '小学生岩田'},
    {type: 'dialog', text: 'いや、そんなの味気ないよな！考え直そう！▼', actorName: '小学生岩田'},
    {type: 'timelineTransition', timelineID: 'choice_syo01'}
  ],
  syo01_o: [//正解の場合は次のシーンへ
    {type: 'setBackground', x: 400, y: 300, key: 'mother'},
    {type: 'dialog', text: '好きな子の名前つけちゃおう！ヒロインだし。▼', actorName: '小学生岩田'},
    {type: 'dialog', text: 'ゲームの中のヒロインは、自分に忠実に従ってくれた。▼'},
    {type: 'dialog', text: 'しかも、終盤では超親密な関係になっている！▼'},
    {type: 'dialog', text: '・・・・・▼'},
    {type: 'dialog', text: 'しかし、僕は気づいてしまった。▼'},
    {type: 'dialog', text: '現実の好きな子は、自分に見向きもしていなかったことを。▼'},
    {type: 'dialog', text: 'ゲームと現実の差で虚しさがこみ上げてきた。▼'},
    {type: 'dialog', text: '-----ヒロインの名前編 END-----'},
    {type: 'timelineTransition', timelineID: 'syo02'}
  ],
  syo02: [//謎の正義感編
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'soen'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '-----謎の正義感編-----'},
    {type: 'dialog', text: '小学6年生の秋、岩田には人生最初で最後のモテ期が訪れていた。▼'},
    {type: 'addForeground', x: 400, y: 300, key: 'osage'},
    {type: 'dialog', text: '手紙渡せって言われたから、はい。▼',actorName:'女子A'},
    {type: 'timelineTransition', timelineID: 'syo02a'}
  ],
  syo02a: [
    {type: 'setBackground', x: 400, y: 300, key: 'soen'},
    {type: 'addForeground', x: 400, y: 300, key: 'ukiuki'},
    {type: 'dialog', text: '同時に3人からのラブレターを受け取った俺は歓喜していた。▼'},
    {type: 'dialog', text: 'モテているという事実にもそうだが、なんとその中に自分の好きな人がいたのだ！▼'},
    {type: 'timelineTransition', timelineID: 'choice_syo02'}
  ],
  choice_syo02:[
    {type: 'setBackground', x: 400, y: 300, key: 'soen'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: 'どうしよう？▼'},
    {type: 'choice', choices: [
      {text: 'じゃあ両想いじゃん！好きな子ににOKの返事をしよう！', timelineID: 'syo02_x'},
      {text: 'ちょっと待てよ・・・？', timelineID: 'syo02_o'},
    ]}
  ],
  syo02_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'soen'},
    {type: 'addForeground', x: 400, y: 300, key: 'atama'},
    {type: 'dialog', text: 'OKしようかな・・・▼',actorName:'小学生岩田'},
    {type: 'dialog', text: 'いや待て、考えろ。▼',actorName:'小学生岩田'},
    {type: 'timelineTransition', timelineID: 'syo02_xa'}
  ],
  syo02_xa:[
    {type: 'setBackground', x: 400, y: 300, key: 'soen'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: '僕はガリレオの福山雅治の気持ちになってポーズをとり、思考の海に飛び込んだ。▼'},
    {type: 'timelineTransition', timelineID: 'syo02_o'}
  ],
  syo02_o:[
    {type: 'setBackground', x: 400, y: 300, key: 'soen'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: 'ここで岩田の意味不明な思考が働き始める。▼'},
    {type: 'dialog', text: '3人の中から1人を選ぶなんてかわいそうじゃないか・・・？▼',actorName:'小学生岩田'},
    {type: 'timelineTransition', timelineID: 'syo02_oa'}
  ],
  syo02_oa:[
    {type: 'setBackground', x: 400, y: 300, key: 'soen'},
    {type: 'addForeground', x: 400, y: 300, key: 'uwa'},
    {type: 'dialog', text: 'み○みちゃんのことは好きだけど、1人選ぶなんてできないよ！▼',actorName:'小学生岩田'},
    {type: 'dialog', text: '謎の正義感（？）により、全員振ってしまった岩田。▼'},
    {type: 'timelineTransition', timelineID: 'syo02_ob'}
  ],
  syo02_ob:[
    {type: 'setBackground', x: 400, y: 300, key: 'soen'},
    {type: 'addForeground', x: 400, y: 300, key: 'unadare'},
    {type: 'dialog', text: '好きな子からは避けられ、このことをしばらく後悔したのだった・・・▼'},
    {type: 'dialog', text: '-----謎の正義感編 END-----'},
    {type: 'timelineTransition', timelineID: 'syo03'}
  ],
  syo03: [//ボウリングゲーム編
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'tv'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '-----ボウリングゲーム編-----'},
    {type: 'dialog', text: '家に液晶テレビが来た。▼'},
    {type: 'dialog', text: 'それまでは、ブラウン管のテレビしかなかったが、大きく薄いテレビになったのだ。▼'},
    {type: 'addForeground', x: 400, y: 300, key: 'ukiuki'},
    {type: 'dialog', text: 'ゲームが大きい画面でできる！▼',actorName:'小学生岩田'},
    {type: 'dialog', text: '僕はボウリングゲームを起動した。▼'},
    {type: 'dialog', text: 'ボウリングの球の形のコントローラーを投げるフリをして操作するゲームだ。▼'},
    {type: 'timelineTransition', timelineID: 'choice_syo03'}
  ],
  choice_syo03:[
    {type: 'setBackground', x: 400, y: 300, key: 'tv'},
    {type: 'dialog', text: '手首に安全用のストラップをつける？▼'},
    {type: 'choice', choices: [
      {text: 'つけよう！', timelineID: 'syo03_x'},
      {text: 'つけない！', timelineID: 'syo03_o'},
    ]}
  ],
  syo03_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'tv'},
    {type: 'dialog', text: 'つけよう！▼',actorName:'小学生岩田'},
    {type: 'dialog', text: '・・・としたがゲームを操作しているうちに忘れてしまった。▼'},
    {type: 'timelineTransition', timelineID: 'syo03_oa'}
  ],
  syo03_o:[
    {type: 'setBackground', x: 400, y: 300, key: 'tv'},
    {type: 'dialog', text: 'めんどくさいからいいや！▼',actorName:'小学生岩田'},
    {type: 'dialog', text: '僕は安全用のストラップを付けなかった。▼'},
    {type: 'timelineTransition', timelineID: 'syo03_oa'}
    ],
  syo03_oa:[
    {type: 'setBackground', x: 400, y: 300, key: 'tv'},
    {type: 'dialog', text: 'ヨシ！ボウリング投げるぞー！▼',actorName:'小学生岩田'},
    {type: 'addForeground', x: 400, y: 300, key: 'boling'},
    {type: 'dialog', text: '振りかぶって・・・・・アッ！▼',actorName:'小学生岩田'},
    {type: 'dialog', text: '完全にリアルボウリングの気分でいた僕は、ボウリング玉型コントローラーをテレビに向かってぶん投げてしまった。▼'},
    {type: 'timelineTransition', timelineID: 'syo03_ob'}
  ],
  syo03_ob:[
    //がちゃんの音
    {type: 'setBackground', x: 400, y: 300, key: 'tv_ware'},
    {type: 'addForeground', x: 400, y: 300, key: 'oteage'},
    {type: 'dialog', text: '目の前の光景が理解できなかった。▼'},
    {type: 'dialog', text: '新しいテレビの液晶が割れてバッキバキになっているではないか！▼'},
    {type: 'dialog', text: 'ガチャ▼'},
    {type: 'dialog', text: '母親が帰ってきてしまった！▼'},
    {type: 'dialog', text: '！！！！！！！？？？？？？▼',actorName:'岩田母'},
    {type: 'dialog', text: '・・・・・▼'},
    {type: 'timelineTransition', timelineID: 'syo03_oc'}
  ],
  syo03_oc:[
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'living'},
    {type: 'addForeground', x: 400, y: 300, key: 'unadare'},
    {type: 'fadeIn'},
    {type: 'dialog', text: 'その後、ガチで狂乱した母親に顔面3センチの距離で詰められていたらしいが、そのことを僕は覚えていない。▼'},
    {type: 'dialog', text: '母親がキレすぎてちょっと引き気味になった父親は、僕を怒ることはなかった。▼'},
    {type: 'dialog', text: '・・・が、真顔でボウリング球型コントローラーを外に持っていき、地面に叩きつけて破壊したらしい。▼'},
    {type: 'dialog', text: '-----ボウリングゲーム編 END-----'},
    {type: 'sceneTransition', key: 'ending'}
    ],
//-----------------------------------------------------------------
  chu01: [//中学生開始 勘違い男編
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '-----勘違い男編-----'},
    {type: 'dialog', text: '中学に入って女子とはあまり喋る機会は多くなかった。▼'},
    {type: 'addForeground', x: 400, y: 300, key: 'long_hair'},
    {type: 'dialog', text: 'しかし最近、仲良く喋ってくれる女子ができた。▼'},
    {type: 'dialog', text: 'LINEの返信も早く、お互い楽しんでいる自信があった。▼'},
    {type: 'timelineTransition', timelineID: 'choice_chu01'}
  ],
  chu01a: [
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: 'もしかして、俺のこと好きなのかもな（ﾆﾁｬｱ ▼',actorName:'中学生岩田'},
    {type: 'timelineTransition', timelineID: 'choice_chu01'}
  ],
  choice_chu01:[
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: '実際のところ、どう思ってるんだろう？▼'},
    {type: 'choice', choices: [
      {text: '俺のこと好きになっちゃったんだろうなあ・・・(脳死)', timelineID: 'chu01_o'},
      {text: '友達として仲良いだけでどうも思ってないだろう', timelineID: 'chu01_x'},
    ]}
  ],
  chu01_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: '単純に友達として仲がいいだけ・・・▼'},
    {type: 'dialog', text: 'と言う考えは全然頭になかった。▼'},
    {type: 'dialog', text: '頭の中はもうピンク一色だった▼'},
    {type: 'timelineTransition', timelineID: 'chu01_o'}
  ],
  chu01_o:[
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'addForeground', x: 400, y: 300, key: 'ukiuki'},
    {type: 'dialog', text: '俺って罪な男だなあ！▼',actorName:'中学生岩田'},
    {type: 'dialog', text: 'いやもう付き合ってもいいけどね？俺は。▼',actorName:'中学生岩田'},
    {type: 'dialog', text: 'これはもう告白したら余裕だな！！▼',actorName:'中学生岩田'},
    {type: 'timelineTransition', timelineID: 'chu01_oa'}
  ],
  chu01_oa:[
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'chugaku'},
    {type: 'addForeground', x: 400, y: 300, key: 'unadare'},
    {type: 'fadeIn'},
    {type: 'dialog', text: 'その後、本当にただの勘違いで、友達として仲良くしてくれていただけだったことがわかった・・・。▼'},
    {type: 'timelineTransition', timelineID: 'chu01_ob'}
  ],
  chu01_ob:[
    {type: 'setBackground', x: 400, y: 300, key: 'chugaku'},
    {type: 'addForeground', x: 400, y: 300, key: 'atama'},
    {type: 'dialog', text: ''},
    {type: 'timelineTransition', timelineID: 'chu01_oc'}
  ],
  chu01_oc:[
    {type: 'setBackground', x: 400, y: 300, key: 'chugaku'},
    {type: 'addForeground', x: 400, y: 300, key: 'uwa'},
    {type: 'dialog', text: '-----勘違い男編　END-----'},
    {type: 'timelineTransition', timelineID: 'chu02'}
  ],
  chu02: [//キャラなりきり編
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '-----キャラなりきり編-----'},
    {type: 'addForeground', x: 400, y: 300, key: 'osuwari'},
    {type: 'dialog', text: '中学では、朝に読書の時間があった。▼'},
    {type: 'dialog', text: '硬派な文学なんて俺は読めないから、ライトノベルを読もう！▼',actorName:'中学生岩田'},
    {type: 'timelineTransition', timelineID: 'choice_chu02'}
  ],
  choice_chu02:[
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'addForeground', x: 400, y: 300, key: 'heneko'},
    {type: 'dialog', text: '変態紳士・・・？▼',actorName:'中学生岩田'},
    {type: 'choice', choices: [
      {text: 'このキャラウケる、俺も変態紳士キャラで行こう！', timelineID: 'chu02_o'},
      {text: 'こんなのウケるはずないよ。反面教師にしよう。', timelineID: 'chu02_x'},
    ]}
  ],
  chu02_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: 'こんなのウケるはずがない。▼'},
    {type: 'dialog', text: '・・・と、普通の人なら思うだろう。▼'},
    {type: 'dialog', text: '中坊の岩田はおめでたい脳みそをしていたのだ！▼'},
    {type: 'timelineTransition', timelineID: 'choice_chu02'}
  ],
  chu02_o:[
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'addForeground', x: 400, y: 300, key: 'shinshi'},
    {type: 'dialog', text: 'ロウきゅーぶの主人公、アマガミの主人公、ギャグ漫画日和のクマ吉くん・・・▼'},
    //TODO　一人一人モザイク入れて挿入する？
    {type: 'dialog', text: 'それらをモデルに俺は変態紳士を演じた。▼'},
    {type: 'timelineTransition', timelineID: 'chu02_oa'}
    ],
  chu02_oa:[
    {type: 'setBackground', x: 400, y: 300, key: 'class_b'},
    {type: 'addForeground', x: 400, y: 300, key: 'shinshi'},
    {type: 'dialog', text: 'しかし、知らない人から見たらただの気持ち悪い人でしかなかった。▼'},
    {type: 'dialog', text: '-----キャラなりきり編 END-----'},
    {type: 'timelineTransition', timelineID: 'chu03'}
  ],
  chu03: [//英語は苦手編
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'chugaku'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '-----英語は苦手編-----'},
    {type: 'addForeground', x: 400, y: 300, key: 'atama'},
    {type: 'dialog', text: '英語が苦手で、いつも赤点ギリギリだった俺。▼'},
    {type: 'dialog', text: '高校受験を控えているのもあり、頭がいい友達に英語を教えてもらうことにした。▼'},
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'desk'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '冬休み、毎日のように俺の家に来てもらって何時間も勉強をした。▼'},
    {type: 'timelineTransition', timelineID: 'chu03_a'}
  ],
  chu03_a:[
    {type: 'setBackground', x: 400, y: 300, key: 'chugaku'},
    {type: 'addForeground', x: 400, y: 300, key: 'omoitsuki_utsugi'},
    {type: 'dialog', text: 'この文法はこういう意味だから・・・▼',actorName:'友人K'},
    {type: 'timelineTransition', timelineID: 'chu03_b'}
  ],
  chu03_b:[
    {type: 'setBackground', x: 400, y: 300, key: 'chugaku'},
    {type: 'addForeground', x: 400, y: 300, key: 'oteage'},
    {type: 'dialog', text: 'そうなのか！わかってきたぞ！▼',actorName:'中学生岩田'},
    {type: 'dialog', text: '・・・・・▼'},
    {type: 'timelineTransition', timelineID: 'chu03_c'}
  ],
  chu03_c:[
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'chugaku'},
    {type: 'fadeIn'},
    {type: 'addForeground', x: 400, y: 300, key: 'oteage'},
    {type: 'dialog', text: '21点だった！▼',actorName:'中学生岩田'},
    {type: 'dialog', text: '毎日のように勉強を教えてもらったにも関わらず、21点はセンスがないんだろうなと感じた。▼'},
    {type: 'timelineTransition', timelineID: 'chu03_d'}
  ],
  chu03_d:[
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '時は流れ、公立高校のグローバルビジネス科を受験することにした。▼'},
    {type: 'addForeground', x: 400, y: 300, key: 'osuwari'},
    {type: 'dialog', text: 'では、面接を始めます。▼',actorName:'面接官'},
    {type: 'dialog', text: '・・・・・▼'},
    {type: 'dialog', text: '岩田さんは、苦手な教科はありますか？▼',actorName:'面接官'},
    {type: 'timelineTransition', timelineID: 'choice_chu03'}
  ],
  choice_chu03:[
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: 'なんて答えよう？英語は苦手だけど・・・▼'},
    {type: 'choice', choices: [
      {text: '適当にでっち上げようとする', timelineID: 'chu03_x'},
      {text: '正直に英語が苦手と答える', timelineID: 'chu03_o'},
    ]}
  ],
  chu03_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: 'えーと・・・▼',actorName:'中学生岩田'},
    {type: 'dialog', text: '苦手なのは、英語しか思いつかない。▼'},
    {type: 'dialog', text: 'だめた。もう頭が真っ白だ。▼'},
    {type: 'timelineTransition', timelineID: 'choice_chu03'}
  ],
  chu03_o:[
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: 'もうこれは正直に言うしかない！▼'},
    {type: 'timelineTransition', timelineID: 'chu03_oa'}
  ],
  chu03_oa:[
    {type: 'setBackground', x: 400, y: 300, key: 'class'},
    {type: 'addForeground', x: 400, y: 300, key: 'osuwari'},
    {type: 'dialog', text: '英語が苦手です！！▼',actorName:'中学生岩田'},
    {type: 'dialog', text: 'しょうがないじゃん、苦手は苦手だもの。▼'},
    {type: 'dialog', text: 'え？w グローバルビジネス科なのに？w ▼',actorName:'面接官'},
    {type: 'dialog', text: '半笑いで言われた。というか煽ってるだろそれ。▼'},
    {type: 'dialog', text: '・・・・・▼'},
    {type: 'timelineTransition', timelineID: 'chu03_ob'}
  ],
  chu03_ob:[
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'desk'},
    {type: 'addForeground', x: 400, y: 300, key: 'uwa'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '面接官に煽られた男が合格するわけもなく、家から徒歩7分の私立高校に通うことになるのだった・・・。▼'},
    {type: 'dialog', text: '-----英語は苦手編　END-----'},
    {type: 'sceneTransition', key: 'ending'}
  ],
//--------------------------------------------------------------
  kou01: [//高校生編開始_尖ってる岩田くんの章
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'r_hall'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '-----尖ってる岩田くん編-----'},
    {type: 'dialog', text: '・・・・・・ ▼'},
    {type: 'dialog', text: '高校一年生の入学したての頃だった。 ▼'},
    {type: 'dialog', text: '俺は移動教室の時、男子の集団から離れて移動していた。 ▼'},
    {type: 'addForeground', x: 400, y: 300, key: 'utsugi'},
    {type: 'dialog', text: 'なんでお前だけ離れてんの？',actorName:'クラスの男子'},
    {type: 'dialog', text: 'クラスの奴から声をかけられた。▼'},
    {type: 'timelineTransition', timelineID: 'choice_kou01'}
  ],
  choice_kou01:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_hall'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: 'なんて答えよう？▼'},
    {type: 'choice', choices: [
      {text: 'みんなと喋るの恥ずかしくて・・・', timelineID: 'kou01_x'},
      {text: 'お前らと友達だと思われたくなくて', timelineID: 'kou01_o'},
    ]}
  ],
  kou01_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_hall'},
    {type: 'dialog', text: 'みんなと喋るの恥ずかしい・・・▼'},
    {type: 'dialog', text: 'なんてことはなかった。▼'},
    {type: 'dialog', text: '言いたいことはそうじゃなくて・・・▼'},
    {type: 'timelineTransition', timelineID: 'choice_kou01'}
  ],
  kou01_o:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_hall'},
    {type: 'addForeground', x: 400, y: 300, key: 'kaere'},
    {type: 'dialog', text: 'いや、お前らと友達だと思われたくないんだよね▼'},
    {type: 'dialog', text: 'ドヤ顔で言った。▼'},
    {type: 'timelineTransition', timelineID: 'kou01_oa'}
  ],
  kou01_oa:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_hall'},
    {type: 'addForeground', x: 400, y: 300, key: 'utsugi'},
    {type: 'dialog', text: 'え？▼',actorName:'クラスの男子'},
    //TODO 白黒
    {type: 'dialog', text: '空気が凍りついた・・・▼'},
    {type: 'dialog', text: '-----尖ってる岩田くん編 END-----'},
    {type: 'timelineTransition', timelineID: 'kou02'}
  ],
  kou02: [//無限課金の章
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '-----課金倍プッシュ編-----'},
    {type: 'dialog', text: '高校2年の授業中、俺は隠れてスマホのゲームをしていた。▼'},
    {type: 'addForeground', x: 400, y: 300, key: 'deresute'},
    {type: 'dialog', text: 'うわ、ウエディング衣装じゃん。これは引きたい！▼',actorName:'高校生岩田'},
    {type: 'timelineTransition', timelineID: 'choice_kou02'}
  ],
  choice_kou02:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'dialog', text: 'どうしよう？▼'},
    {type: 'choice', choices: [
      {text: '口座にあるバイト代を倍プッシュ', timelineID: 'kou02_o'},
      {text: '無償アイテムで引けなかったら諦める', timelineID: 'kou02_x'},
    ]}
  ],
  kou02_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'addForeground', x: 400, y: 300, key: 'oteage'},
    {type: 'dialog', text: '無償のガチャアイテム全部使っちゃった・・・▼',actorName:'高校生岩田'},
    {type: 'dialog', text: 'しかもなにも出ないし・・・▼',actorName:'高校生岩田'},
    {type: 'dialog', text: 'もうこれは課金するしか！？▼',actorName:'高校生岩田'},
    {type: 'timelineTransition', timelineID: 'choice_kou02'}
  ],
  kou02_o:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'addForeground', x: 400, y: 300, key: 'atama'},
    {type: 'dialog', text: '・・・・・▼'},
    {type: 'dialog', text: 'もうこれで限界!3万!!!▼',actorName:'高校生岩田'},
    {type: 'timelineTransition', timelineID: 'kou02_oa'}
  ],
  kou02_oa:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'addForeground', x: 400, y: 300, key: 'uwa'},
    {type: 'dialog', text: '出なかった・・・・▼',actorName:'高校生岩田'},
    {type: 'timelineTransition', timelineID: 'kou02_ob'}
  ],
  kou02_ob:[
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '-----授業後-----'},
    {type: 'addForeground', x: 400, y: 300, key: 'utsugi'},
    {type: 'dialog', text: 'どした？そんなうなだれて。そんな凹む授業じゃないだろ。▼',actorName:'クラスメイト'},
    {type: 'timelineTransition', timelineID: 'kou02_oc'}
  ],
  kou02_oc:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'addForeground', x: 400, y: 300, key: 'unadare'},
    {type: 'dialog', text: '授業中課金して爆死したんだわ・・・▼',actorName:'高校生岩田'},
    {type: 'dialog', text: '-----課金倍プッシュ編　END-----'},
    {type: 'timelineTransition', timelineID: 'kou03'}
  ],
  kou03: [//花火大会チキンの章
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'hanabi'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '-----花火大会チキン編-----'},
    {type: 'dialog', text: '好きな子を交えて男女4人で花火大会に行くことになった。▼'},
    {type: 'dialog', text: '当日、天気がいいとはいえず、花火が始まる前に雨が降ってきた。▼'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: '傘持ってきてないぞ。▼',actorName:'高校生岩田'},
    {type: 'dialog', text: '友人は辺りを見渡して、俺にこっそり耳打ちしてきた。▼'},
    {type: 'timelineTransition', timelineID: 'kou03a'}
  ],
  kou03a: [
    {type: 'setBackground', x: 400, y: 300, key: 'hanabi'},
    {type: 'addForeground', x: 400, y: 300, key: 'omoitsuki_utsugi'},
    {type: 'dialog', text: 'レジャーシートで女の子を雨から守るぞ・・・！▼',actorName:'友人T'},
    {type: 'timelineTransition', timelineID: 'choice_kou03'}
  ],
  choice_kou03:[
    {type: 'setBackground', x: 400, y: 300, key: 'hanabi'},
    {type: 'addForeground', x: 400, y: 300, key: 'reja'},
    {type: 'dialog', text: '友人の機転で女の子と2人きりのような状態に持っていくことができた！▼'},
    {type: 'dialog', text: '雨で会話も他の人に聞かれないだろうし、なんの話をしよう？▼'},
    {type: 'choice', choices: [
      {text: 'チャンスだ!次のデート誘おう!', timelineID: 'kou03_x'},
      {text: 'とりあえず機嫌を取らなきゃ。', timelineID: 'kou03_o'},
    ]}
  ],
  kou03_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'hanabi'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: 'なんて思いつきもしなかった。▼'},
    {type: 'dialog', text: 'チキンな俺は、デートに誘えるはずもなく、どう女の子の機嫌を取ろうか考えていた。▼'},
    {type: 'timelineTransition', timelineID: 'kou03_oa'}
  ],
  kou03_o:[
    {type: 'setBackground', x: 400, y: 300, key: 'hanabi'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: 'それから俺は、機嫌を取ることに終始していた。▼'},
    {type: 'timelineTransition', timelineID: 'kou03_oa'}
  ],
  kou03_oa:[
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '---後日---'},
    {type: 'addForeground', x: 400, y: 300, key: 'oko_utsugi'},
    {type: 'dialog', text: 'なんで2人きりにしたのにデートも誘わないんだ!▼',actorName:'友人T'},
    {type: 'dialog', text: 'しこたま怒られた。▼'},
    {type: 'dialog', text: '-----花火大会チキン編　END-----'},
    {type: 'timelineTransition', timelineID: 'kou04'}
  ],
  kou04: [//悪夢のコーヒーカップの章
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'rusutsu'},
    {type: 'fadeIn'},
    {type: 'dialog', text: '-----コーヒーカップ無限回転編-----'},
    {type: 'dialog', text: '男女5人で遊園地に行った時のこと。▼'},
    {type: 'dialog', text: 'ジャンケンで負けた2人がコーヒーカップに乗って全力で回すという罰ゲームが開催された。▼'},
    {type: 'addForeground', x: 400, y: 300, key: 'ukiuki'},
    {type: 'dialog', text: '負けてしまったが、好きな子と2人で乗ることになった！▼'},
    {type: 'timelineTransition', timelineID: 'choice_kou04'}
  ],
  choice_kou04:[
    {type: 'setBackground', x: 400, y: 300, key: 'rusutsu'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: 'どうしよう？▼'},
    {type: 'choice', choices: [
      {text: 'さすがに全力で回すのはかわいそうだ。手を抜こう', timelineID: 'kou04_x'},
      {text: 'よっしゃ！罰ゲームだし全力で行くぜ！', timelineID: 'kou04_o'},
    ]}
  ],
  kou04_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'rusutsu'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: '手を抜こうかな？▼'},
    {type: 'dialog', text: 'うーん、でもそれじゃあつまらないよな▼！'},
    {type: 'timelineTransition', timelineID: 'choice_kou04'}
  ],
  kou04_o:[
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'coffee_cup'},
    {type: 'fadeIn'},
    {type: 'addForeground', x: 400, y: 300, key: 'mawasu'},
    {type: 'dialog', text: '回せ回せ！！！！！！▼',actorName:'高校生岩田'},
    {type: 'dialog', text: '調子に乗った俺は、何も考えずにコーヒーカップをぶん回し続けた。▼'},
    {type: 'dialog', text: '・・・・・▼'},
    {type: 'timelineTransition', timelineID: 'kou04_oa'}
  ],
  kou04_oa:[
    {type: 'fadeOut'},
    {type: 'setBackground', x: 400, y: 300, key: 'rusutsu'},
    {type: 'fadeIn'},
    {type: 'addForeground', x: 400, y: 300, key: 'hair'},
    {type: 'dialog', text: 'どうやら、俺が回しすぎたせいで気分が悪くなったようだ。▼'},
    {type: 'dialog', text: '他の人はジェットコースターに乗りに行ったが、その子は休むと言う。▼'},
    {type: 'timelineTransition', timelineID: 'kou04_ob'}
  ],
  kou04_ob:[
    {type: 'setBackground', x: 400, y: 300, key: 'rusutsu'},
    {type: 'addForeground', x: 400, y: 300, key: 'think'},
    {type: 'dialog', text: '大丈夫？▼',actorName:'高校生岩田'},
    {type: 'dialog', text: '俺が聞いた、その時だった。▼'},
    {type: 'timelineTransition', timelineID: 'kou04_oc'}
  ],
  kou04_oc:[
    {type: 'setBackground', x: 400, y: 300, key: 'rusutsu_black'},
    {type: 'addForeground', x: 400, y: 300, key: 'hair'},
    {type: 'dialog', text: '   お  前  の  せ  い  だ  ',actorName:'女子M'},
    {type: 'dialog', text: '真顔で、しかも聞いたこともない声色だった。▼'},
    {type: 'timelineTransition', timelineID: 'kou04_od'}
  ],
  kou04_od:[
    {type: 'setBackground', x: 400, y: 300, key: 'rusutsu'},
    {type: 'addForeground', x: 400, y: 300, key: 'unadare'},
    {type: 'dialog', text: 'この日はそれ以降、世界の終わりが来たような顔をしていたそうだ。▼'},
    {type: 'dialog', text: '-----コーヒーカップ無限回転編　END-----'},
    {type: 'sceneTransition', key: 'ending'}
  ],




}

/*
startというタイムラインを作るのと、
各タイムラインの最後は必ず
choice か timelineTransition か sceneTransition で
終わるようにすればあとは自由
画像はassets に入れて loadingScene.ts に書けばおk
*/

//{type: 'addForeground', x: 400, y: 300, key: 'robot'},
/*         {type: 'setBackground', x: 400, y: 300, key: 'street'},
        {type: 'addForeground', x: 400, y: 300, key: 'robot'},
        {type: 'dialog', text: '一刻も早くここから逃げた方がいい ▼'},

                {type: 'setBackground', x: 400, y: 300, key: 'street'},
        {type: 'addForeground', x: 400, y: 300, key: 'robot'},
            {type: 'dialog', text: 'よろしい。ではこちらへ来てください ▼',actorName: 'ACT-42'},
    {type: 'sceneTransition', key: 'ending'}
    {type: 'dialog', text: 'こうして銀河を股にかけた物語が始まるのであった・・・ ▼'},



  syo02: [
    {type: 'setBackground', x: 400, y: 300, key: ''},
    {type: 'dialog', text: ''},
    {type: 'dialog', text: ''},
    {type: 'dialog', text: ''},
    {type: 'dialog', text: '',actorName:''},
    {type: 'dialog', text: ''},
    //{type: 'dialog', text: ''},
    {type: 'timelineTransition', timelineID: 'choice_syo02'}
  ],
  choice_syo02:[
    {type: 'setBackground', x: 400, y: 300, key: ''},
    {type: 'dialog', text: ''},
    {type: 'choice', choices: [
      {text: '', timelineID: 'syo02_x'},
      {text: '', timelineID: 'syo02_o'},
    ]}
  ],
  syo02_x:[
    {type: 'setBackground', x: 400, y: 300, key: ''},
    {type: 'dialog', text: ''},
    {type: 'dialog', text: ''},
    {type: 'dialog', text: ''},
    {type: 'timelineTransition', timelineID: 'choice_syo02'}
  ],
  syo02_o:[
    {type: 'setBackground', x: 400, y: 300, key: ''},
    {type: 'dialog', text: ''},
    {type: 'dialog', text: ''},
    {type: 'dialog', text: ''},
    {type: 'dialog', text: ''},
    {type: 'dialog', text: ''},
    {type: 'timelineTransition', timelineID: 'kou03'}
    ],
    */
