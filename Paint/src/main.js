var canvas, stage, currentShapeBtn = "freestyle",
    currentShape, stroke = 10,
    stokeColor = '#ffff00',
    fillColor = '#000fff',
    selectedShape,
    contentContainer;

function downloadImage() {
    if (canvas.msToBlob) { //for IE
        var blob = canvas.msToBlob();
        window.navigator.msSaveBlob(blob, 'canvas.jpeg');
    } else {
        var a = document.createElement('a');
        a.href = canvas.toDataURL();
        a.download = 'canvas.jpeg';
        document.body.appendChild(a);
        a.click();
    }
}

function init() {
    canvas = document.getElementById('canvas');
    var parentNode = canvas.parentNode;
    (parentNode);
    stage = new createjs.Stage(canvas);
    contentContainer = new createjs.Container();
    (contentContainer)
    stage.addChild(contentContainer);
    stage.addEventListener('stagemousedown', stageMouseDown);
    stage.addEventListener("stagemouseup", stageMouseUp);
    var parentStyle = window.getComputedStyle(parentNode)
    canvas.height = window.innerHeight * 0.8;
    canvas.width = parseInt(parentStyle.width);
    $('#strokeColor').colorpicker({
        color: stokeColor
    }).on('changeColor', function (e) {
        stokeColor = e.value;
    });
    $('#fillColor').colorpicker({
        color: fillColor
    }).on('changeColor', function (e) {
        fillColor = e.value;
    });
    $('#deleteBtn').hide();
    $('#textProperties').hide();

}

function showStrokeColor() {
    $('#strokeColor').colorpicker('show');
}

function updateProperties() {
    $('#deleteBtn').show();
    document.getElementById('updateX').value = selectedShape.x;
    document.getElementById('updateY').value = selectedShape.y;
    document.getElementById('updateAlpha').value = selectedShape.alpha;
    if (selectedShape.graphics) {
        document.getElementById('updateStrokeColor').value = (selectedShape.graphics._stroke == null) ? '#000000' : selectedShape.graphics._stroke.style;
        document.getElementById('updateFillColor').value = selectedShape.graphics._fill.style;
        document.getElementById('updateStroke').value = (selectedShape.graphics._stroke == null) ? 0 : selectedShape.graphics._strokeStyle.width;
    } else {
        document.getElementById('updateFillColor').value = selectedShape.color;
        var textFont = selectedShape.font.split(" ");
        document.getElementById('updateFontStyle').value = textFont[0]
        document.getElementById('updateFontWeight').value = textFont[1]
        document.getElementById('updateText').value = selectedShape.text;
        document.getElementById('updateFontSize').value = textFont[2].trim();
        console.log(textFont[2]);
        $('#textProperties').show();
    }

}

function updateSelectedObj() {
    if (selectedShape) {
        selectedShape.x = document.getElementById('updateX').value;
        selectedShape.y = document.getElementById('updateY').value;
        selectedShape.alpha = document.getElementById('updateAlpha').value;
        selectedShape.instance.updateColor(document.getElementById('updateStroke').value, document.getElementById('updateStrokeColor').value, document.getElementById('updateFillColor').value)

        if (!selectedShape.graphics) {
            selectedShape.font = document.getElementById('updateFontStyle').value + " " + document.getElementById('updateFontWeight').value + " " + document.getElementById('updateFontSize').value + " Arial"
            selectedShape.text = document.getElementById('updateText').value;
            $('#textProperties').show();
        }
        stage.update();
    }
}

function showSelectFillColor() {
    $('#updateFillColor').colorpicker('show');
}

function showSelectStrokeColor() {
    $('#updateStrokeColor').colorpicker('show');
}

function showFillColor() {
    $('#fillColor').colorpicker('show')
}

function deleteSelected() {
    (selectedShape)
    if (selectedShape) {
        contentContainer.removeChild(selectedShape);
        stage.update();
        selectedShape = undefined;
        $('#deleteBtn').hide();

    }
}

function stageMouseDown(event) {
    $('#strokeColor').colorpicker('hide')
    $('#fillColor').colorpicker('hide')
    stage.addEventListener("stagemousemove", stageMouseMove);
    if (currentShapeBtn === 'freestyle') {
        currentShape = new paint.freeStyle(stage, contentContainer);

    } else if (currentShapeBtn === 'text') {
        currentShape = new paint.Text(stage, "", contentContainer);

    } else if (currentShapeBtn === 'square') {
        currentShape = new paint.Square(stage, contentContainer);

    } else if (currentShapeBtn === 'circle') {
        currentShape = new paint.Circle(stage, contentContainer);

    } else if (currentShapeBtn === 'ellipsis') {
        currentShape = new paint.Ellipsis(stage, contentContainer);

    } else if (currentShapeBtn === 'line') {
        currentShape = new paint.Line(stage, contentContainer);

    } else if (currentShapeBtn === 'rect') {
        currentShape = new paint.Rect(stage, contentContainer);

    }
    if (currentShapeBtn !== 'select') {
        selectedShape = undefined;
        $('#deleteBtn').hide();
        $('#textProperties').hide();
    }

}

function stageMouseMove(event) {
    if (currentShape) {
        currentShape.mouseMove();
    }
}

function displayText() {
    this.currentShape.text.text = document.getElementById('textInputValue').value;
    (document.getElementById('textInputValue').value);
    $('#textDialog').modal('hide');
    stage.update();
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
    ("shape", shape)
    currentShapeBtn = shape;
}

function updateStroke(e) {
    stroke = e.value;
}