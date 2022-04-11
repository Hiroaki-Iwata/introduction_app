import { Timelines } from '../type/Timelines';

export const timelineData: Timelines = {
  start: [
    {type: 'dialog', text: '・・・・・・ ▼'},
    {type: 'dialog', text: 'う、うーん・・・ ▼'},
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'dialog', text: 'ここは・・・？ ▼'},
    {type: 'addForeground', x: 400, y: 300, key: 'robot'},
    {type: 'dialog', text: '目が覚めましたか ▼'},
    {type: 'dialog', text: 'アンドロイド・・・？ ▼'},
    {type: 'dialog', text: '私は「ACT-42」 ▼'},
    {type: 'dialog', text: '早速ですが—— ▼'},
    {type: 'dialog', text: 'あなたは追われています ▼'},
    {type: 'dialog', text: '一刻も早くここから逃げた方がいい ▼'},
    {type: 'timelineTransition', timelineID: 'choice01'}
  ],
  choice01: [
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'robot'},
    {type: 'dialog', text: '一緒に逃げましょう ▼'},
    {type: 'choice', choices: [
      {text: 'はい', timelineID: 'choice01_a01'},
      {text: 'いいえ', timelineID: 'choice01_a02'},
      {text: 'アンドロイド風情が話しかけるな', timelineID: 'choice01_a03'}
    ]}
  ],
  choice01_a01: [
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'robot'},
    {type: 'dialog', text: '事情はつかめないけどとりあえず従っておこう ▼'},
    {type: 'dialog', text: 'よろしい。ではこちらへ来てください ▼'},
    {type: 'clearForeground'},
    {type: 'dialog', text: 'こうして銀河を股にかけた物語が始まるのであった・・・ ▼'},
    {type: 'sceneTransition', key: 'ending'}
  ],
  choice01_a02: [
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'robot'},
    {type: 'dialog', text: '・・・困りましたね ▼'},
    {type: 'dialog', text: '今は事情を話している暇がないんです ▼'},
    {type: 'dialog', text: 'あなたは捕まるべきではない ▼'},
    {type: 'dialog', text: 'もう一度聞きますね？ ▼'},
    {type: 'timelineTransition', timelineID: 'choice01'}
  ],
  choice01_a03: [
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
*/