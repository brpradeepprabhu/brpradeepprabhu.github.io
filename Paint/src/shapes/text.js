var paint = paint || {};
(function () {
    var Text = function (stage, text, container) {
        this.stage = stage;
        this.text = new createjs.Text(text, "normal bold 20px Arial", "#000000")
        this.text.x = this.stage.mouseX;
        this.text.y = this.stage.mouseY;
        container.addChild(this.text);
        this.text.instance = this;
        this.stage.update();
        this.text.addEventListener('mousedown', this.shapeMouseDown.bind(this));
        this.text.addEventListener('mouseup', this.shapeMouseUp);
        $('#textDialog').modal('show');
        $('#textInputValue').val('');
        console.log(this.text)
    }
    var p = Text.prototype;
    p.shapeMouseDown = function (e) {
        var hit = new createjs.Shape();
        hit.graphics.beginFill("rgba(0,0,0,0.5)").drawRect(0, 0, this.text.getMeasuredWidth(), this.text.getMeasuredHeight());
        this.text.hitArea = hit;
        this.offset = {
            x: this.text.x - e.stageX,
            y: this.text.y - e.stageY
        };
        this.text.addEventListener('pressmove', this.shapeMouseMove.bind(this));
        if (currentShapeBtn === 'select') {
            selectedShape = this.text;
            updateProperties();
        }
    }
    p.shapeMouseMove = function (e) {
        if (currentShapeBtn === 'select') {
            this.text.x = this.stage.mouseX + this.offset.x;
            this.text.y = this.stage.mouseY + this.offset.y;
            this.stage.update();
            updateProperties();
        }
    }
    p.shapeMouseUp = function (e) {
        this.drawingCanvas.removeEventListener('pressmove', this.shapeMouseMove);
    }
    p.mouseDown = function () {

    }
    p.mouseUp = function () {

    }
    p.mouseMove = function () {

    }
    p.updateColor = function (updateStroke, updateStrokeColor, updateFillColor) {
        this.text.color = updateFillColor;
        this.stage.update();
    }
    paint.Text = Text
}());