export class EndingScene extends Phaser.Scene {
  constructor() {
    super('ending');
  }

  create() {
    const { width, height } = this.game.canvas;

    //this.add.image(width/2, height/2, 'logo');
    this.add.text(
      width/2, height/2-120, 'おわり',{fontSize: '40px',}
    ).setOrigin(0.5).setPadding(4);
    this.add.text(
      width/2, height/2-50, '原作:岩田大明',{fontSize: '28px',}
    ).setOrigin(0.5).setPadding(4);
    this.add.text(
      width/2, height/2, '監督:岩田大明',{fontSize: '28px',}
    ).setOrigin(0.5).setPadding(4);
    this.add.text(
      width/2, height/2+50, '撮影:宇津木海斗　岩田大明',{fontSize: '28px',}
    ).setOrigin(0.5).setPadding(4);
    this.add.text(
      width/2, height/2+100, '立ち絵:岩田大明　宇津木海斗　びたちー素材館',{fontSize: '28px',}
    ).setOrigin(0.5).setPadding(4);
    this.add.text(
    width/2, height/2+150, '製作:岩田大明',{fontSize: '28px',}
    ).setOrigin(0.5).setPadding(4);

    const zone = this.add.zone(width/2, height/2, width, height);
    zone.setInteractive({
      useHandCursor: true
    });
    zone.on('pointerdown', () => {
      this.scene.start('title');  // TitleSceneに遷移
    });
  }
}