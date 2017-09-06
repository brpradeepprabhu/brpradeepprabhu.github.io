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
    }
    var p = Line.prototype;
    p.mouseDown = function () {

    }
    p.mouseUp = function () {

    }
    p.mouseMove = function () {
        const midPt = new createjs.Point(this.stage.mouseX, this.stage.mouseY);
        this.drawingCanvas.graphics.clear().setStrokeStyle(stroke, 'round', 'round')
            .beginStroke(stokeColor).moveTo(midPt.x, midPt.y).lineTo(this.oldPt.x, this.oldPt.y);

        this.stage.update();
    }
    paint.Line = Line;
}());