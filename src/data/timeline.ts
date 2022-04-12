import { Timelines } from '../type/Timelines';

export const timelineData: Timelines = {
  start: [
      {type: 'dialog',text:'どのシナリオをプレイしますか？▼'},
      {type: 'timelineTransition', timelineID: 'choice_scenario'},//どこのタイムラインに飛ばすか
  ],
  choice_scenario: [//シナリオ選択
    {type: 'choice', choices: [
      {text: '小学生編', timelineID: 'syo'},
      {text: '中学生編', timelineID: 'chu'},
      {text: '高校生編', timelineID: 'kou'}
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
    {type: 'timelineTransition', timelineID: 'syo02'}
  ],



  chu: [//中学生編開始
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'robot'},
    {type: 'dialog', text: '・・・困りましたね ▼'},
    {type: 'dialog', text: '今は事情を話している暇がないんです ▼'},
    {type: 'dialog', text: 'あなたは捕まるべきではない ▼'},
    {type: 'dialog', text: 'もう一度聞きますね？ ▼'},
    {type: 'timelineTransition', timelineID: 'choice01'}
  ],
  kou: [//高校生編開始
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'robot'},
    {type: 'dialog', text: '・・・・・・ ▼'},
    {type: 'dialog', text: 'わかりました。それでは私はこれで ▼'},
    {type: 'clearForeground'},
    {type: 'dialog', text: '・・・・・・ ▼'},
    {type: 'dialog', text: 'この後俺は謎の組織に捕まり色々されてしまうのだった・・・ ▼'},
    {type: 'sceneTransition', key: 'ending'}
  ]





  
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
    {type: 'dialog', text: 'こうして銀河を股にかけた物語が始まるのであった・・・ ▼'},*/
