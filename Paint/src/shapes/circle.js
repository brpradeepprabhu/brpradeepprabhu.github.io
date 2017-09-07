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
        this.drawingCanvas.addEventListener('mousedown', this.shapeMouseDown.bind(this));
        this.drawingCanvas.addEventListener('mouseup', this.shapeMouseUp);
    }
    var p = Circle.prototype;
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
            var diff = Math.abs(stage.mouseX - this.startingPoint.x);
            this.circle.clear().setStrokeStyle(stroke).beginStroke(stokeColor).beginFill(fillColor).drawCircle(0, 0, diff);;
            this.stage.update();
        }
    }
    paint.Circle = Circle
}());