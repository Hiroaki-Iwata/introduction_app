"use strict";
class NovelDisplay {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas2D = canvas.getContext("2d");
        //位置の初期化
        this.currentColumn = 0;
        this.currentRow = 0;
        this.currentPage = 0;
        //表示領域の指定
        this.maxHeight = 500;
        this.maxWidth = 500;
        //配列を初期化
        this.sentences = new Array();
        this.sentences[0] = new Array();
        this.sentences[0][0] = "";
        //表示間隔とタイマーの初期化
        this.displayInterval = 20;
        this.timer = 0;
        //フォント指定と行の高さ指定
        this.canvas2D.font = "20pt Gothic";
        this.rowHeight = 30;
        this.isAutoNewLine = true;
        this.isEnableSendText = true;
    }
    //1文字列を表示。描画中の場合はfalseを返す
    showOneString(str) {
        //表示中のクリックを受け付けないようにする
        this.isEnableSendText = false;
        //1文字ずつタイマー表示
        var strCount = 0;
        this.timer = window.setInterval(() => {
            if (str.length > strCount) {
                this.showOnechar(str[strCount]);
                strCount++;
            }
            else {
                //タイマーをクリア
                clearInterval(this.timer);
                this.timer = 0;
                //自動改行の場合は改行を追加
                if (this.isAutoNewLine) {
                    this.changeRowOrPage();
                }
                this.isEnableSendText = true;
            }
        }, this.displayInterval);
    }
    //一文字を表示
    showOnechar(oneChar) {
        //次の文字を表示した場合の幅を取得
        var currentWidth = this.canvas2D.measureText(this.sentences[this.currentPage][this.currentRow] + oneChar).width;
        //最大幅を超えたら改行
        if (currentWidth > this.maxWidth) {
            //改行か改ページか判定
            this.changeRowOrPage();
        }
        //文字を表示して格納
        var x = this.canvas2D.measureText(this.sentences[this.currentPage][this.currentRow]).width;
        var y = this.rowHeight * (this.currentRow + 1);
        this.canvas2D.fillText(oneChar, x, y);
        this.currentColumn++;
        this.sentences[this.currentPage][this.currentRow] += oneChar;
    }
    //行もしくはページを変更します
    changeRowOrPage() {
        var nextHeight = (this.currentRow + 1) * (this.rowHeight) + this.rowHeight;
        //最大高さを超えたら改行
        if (nextHeight > this.maxHeight) {
            this.changePage();
        }
        else {
            this.changeRow();
        }
    }
    //行を変更
    changeRow() {
        //列数を追加して行情報をクリア
        this.currentRow++;
        this.currentColumn = 0;
        this.sentences[this.currentPage][this.currentRow] = "";
    }
    //ページを変更
    changePage() {
        //ページをインクリメントして表示位置をリセット
        this.currentPage++;
        this.currentRow = 0;
        this.currentColumn = 0;
        this.sentences[this.currentPage] = new Array();
        this.sentences[this.currentPage][0] = "";
        //表示をクリア
        this.canvas2D.clearRect(0, 0, this.maxWidth, this.maxHeight);
    }
}
window.onload = () => {
    //表示文字列
    var tList = [
        "ようやく覚えたボーゲンでなんとか麓のレストハウスまでたどり着き、ぼくは一息ついていた。",
        "真理はそんなぼくの目の前で、雪をけたてて鮮やかに止まった。",
        "ゴーグルが粉雪まみれになって、何も見えない。",
    ];
    //キャンバスを取得して表示クラスに渡す
    var canvas = document.getElementById('canvas1');
    var novel = new NovelDisplay(canvas);
    var currentTxtIndex = 0;
    function write() {
        //テスト用にループ
        if (tList.length <= currentTxtIndex) {
            currentTxtIndex = 0;
        }
        //２重クリック防止
        if (novel.isEnableSendText) {
            novel.showOneString(tList[currentTxtIndex]);
            currentTxtIndex++;
        }
    }
    //クリック時に呼び出し
    canvas.onclick = write;
};
//# sourceMappingURL=novel.js.map