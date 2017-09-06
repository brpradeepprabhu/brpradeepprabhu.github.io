var paint = paint || {};
(function () {
    var Text = function (stage, text,container) {
        this.stage = stage;
        this.text = new createjs.Text(text, "20px Arial" )
        this.text.x = this.stage.mouseX;
        this.text.y = this.stage.mouseY;
        container.addChild(this.text);
        this.stage.update();
    }
    var p = Text.prototype;
    p.mouseDown = function () {

    }
    p.mouseUp = function () {

    }
    p.mouseMove = function () {

    }
    paint.Text = Text
}());