var paint = paint || {};
(function () {
    var Task = function (stage, container) {
        this.stage = stage;
        var image = new Image();
        image.src = 'assets/images/task.png';
        image.onload = function () {
            this.drawingCanvas = new createjs.Bitmap(image);
            this.startingPoint = new createjs.Point(stage.mouseX, stage.mouseY);
            container.addChild(this.drawingCanvas);
            this.drawingCanvas.x = stage.mouseX;
            this.drawingCanvas.y = stage.mouseY;
            this.drawingCanvas.instance = this;
            this.stage.update();
            this.drawingCanvas.addEventListener('mousedown', this.shapeMouseDown.bind(this));
            this.drawingCanvas.addEventListener('mouseup', this.shapeMouseUp);
        }.bind(this);

    }
    var p = Task.prototype;
    p.shapeMouseDown = function (e) {
        this.offset = {
            x: this.drawingCanvas.x - e.stageX,
            y: this.drawingCanvas.y - e.stageY
        };
        this.drawingCanvas.addEventListener('pressmove', this.shapeMouseMove.bind(this));
        if (currentShapeBtn === 'select') {
            selectedShape = this.drawingCanvas;
            $('#task').show();
        }
    }
    p.shapeMouseMove = function (e) {
        if (currentShapeBtn === 'select') {
            this.drawingCanvas.x = this.stage.mouseX + this.offset.x;
            this.drawingCanvas.y = this.stage.mouseY + this.offset.y;
            $('#task').show();
            this.stage.update();

        }
    }
    p.shapeMouseUp = function (e) {

    }
    p.mouseDown = function () {

    }
    p.mouseUp = function () {
        document.getElementById('taskDesc').value = '';
        document.getElementById('taskHeadValue').value = '';
        $('#taskDialog').show();
    }
    p.mouseMove = function () {

    }
    p.updateColor = function (updateStroke, updateStrokeColor, updateFillColor) {

    }
    paint.Task = Task
}());