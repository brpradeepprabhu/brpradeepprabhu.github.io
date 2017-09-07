var paint = paint || {};
(function () {
    var Ellipsis = function (stage, container) {
        this.stage = stage;

        this.ellipsis = new createjs.Graphics();
        this.ellipsis.setStrokeStyle(stroke);
        this.ellipsis.beginStroke(stokeColor);
        this.ellipsis.beginFill(fillColor);
        this.ellipsis.drawEllipse(0, 0, 10, 10);
        this.startingPoint = new createjs.Point(stage.mouseX, stage.mouseY);
        this.drawingCanvas = new createjs.Shape(this.ellipsis);
        container.addChild(this.drawingCanvas);
        this.drawingCanvas.x = stage.mouseX;
        this.drawingCanvas.y = stage.mouseY;
        this.stage.update();
        this.drawingCanvas.addEventListener('mousedown', this.shapeMouseDown.bind(this));
        this.drawingCanvas.addEventListener('mouseup', this.shapeMouseUp);
    }
    var p = Ellipsis.prototype;
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
            var diffX = Math.abs(stage.mouseX - this.startingPoint.x);
            var diffY = Math.abs(stage.mouseY - this.startingPoint.y);
            this.ellipsis.clear().setStrokeStyle(stroke).beginStroke(stokeColor).beginFill(fillColor).drawEllipse(0, 0, diffX, diffY);
            this.stage.update();
        }
    }
    paint.Ellipsis = Ellipsis
}());