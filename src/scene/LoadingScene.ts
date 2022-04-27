export class LoadingScene extends Phaser.Scene {
    constructor() {
      // シーンのkeyを指定
      super('loading');
    }

    // preload()はシーンが呼び出されたら実行される
    preload() {
      this.load.image('title', 'assets/back/title.png');

    }

    // create()はpreload内のアセットのロードが完了したら実行される
    create() {
      // 描画領域のサイズを取得
      const { width, height } = this.game.canvas;

      // ロゴ画像を中央に表示
      //this.add.image(width/2, height/2, 'logo');

      // テキストをロゴの下に表示
      this.add.text(width/2, height/2 + 60, 'Loading...').setOrigin(0.5);

      // アセットをロード（一度ロードしたアセットは他のシーンでも使用可）
      //背景
      this.load.image('bath','assets/back/bath.jpg');
      this.load.image('coffee_cup','assets/back/coffee_cup.jpg');
      this.load.image('chugaku','assets/back/chugaku.jpg');
      this.load.image('class','assets/back/class.jpg');
      this.load.image('class_b','assets/back/class_b.jpg');
      this.load.image('living','assets/back/living.jpg');
      this.load.image('rusutsu','assets/back/rusutsu.jpg');
      this.load.image('rusutsu_red','assets/back/rusutsu_red.jpg');
      this.load.image('r_class','assets/back/r_class.jpg');
      this.load.image('r_class_black','assets/back/r_class_black.jpg');
      this.load.image('r_hall','assets/back/r_hall.jpg');
      this.load.image('r_hall_black','assets/back/r_hall_black.jpg');
      this.load.image('soen','assets/back/soen.jpg');
      this.load.image('desk','assets/back/desk.jpg');
      this.load.image('mother','assets/back/mother.jpg');
      this.load.image('hanabi','assets/back/hanabi.jpg');
      this.load.image('tv','assets/back/tv.jpg');
      this.load.image('tv_ware','assets/back/tv_ware.jpg');
      this.load.image('glass','assets/back/glass.jpg');
      this.load.image('brother','assets/back/brother.jpg');
      this.load.image('neko','assets/back/neko.jpg');
      this.load.image('ocha','assets/back/ocha.jpg');
      this.load.image('rei','assets/back/rei.jpg');
      this.load.image('pre01','assets/back/pre1.jpg');
      this.load.image('pre02','assets/back/pre2.jpg');
      this.load.image('pre03','assets/back/pre3.jpg');
      this.load.image('pre04','assets/back/pre4.jpg');
      this.load.image('pre05','assets/back/pre5.jpg');
      this.load.image('pre06','assets/back/pre6.jpg');
      this.load.image('pre07','assets/back/pre7.jpg');
      this.load.image('pre08','assets/back/pre8.jpg');
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
      this.load.image('heneko','assets/stand/heneko.jpg');
      this.load.image('deresute','assets/stand/deresute.png');
      this.load.image('osage','assets/stand/osage.png');
      this.load.image('hair','assets/stand/hair.png');
      this.load.image('long_hair','assets/stand/long_hair.png');
      this.load.image('hentai','assets/stand/hentai.png');
      //this.load.image('','assets/stand/.png');

      //効果音
      this.load.audio('basa','assets/audio/basa.mp3');
      this.load.audio('bishi','assets/audio/bishi.mp3');
      this.load.audio('gacha','assets/audio/gacha.mp3');
      this.load.audio('hirameki','assets/audio/hirameki.mp3');
      this.load.audio('ka-n_kaka','assets/audio/ka-n_kaka.mp3');
      this.load.audio('kirakira','assets/audio/kirakira.mp3');
      this.load.audio('kiran','assets/audio/kiran.mp3');
      this.load.audio('levelup','assets/audio/levelup.mp3');
      this.load.audio('samu','assets/audio/samu.mp3');
      this.load.audio('scared','assets/audio/scared.mp3');
      this.load.audio('shock','assets/audio/shock.mp3');
      this.load.audio('tin','assets/audio/tin.mp3');
      this.load.audio('ware','assets/audio/ware.mp3');
      this.load.audio('sfc','assets/audio/sfc.mp3');
      this.load.audio('pc','assets/audio/pc.mp3');
      this.load.audio('mekuru','assets/audio/mekuru.mp3');
      this.load.audio('write','assets/audio/write.mp3');
      //this.load.audio('','assets/audio/.mp3');

      // アセットのロードが完了したらTitleSceneに遷移
      this.load.on('complete', () => {
        this.scene.start('title');
      });

      // アセットのロードを開始（preload外でロードを行う場合はこのメソッドを呼ぶ必要がある）
      this.load.start();
    }
  }