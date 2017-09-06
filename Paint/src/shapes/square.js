var paint = paint || {};
(function () {
    var Square = function (stage, container) {
        this.stage = stage;

        this.square = new createjs.Graphics();
        this.square.setStrokeStyle(stroke);
        this.square.beginStroke(stokeColor);
        this.square.beginFill(fillColor);
        this.square.drawRect (0, 0, 100,100);
   
        console.log(stage.mouseX, stage.mouseY)
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

    }
    paint.Square = Square
}());