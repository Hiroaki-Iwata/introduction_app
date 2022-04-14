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
      //背景
      this.load.image('bath','assets/back/bath.jpg');
      this.load.image('coffee_cup','assets/back/coffee_cup.jpg');
      this.load.image('chugaku','assets/back/chugaku.jpg');
      this.load.image('class','assets/back/class.jpg');
      this.load.image('living','assets/back/living.jpg');
      this.load.image('rusutsu','assets/back/rusutsu.jpg');
      this.load.image('r_class','assets/back/r_class.jpg');
      this.load.image('r_hall','assets/back/r_hall.jpg');
      this.load.image('soen','assets/back/soen.jpg');
      this.load.image('desk','assets/back/desk.jpg');
      this.load.image('mother','assets/back/mother.jpg');
      this.load.image('hanabi','assets/back/hanabi.jpg');
      this.load.image('tv','assets/back/tv.jpg');
      //立ち絵
      this.load.image('atama','assets/stand/atama.png');
      this.load.image('boling','assets/stand/boling.png');
      this.load.image('kaere','assets/stand/kaere.png');
      this.load.image('mawasu','assets/stand/mawasu.png');
      this.load.image('oko_utsugi','assets/stand/oko_utsugi.png');
      this.load.image('omoitsuki_utsugi','assets/stand/omoitsuki_utsugi.png');
      this.load.image('osuwari','assets/stand/osuwari.png');
      this.load.image('oteage','assets/stand/oteage.png');
      this.load.image('reja','assets/stand/reja.png');
      this.load.image('shinshi','assets/stand/shinshi.png');
      this.load.image('think','assets/stand/think.png');
      this.load.image('ukiuki','assets/stand/ukiuki.png');
      this.load.image('unadare','assets/stand/unadare.png');
      this.load.image('utsugi','assets/stand/utsugi.png');
      this.load.image('uwa','assets/stand/uwa.png');
      //this.load.image('','assets/back/.jpg');
      //TODO:一個のスプライト画像にして読み込みを高速化する
      //TODO:余力があればHerokuにデプロイしてCDNを利用する


      // アセットのロードが完了したらTitleSceneに遷移
      this.load.on('complete', () => {
        this.scene.start('title');
      });

      // アセットのロードを開始（preload外でロードを行う場合はこのメソッドを呼ぶ必要がある）
      this.load.start();
    }
  }