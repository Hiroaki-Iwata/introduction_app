import { Timelines } from '../type/Timelines';

//TODO:文字を１文字ずつ表示するようにする

export const timelineData: Timelines = {
  start: [
      {type: 'dialog',text:'どのシナリオをプレイしますか？▼'},
      {type: 'timelineTransition', timelineID: 'choice_scenario'},//どこのタイムラインに飛ばすか
  ],
  choice_scenario: [//シナリオ選択
    {type: 'choice', choices: [
      {text: '小学生編', timelineID: 'syo01'},
      {text: '中学生編', timelineID: 'chu01'},
      {text: '高校生編', timelineID: 'kou01'}
    ]}
  ],
  syo01: [//小学生編開始
    {type: 'setBackground', x: 400, y: 300, key: 'mother'},
    {type: 'dialog', text: 'MOTHER2やろうっと ▼',actorName: '小学生岩田'},
    {type: 'dialog', text: '僕はMOTHER2のカセットをフーフーして、スーパーファミコンを起動した。▼'},
    {type: 'dialog', text: 'ヒロインの名前かぁ▼',actorName: '小学生岩田'},
    {type: 'timelineTransition', timelineID: 'choice02'},
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
    {type:'dialog', text: 'デフォルトにしようかな・・・'},
    {type:'dialog', text: 'いや、そんなの味気ないよな！考え直そう！', actorName: '小学生岩田'},
    {type: 'timelineTransition', timelineID: 'choice_syo01'}
  ],
  syo01_o: [//正解の場合は次のシーンへ
    {type: 'setBackground', x: 400, y: 300, key: 'mother'},
    {type:'dialog', text: '好きな子の名前つけちゃおう！ヒロインだし。', actorName: '小学生岩田'},
    {type:'dialog', text: 'その後、ゲームと現実の差で虚しさがこみ上げてきた。'},
    {type:'dialog', text: '（安易にギャルゲーに自分の名前つけると虚しくなりますよ）'},
    {type: 'timelineTransition', timelineID: 'syo02'}
  ],



  chu01: [//中学生編開始
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'robot'},
    {type: 'dialog', text: '・・・困りましたね ▼'},
    {type: 'dialog', text: '今は事情を話している暇がないんです ▼'},
    {type: 'dialog', text: 'あなたは捕まるべきではない ▼'},
    {type: 'dialog', text: 'もう一度聞きますね？ ▼'},
    {type: 'timelineTransition', timelineID: 'choice01'}
  ],



  kou01: [//高校生編開始_尖ってる岩田くんの章
    {type: 'setBackground', x: 400, y: 300, key: 'r_hall'},
    {type: 'dialog', text: '・・・・・・ ▼'},
    {type: 'dialog', text: '高校一年生の入学したての頃だった。 ▼'},
    {type: 'dialog', text: '俺は移動教室の時、男子の集団から離れて移動していた。 ▼'},
    {type: 'dialog', text: 'なんでお前だけ離れてんの？',actorName:'クラスの男子'},
    {type: 'dialog', text: 'クラスの奴から声をかけられた。'},
    {type: 'timelineTransition', timelineID: 'choice_kou01'}
  ],
  choice_kou01:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_hall'},
    {type: 'dialog', text: 'なんて答えよう？'},
    {type: 'choice', choices: [
      {text: 'みんなと喋るの恥ずかしくて・・・', timelineID: 'kou01_x'},
      {text: 'お前らと友達だと思われたくなくて', timelineID: 'kou01_o'},
    ]}
  ],
  kou01_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_hall'},
    {type: 'dialog', text: 'みんなと喋るの恥ずかしい・・・'},
    {type: 'dialog', text: 'なんてことはなかった。'},
    {type: 'dialog', text: '言いたいことはそうじゃなくて・・・'},
    {type: 'timelineTransition', timelineID: 'choice_kou01'}
  ],
  kou01_o:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_hall'},
    {type: 'dialog', text: 'いや、お前らと友達だと思われたくないんだよね'},
    {type: 'dialog', text: 'ドヤ顔で言った。'},
    {type: 'dialog', text: '（今も高校の人とは仲がいいのですが、当時は尖ってました。）'},
    {type: 'dialog', text: '（今振り返ると恥ずかしくてしょうがないです。本当に。）'},
    {type: 'dialog', text: '（机に頭叩きつけたいです。あと叫びたい。）'},
    {type: 'timelineTransition', timelineID: 'kou02'}
  ],

  kou02: [//無限課金の章
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'dialog', text: '高校2年の授業中、俺は隠れてスマホのゲームをしていた。'},
    //{type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    //TODO デレステの画像に変更
    {type: 'dialog', text: 'うわ、ウエディング衣装じゃん。これは引きたい！',actorName:'高校生岩田'},
    {type: 'timelineTransition', timelineID: 'choice_kou'}
  ],
  choice_kou02:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'dialog', text: 'どうしよう？'},
    {type: 'choice', choices: [
      {text: '口座にあるバイト代を倍プッシュ', timelineID: 'kou02_o'},
      {text: '無償アイテムで引けなかったら諦める', timelineID: 'kou02_x'},
    ]}
  ],
  kou02_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'dialog', text: '無償のガチャアイテム全部使っちゃった・・・',actorName:'高校生岩田'},
    {type: 'dialog', text: 'しかもなにも出ないし・・・',actorName:'高校生岩田'},
    {type: 'dialog', text: 'もうこれは課金するしか！？',actorName:'高校生岩田'},
    {type: 'timelineTransition', timelineID: 'choice_kou02'}
  ],
  kou02_o:[
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'dialog', text: '・・・・・'},
    {type: 'dialog', text: 'もうこれで限界!3万!!!',actorName:'高校生岩田'},
    {type: 'dialog', text: '出なかった・・・・',actorName:'高校生岩田'},
    {type: 'dialog', text: '--授業後--'},
    {type: 'dialog', text: 'どした？そんなうなだれて。そんな凹む授業じゃないだろ。',actorName:'クラスメイト'},
    {type: 'dialog', text: '授業中課金して爆死したんだわ・・・',actorName:'高校生岩田'},
    {type: 'dialog', text: '(課金はほどほどに、授業真面目に聞きましょう。先生ごめんなさい)'},
    {type: 'timelineTransition', timelineID: 'kou03'}
  ],

  kou03: [//花火大会チキンの章
    {type: 'setBackground', x: 400, y: 300, key: 'hanabi'},
    {type: 'dialog', text: '好きな子を交えて男女4人で花火大会に行くことになった。'},
    {type: 'dialog', text: '当日、天気がいいとはいえず、花火が始まる前に雨が降ってきた。'},
    {type: 'dialog', text: '傘持ってきてないぞ。',actorName:'高校生岩田'},
    {type: 'dialog', text: 'レジャーシートで女の子を雨から守るぞ！',actorName:'友人T'},
    {type: 'dialog', text: '友人の機転で2人きりのような状態に持っていくことができた。'},
    {type: 'timelineTransition', timelineID: 'choice_kou03'}
  ],
  choice_kou03:[
    {type: 'setBackground', x: 400, y: 300, key: 'hanabi'},
    {type: 'dialog', text: '雨で会話も他の人に聞かれないだろうし、なんの話をしよう？'},
    {type: 'choice', choices: [
      {text: 'チャンスだ!次のデート誘おう!', timelineID: 'kou03_x'},
      {text: 'とりあえず機嫌を取らなきゃ。', timelineID: 'kou03_o'},
    ]}
  ],
  kou03_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'hanabi'},
    {type: 'dialog', text: 'なんて思いつきもしなかった。'},
    {type: 'dialog', text: 'チキンな俺は、デートに誘えるはずもなく、どう女の子の機嫌を取ろうか考えていた。'},
    {type: 'dialog', text: ''},
    {type: 'timelineTransition', timelineID: 'choice_kou03'}
  ],
  kou03_o:[
    {type: 'setBackground', x: 400, y: 300, key: 'hanabi'},
    {type: 'dialog', text: 'それから俺は、機嫌を取ることに終始していた'},
    {type: 'setBackground', x: 400, y: 300, key: 'r_class'},
    {type: 'dialog', text: '---後日---'},
    {type: 'dialog', text: 'なんで2人きりにしたのにデートも誘わないんだ!',actorName:'友人T'},
    {type: 'dialog', text: 'しこたま怒られた。'},
    {type: 'dialog', text: '（チキン男は卒業しようと思います）'},
    {type: 'timelineTransition', timelineID: 'kou04'}
  ],

  kou04: [//悪夢のコーヒーカップの章
    {type: 'setBackground', x: 400, y: 300, key: 'rusutsu'},
    {type: 'dialog', text: '男女5人で遊園地に行った時のこと。'},
    {type: 'dialog', text: 'ジャンケンで負けた2人がコーヒーカップに乗って全力で回すという罰ゲームが開催された。'},
    {type: 'dialog', text: '負けてしまったが、好きな子と2人で乗ることになった！'},
    //{type: 'dialog', text: ''},
    {type: 'timelineTransition', timelineID: 'choice_kou04'}
  ],
  choice_kou04:[
    {type: 'setBackground', x: 400, y: 300, key: 'rusutsu'},
    {type: 'dialog', text: 'どうしよう？'},
    {type: 'choice', choices: [
      {text: 'さすがに全力で回すのはかわいそうだ。手を抜こう', timelineID: 'kou04_x'},
      {text: 'よっしゃ！罰ゲームだし全力で行くぜ！', timelineID: 'kou04_o'},
    ]}
  ],
  kou04_x:[
    {type: 'setBackground', x: 400, y: 300, key: 'rusutsu'},
    {type: 'dialog', text: '手を抜こうかな？'},
    {type: 'dialog', text: 'うーん、でもそれじゃあつまらないよな！'},
    {type: 'timelineTransition', timelineID: 'choice_kou04'}
  ],
  kou04_o:[
    {type: 'setBackground', x: 400, y: 300, key: 'coffee_cup'},
    {type: 'dialog', text: '回せ回せ！！！！！！',actorName:'高校生岩田'},
    {type: 'dialog', text: '調子に乗った俺は、何も考えずにコーヒーカップをぶん回した。'},
    {type: 'dialog', text: '・・・・・'},
    {type: 'setBackground', x: 400, y: 300, key: 'rusutsu'},
    {type: 'dialog', text: 'どうやら、俺が回しすぎたせいで気分が悪くなったようだ。'},
    {type: 'dialog', text: '他の人はジェットコースターに乗りに行ったが、その子は休むと言う。'},
    {type: 'dialog', text: '大丈夫？',actorName:'高校生岩田'},
    //TODO 白黒ルスツ画像にする？
    {type: 'dialog', text: ' お 前 の せ い だ ',actorName:'女子M'},
    {type: 'dialog', text: 'この日はそれ以降、世界の終わりが来たような顔をしていたそうだ。'},
    {type: 'dialog', text: '（ノリで調子こくのはやめました）'},
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



kou02: [
  {type: 'setBackground', x: 400, y: 300, key: ''},
  {type: 'dialog', text: ''},
  {type: 'dialog', text: ''},
  {type: 'dialog', text: ''},
  {type: 'dialog', text: '',actorName:''},
  {type: 'dialog', text: ''},
  //{type: 'dialog', text: ''},
  {type: 'timelineTransition', timelineID: 'choice_kou'}
],
choice_kou02:[
  {type: 'setBackground', x: 400, y: 300, key: ''},
  {type: 'dialog', text: ''},
  {type: 'choice', choices: [
    {text: '', timelineID: 'kou02_x'},
    {text: '', timelineID: 'kou02_o'},
  ]}
],
kou02_x:[
  {type: 'setBackground', x: 400, y: 300, key: ''},
  {type: 'dialog', text: ''},
  {type: 'dialog', text: ''},
  {type: 'dialog', text: ''},
  {type: 'timelineTransition', timelineID: 'choice_kou02'}
],
kou02_o:[
  {type: 'setBackground', x: 400, y: 300, key: ''},
  {type: 'dialog', text: ''},
  {type: 'dialog', text: ''},
  {type: 'dialog', text: ''},
  {type: 'dialog', text: ''},
  {type: 'dialog', text: ''},
  {type: 'timelineTransition', timelineID: 'kou03'}
  ],
    */
