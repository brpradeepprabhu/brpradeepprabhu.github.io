var paint = paint || {};
(function () {
    var Square = function (stage, container) {
        this.stage = stage;

        this.square = new createjs.Graphics();
        this.square.setStrokeStyle(stroke).beginStroke(stokeColor).beginFill(fillColor);
        this.square.drawRect(0, 0, 10, 10);
        this.startingPoint = new createjs.Point(stage.mouseX, stage.mouseY);
        this.drawingCanvas = new createjs.Shape(this.square);
        container.addChild(this.drawingCanvas);
        this.drawingCanvas.x = stage.mouseX;
        this.drawingCanvas.y = stage.mouseY;
        this.stage.update();
    }
    var p = Square.prototype;
    p.mouseDown = function () {

    }
    p.mouseUp = function () {

    }
    p.mouseMove = function () {
        var diff = Math.abs(stage.mouseX - this.startingPoint.x);
        this.square.clear().setStrokeStyle(stroke).beginStroke(stokeColor).beginFill(fillColor).drawRect(0, 0, diff, diff);
        this.stage.update();
    }
    paint.Square = Square
}());