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
        this.drawingCanvas.instance = this;
        this.stage.update();
        this.drawingCanvas.addEventListener('mousedown', this.shapeMouseDown.bind(this));
        this.drawingCanvas.addEventListener('mouseup', this.shapeMouseUp);
    }
    var p = Ellipsis.prototype;
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
            var diffX = (stage.mouseX - this.startingPoint.x);
            var diffY = (stage.mouseY - this.startingPoint.y);

            this.ellipsis.clear();
            if (stroke != 0) {
                this.ellipsis.setStrokeStyle(stroke).beginStroke(stokeColor).beginFill(fillColor).drawEllipse(0, 0, diffX, diffY);
            } else {

                this.ellipsis.beginFill(fillColor).drawEllipse(0, 0, diffX, diffY);
            }
            this.stage.update();
        }
    }
    p.updateColor = function (updateStroke, updateStrokeColor, updateFillColor) {
        var rect = this.drawingCanvas.graphics._instructions[1];
        this.ellipsis.clear()
        if (updateStroke != 0) {
            this.ellipsis.setStrokeStyle(updateStroke).beginStroke(updateStrokeColor).beginFill(updateFillColor).drawEllipse(0, 0, rect.w, rect.h);
        } else {

            this.ellipsis.beginFill(updateFillColor).drawEllipse(0, 0, rect.w, rect.h);
        }
        this.stage.update();
    }
    paint.Ellipsis = Ellipsis
}());