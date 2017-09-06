var paint = paint || {};
(function () {
    var Circle = function (stage, container) {
        this.stage = stage;

        this.circle = new createjs.Graphics();
        this.circle.setStrokeStyle(stroke);
        this.circle.beginStroke(stokeColor);
        this.circle.beginFill(fillColor);
        this.circle.drawCircle(0, 0, 30);
        this.startingPoint = new createjs.Point(stage.mouseX, stage.mouseY);
        this.drawingCanvas = new createjs.Shape(this.circle);
        container.addChild(this.drawingCanvas);
        this.drawingCanvas.x = stage.mouseX;
        this.drawingCanvas.y = stage.mouseY;
        this.stage.update();
    }
    var p = Circle.prototype;
    p.mouseDown = function () {

    }
    p.mouseUp = function () {

    }
    p.mouseMove = function () {

        var diff = Math.abs(stage.mouseX - this.startingPoint.x);
        this.circle.clear().setStrokeStyle(stroke).beginStroke(stokeColor).beginFill(fillColor).drawCircle(0, 0, diff);;
        this.stage.update();
    }
    paint.Circle = Circle
}());