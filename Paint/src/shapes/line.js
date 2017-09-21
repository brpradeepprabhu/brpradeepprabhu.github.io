var paint = paint || {};
(function () {
    'use strict';
    var Line = function (stage, container) {
        this.stage = stage;
        this.lineContainer = new createjs.Container();
        container.addChild(this.lineContainer);
        this.drawingCanvas = new createjs.Shape();
        this.lineContainer.addChild(this.drawingCanvas);
        this.measurementText = new createjs.Text('', '14px Arial');
        this.lineContainer.addChild(this.measurementText);
        this.drawingCanvas.instance = this;
        this.oldPt = new createjs.Point(this.stage.mouseX, this.stage.mouseY);
        this.measurementText.x = this.stage.mouseX;
        this.measurementText.y = this.stage.mouseY + stroke;
        this.oldMidPt = this.oldPt.clone();
        this.measurementCalc = "px";
        this.calculateWidth(this.oldPt, this.oldMidPt);
        this.stage.update();
        this.lineContainer.addEventListener('mousedown', this.shapeMouseDown.bind(this));
        this.lineContainer.addEventListener('mouseup', this.shapeMouseUp);
    }
    var p = Line.prototype;
    p.calculateWidth = function (startingPoint, endPoint) {
        var xDist = endPoint.x - startingPoint.x;
        var yDist = endPoint.y - startingPoint.y;
        var centerPointX = ((endPoint.x - startingPoint.x) / 2);
        var centerPointY = ((endPoint.y - startingPoint.y) / 2);
        // this.measurementText.text = Math.floor(Math.sqrt(xDist * xDist + yDist * yDist)) +" "+ this.measurementCalc;
        this.measurementText.x = startingPoint.x + centerPointX;
        this.measurementText.y = startingPoint.y + centerPointY;
        var angle = Math.atan2(yDist, xDist) * (180 / Math.PI);
        this.measurementText.rotation = angle;
        this.stage.update();
    }
    p.shapeMouseDown = function (e) {
        this.offset = {
            x: this.lineContainer.x - e.stageX,
            y: this.lineContainer.y - e.stageY
        };
        this.lineContainer.addEventListener('pressmove', this.shapeMouseMove.bind(this));
        if (currentShapeBtn === 'select') {
            selectedShape = this.drawingCanvas;
            updateProperties()
        }
    }
    p.shapeMouseMove = function (e) {
        if (currentShapeBtn === 'select') {
            this.lineContainer.x = this.stage.mouseX + this.offset.x;
            this.lineContainer.y = this.stage.mouseY + this.offset.y;
            this.stage.update();
        }
    }
    p.shapeMouseUp = function (e) {
        this.lineContainer.removeEventListener('pressmove', this.shapeMouseMove);
    }
    p.mouseDown = function () {

    }
    p.mouseUp = function () {
        if (currentShapeBtn !== 'select') {
            document.getElementById('mTextInputValue').value = '';
            $('#lineDialog').modal('show');
        }
    }
    p.mouseMove = function () {
        if (currentShapeBtn != 'select') {
            const midPt = new createjs.Point(this.stage.mouseX, this.stage.mouseY);
            this.drawingCanvas.graphics.clear().setStrokeStyle(stroke, 'round', 'round')
                .beginStroke(stokeColor).moveTo(midPt.x, midPt.y).lineTo(this.oldPt.x, this.oldPt.y);
            this.oldMidPt = midPt;
            this.calculateWidth(this.oldPt, this.oldMidPt);

        }
    }
    p.updateColor = function (updateStroke, updateStrokeColor, updateFillColor) {
        var rect = this.drawingCanvas.graphics._instructions[1];
        this.drawingCanvas.graphics.clear().setStrokeStyle(updateStroke, 'round', 'round').beginStroke(updateStrokeColor).moveTo(this.oldMidPt.x, this.oldMidPt.y).lineTo(this.oldPt.x, this.oldPt.y);

        this.stage.update();
    }
    paint.Line = Line;
}());