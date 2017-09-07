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
        this.drawingCanvas.addEventListener('mousedown', this.shapeMouseDown.bind(this));
        this.drawingCanvas.addEventListener('mouseup', this.shapeMouseUp);
        this.stage.update();
    }
    var p = Square.prototype;
    p.shapeMouseDown = function (e) {
        console.log(e);
        this.offset = {
            x: this.drawingCanvas.x - e.stageX,
            y: this.drawingCanvas.y - e.stageY
        };
        this.drawingCanvas.addEventListener('pressmove', this.shapeMouseMove.bind(this));
    }
    p.shapeMouseMove = function (e) {
        if (currentShapeBtn === 'select') {
            this.drawingCanvas.x = this.stage.mouseX + this.offset.x;
            this.drawingCanvas.y = this.stage.mouseY + this.offset.y;
            this.stage.update();
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
        if (currentShapeBtn != 'select') {
            var diff = (stage.mouseX - this.startingPoint.x);
            var diffY = (stage.mouseY - this.startingPoint.y);
            var differ = diffY > 0 ? diff : -diff;
            this.square.clear().setStrokeStyle(stroke).beginStroke(stokeColor).beginFill(fillColor).drawRect(0, 0, diff, differ);
            this.stage.update();
        }
    }
    paint.Square = Square
}());