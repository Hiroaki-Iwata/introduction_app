import { Timelines } from '../type/Timelines';

export const timelineData: Timelines = {
    start: [
        {type: 'dialog',text:'どのシナリオをプレイしますか？▼'},
/*         {type: 'setBackground', x: 400, y: 300, key: 'street'},
        {type: 'addForeground', x: 400, y: 300, key: 'robot'},
        {type: 'dialog', text: '一刻も早くここから逃げた方がいい ▼'},*/
        {type: 'timelineTransition', timelineID: 'choice01'},
    ],
    choice01: [
        {type: 'setBackground', x: 400, y: 300, key: 'street'},
        {type: 'addForeground', x: 400, y: 300, key: 'robot'},
        {type: 'choice', choices: [
            {text: '小学生編', timelineID: 'choice01_a01'},
            {text: '中学生編', timelineID: 'choice01_a02'},
            {text: '高校生編', timelineID: 'choice01_a03'}
    ]}
  ],
  choice01_a01: [
    {type: 'setBackground', x: 400, y: 300, key: 'street'},
    {type: 'addForeground', x: 400, y: 300, key: 'robot'},
    {type: 'dialog', text: '事情はつかめないけどとりあえず従っておこう ▼'},
    {type: 'dialog', text: 'よろしい。ではこちらへ来てください ▼',actorName: 'ACT-42'},
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