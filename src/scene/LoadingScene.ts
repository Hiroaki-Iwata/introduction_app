export class LoadingScene extends Phaser.Scene {
    constructor() {
      // シーンのkeyを指定
      super('loading');
    }

    // preload()はシーンが呼び出されたら実行される
    preload() {
      // ロゴ画像だけは最初から表示したいので予めロード
      // Phaser3のロゴをlabs.phaser.ioから取得しているので、もし公開する際はこの部分は消してください
      this.load.image('logo', '//labs.phaser.io/assets/sprites/phaser3-logo.png');
    }

    // create()はpreload内のアセットのロードが完了したら実行される
    create() {
      // 描画領域のサイズを取得
      const { width, height } = this.game.canvas;

      // ロゴ画像を中央に表示
      this.add.image(width/2, height/2, 'logo');

      // テキストをロゴの下に表示
      this.add.text(width/2, height/2 + 60, 'Loading...').setOrigin(0.5);

      // アセットをロード（一度ロードしたアセットは他のシーンでも使用可）
      this.load.image('bath','assets/bath.jpg');
      this.load.image('coffee_cup','assets/coffee_cup.jpg');
      this.load.image('chugaku','assets/chugaku.jpg');
      this.load.image('class','assets/class.jpg');
      this.load.image('living','assets/living.jpg');
      this.load.image('rusutsu','assets/rusutsu.jpg');
      this.load.image('r_class','assets/r_class.jpg');
      this.load.image('r_hall','assets/r_hall.jpg');
      this.load.image('soen','assets/soen.jpg');
      this.load.image('desk','assets/desk.jpg');
      //this.load.image('','assets/.jpg');


      // アセットのロードが完了したらTitleSceneに遷移
      this.load.on('complete', () => {
        this.scene.start('title');
      });

      // アセットのロードを開始（preload外でロードを行う場合はこのメソッドを呼ぶ必要がある）
      this.load.start();
    }
  }