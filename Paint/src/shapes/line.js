var paint = paint || {};
(function () {
    'use strict';
    var Line = function (stage, container) {
        this.stage = stage;
        this.drawingCanvas = new createjs.Shape();
        container.addChild(this.drawingCanvas);
        this.oldPt = new createjs.Point(this.stage.mouseX, this.stage.mouseY);
        this.oldMidPt = this.oldPt.clone();
        this.stage.update();
        this.drawingCanvas.addEventListener('mousedown', this.shapeMouseDown.bind(this));
        this.drawingCanvas.addEventListener('mouseup', this.shapeMouseUp);
    }
    var p = Line.prototype;
    p.shapeMouseDown = function (e) {
        this.offset = {
            x: this.drawingCanvas.x - e.stageX,
            y: this.drawingCanvas.y - e.stageY
        };
        this.drawingCanvas.addEventListener('pressmove', this.shapeMouseMove.bind(this));
        if (currentShapeBtn === 'select') {
            selectedShape = this.drawingCanvas;
            $('#deleteBtn').show();
        }
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
            const midPt = new createjs.Point(this.stage.mouseX, this.stage.mouseY);
            this.drawingCanvas.graphics.clear().setStrokeStyle(stroke, 'round', 'round')
                .beginStroke(stokeColor).moveTo(midPt.x, midPt.y).lineTo(this.oldPt.x, this.oldPt.y);

            this.stage.update();
        }
    }
    paint.Line = Line;
}());