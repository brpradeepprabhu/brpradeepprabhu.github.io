var paint = paint || {};
(function () {
    'use strict';
    var freeStyle = function (stage, container) {
        this.stage = stage;
        this.oldPtArray = [];
        this.oldMidPtArray = [];
        this.drawingCanvas = new createjs.Shape();
        container.addChild(this.drawingCanvas);
        this.oldPt = new createjs.Point(this.stage.mouseX, this.stage.mouseY);
        this.oldMidPt = this.oldPt.clone();
        this.oldPtArray.push(this.oldPt);
        this.oldMidPtArray.push(this.oldMidPt);
        this.stage.update();
    }
    var p = freeStyle.prototype;
    p.mouseDown = function () {

    }
    p.mouseUp = function () {

    }
    p.mouseMove = function () {
        if (currentShapeBtn != 'select') {
            const midPt = new createjs.Point(this.oldPt.x + this.stage.mouseX >> 1, this.oldPt.y + this.stage.mouseY >> 1);
            this.drawingCanvas.graphics.setStrokeStyle(stroke, 'round', 'round')
                .beginStroke(stokeColor).moveTo(midPt.x, midPt.y).curveTo(this.oldPt.x, this.oldPt.y, this.oldMidPt.x, this.oldMidPt.y);
            this.oldPt.x = this.stage.mouseX;
            this.oldPt.y = this.stage.mouseY;
            this.oldMidPt.x = midPt.x;
            this.oldMidPt.y = midPt.y;
            this.oldPtArray.push(this.oldPt);
            this.oldMidPtArray.push(this.oldMidPt);
            this.stage.update();
        }
    }
    paint.freeStyle = freeStyle;
}());