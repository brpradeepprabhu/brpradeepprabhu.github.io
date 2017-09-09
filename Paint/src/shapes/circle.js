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
        this.drawingCanvas.instance = this;
        this.stage.update();
        this.drawingCanvas.addEventListener('mousedown', this.shapeMouseDown.bind(this));
        this.drawingCanvas.addEventListener('mouseup', this.shapeMouseUp);
    }
    var p = Circle.prototype;
    p.shapeMouseDown = function (e) {
        this.offset = {
            x: this.drawingCanvas.x - e.stageX,
            y: this.drawingCanvas.y - e.stageY
        };
        this.drawingCanvas.addEventListener('pressmove', this.shapeMouseMove.bind(this));
        if (currentShapeBtn === 'select') {
            selectedShape = this.drawingCanvas;
            updateProperties();
        }
    }
    p.shapeMouseMove = function (e) {
        if (currentShapeBtn === 'select') {
            this.drawingCanvas.x = this.stage.mouseX + this.offset.x;
            this.drawingCanvas.y = this.stage.mouseY + this.offset.y;
            updateProperties();
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
    p.updateColor = function (updateStroke, updateStrokeColor, updateFillColor) {
        var rect = this.drawingCanvas.graphics._instructions[1];
        console.log(rect);
        this.circle.clear()
        if (updateStroke != 0) {
            this.circle.setStrokeStyle(updateStroke).beginStroke(updateStrokeColor).beginFill(updateFillColor).drawCircle(0, 0, rect.radius);
        } else {

            this.circle.beginFill(updateFillColor).drawCircle(0, 0, rect.radius);
        }
        this.stage.update();
    }
    paint.Circle = Circle
}());