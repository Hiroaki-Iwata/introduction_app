export type DialogBoxConfig = {
    x: number,
    y: number,
    width: number,
    height: number,
    padding?: number,
    margin?: number,
    textStyle?: Phaser.Types.GameObjects.Text.TextStyle
  };

  // Phaser.GameObjects.Containerを継承してDialogBoxを作成
  export class DialogBox extends Phaser.GameObjects.Container {
    private box: Phaser.GameObjects.Rectangle;
    private text: Phaser.GameObjects.Text;

    private padding: number;

    constructor(public scene: Phaser.Scene, { x, y, width, height, padding=10, margin=10, textStyle={} }: DialogBoxConfig) {
      // Phaser.GameObjects.Containerのコンストラクタ
      super(scene, 0, 0);

      // 白枠付きの黒いRectangleを作成
      this.box = new Phaser.GameObjects.Rectangle(this.scene, x, y, width, height, 0x000000).setStrokeStyle(1, 0xffffff);
      this.add(this.box);  // Containerへの追加

      // wordWrap（折り返し設定）を追加した会話テキスト用のTextStyleを作成
      const dialogBoxTextStyle = {
        ...textStyle,
        wordWrap: { width: width - padding*2, useAdvancedWrap: true }  // useAdvancedWrapをtrueにすることで日本語の折り返しが有効になる
      };

      // 会話テキスト用のTextを作成
      this.text = new Phaser.GameObjects.Text(this.scene, x - width/2 + padding, y - height/2 + padding, '', dialogBoxTextStyle);
      this.add(this.text);  // Containerへの追加



      this.padding = padding;
    }

    // 会話テキストのセット
    public setText(text: string) {
      this.text.setText(text);
    }

  }