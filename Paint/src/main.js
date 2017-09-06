var canvas, stage, currentShapeBtn = "freestyle",
    currentShape, stroke = 10,
    stokeColor = '#ffff00',
    fillColor = '#000fff',
    contentContainer;

function init() {
    canvas = document.getElementById('canvas');
    stage = new createjs.Stage(canvas);
    contentContainer = new createjs.Container();
    console.log(contentContainer)
    stage.addChild(contentContainer);
    stage.addEventListener('stagemousedown', stageMouseDown);
    stage.addEventListener("stagemouseup", stageMouseUp);
    console.log("aaa", canvas, stage)
}

function stageMouseDown(event) {
    stage.addEventListener("stagemousemove", stageMouseMove);
    if (currentShapeBtn === 'freestyle') {
        currentShape = new paint.freeStyle(stage, contentContainer);
    }
    if (currentShapeBtn === 'text') {
        currentShape = new paint.Text(stage, "dummy text", contentContainer);
    }
    if (currentShapeBtn === 'square') {
        currentShape = new paint.Square(stage, contentContainer);
    }
    if (currentShapeBtn === 'circle') {
        currentShape = new paint.Circle(stage, contentContainer);
    }
    if (currentShapeBtn === 'ellipsis') {
        currentShape = new paint.Ellipsis(stage, contentContainer);
    }
    if (currentShapeBtn === 'line') {
        currentShape = new paint.Line(stage, contentContainer);
    }
    if (currentShapeBtn === 'rect') {
        currentShape = new paint.Rect(stage, contentContainer);
    }
}

function stageMouseMove(event) {
    if (currentShape) {
        currentShape.mouseMove();
    }
}

function stageMouseUp(event) {

    stage.removeEventListener("stagemousemove", stageMouseMove);
    if (currentShape)
        currentShape.mouseUp();
}

function undo() {
    if (contentContainer.getNumChildren() > 0) {
        contentContainer.removeChildAt(contentContainer.getNumChildren() - 1);
        stage.update();
    }
}

function clearAll() {
    contentContainer.removeAllChildren();
    stage.update();
}

function createShape(shape) {
    console.log("shape", shape)
    currentShapeBtn = shape;
}