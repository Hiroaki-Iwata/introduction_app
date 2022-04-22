export class TitleScene extends Phaser.Scene {
    constructor() {
      super('title');
    }

    create() {
      const { width, height } = this.game.canvas;

      this.add.image(width/2, height/2, 'title');
      // this.add.text(width/2, height/2, '※これは全て実話です',{fontSize: '40px',color:'red',}).setOrigin(0.5).setPadding(4);
      // this.add.text(
      //   width/2, height/2+50, 'クリックでスタート',{fontSize: '28px',}
      // ).setOrigin(0.5).setPadding(4);

      // 画面を埋めるようなZoneを作成
      const zone = this.add.zone(width/2, height/2, width, height);

      // Zoneをクリックできるように設定
      zone.setInteractive({
        useHandCursor: true  // マウスオーバーでカーソルが指マークになる
      });

      // ZoneをクリックしたらMainSceneに遷移
      zone.on('pointerdown', () => {
        this.scene.start('main', { timelineID: 'start' });
      });
    }
  }