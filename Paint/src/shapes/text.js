var paint = paint || {};
(function () {
    var Text = function (stage, text,container) {
        this.stage = stage;
        this.text = new createjs.Text(text, "20px Arial" )
        this.text.x = this.stage.mouseX;
        this.text.y = this.stage.mouseY;
        container.addChild(this.text);
        this.stage.update();
        this.text.addEventListener('mousedown', this.shapeMouseDown.bind(this));
        this.text.addEventListener('mouseup', this.shapeMouseUp);
    }
    var p = Text.prototype;
    p.shapeMouseDown = function (e) {
        console.log(e);
        this.offset = {
            x: this.text.x - e.stageX,
            y: this.text.y - e.stageY
        };
        this.text.addEventListener('pressmove', this.shapeMouseMove.bind(this));
    }
    p.shapeMouseMove = function (e) {
        if (currentShapeBtn === 'select') {
            this.text.x = this.stage.mouseX + this.offset.x;
            this.text.y = this.stage.mouseY + this.offset.y;
            this.stage.update();
        }
    }
    p.shapeMouseUp = function (e) {
        this.text.removeEventListener('pressmove', this.shapeMouseMove);
    }
    p.mouseDown = function () {

    }
    p.mouseUp = function () {

    }
    p.mouseMove = function () {

    }
    paint.Text = Text
}());