var paint = paint || {};
(function () {
    var Rect = function (stage, container) {
        this.stage = stage;
        this.rect = new createjs.Graphics();
        this.rect.setStrokeStyle(stroke).beginStroke(stokeColor).beginFill(fillColor);
        this.rect.drawRect(0, 0, 10, 10);
        this.startingPoint = new createjs.Point(stage.mouseX, stage.mouseY);
        this.drawingCanvas = new createjs.Shape(this.rect);
        container.addChild(this.drawingCanvas);
        this.drawingCanvas.x = stage.mouseX;
        this.drawingCanvas.y = stage.mouseY;
        this.stage.update();
    }
    var p = Rect.prototype;
    p.mouseDown = function () {

    }
    p.mouseUp = function () {

    }
    p.mouseMove = function () {
        var diffX = Math.abs(stage.mouseX - this.startingPoint.x);
        var diffY = Math.abs(stage.mouseY - this.startingPoint.y);
        this.rect.clear().setStrokeStyle(stroke).beginStroke(stokeColor).beginFill(fillColor).drawRect(0, 0, diffX, diffY);
        this.stage.update();
    }
    paint.Rect = Rect
}());