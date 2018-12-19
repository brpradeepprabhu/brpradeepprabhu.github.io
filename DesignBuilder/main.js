var designJSON = {};
var customJSON = {};
var parentContainer, customContainer;

function DownloadHTML() {
    var body = $('[data-cbid="designBuilder0"]').html();
    var data =
        "<!DOCTYPE html><html lang='en'><head>    <meta charset='UTF-8'>    <meta name='viewport' content='width=device-width, initial-scale=1.0'>    <meta http-equiv='X-UA-Compatible' content='ie=edge'>    <title>Document</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO' crossorigin='anonymous'>    <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script>    <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' integrity='sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49' crossorigin='anonymous'></script>   <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' integrity='sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy' crossorigin='anonymous'></script></head><body>";
    data += body;
    data += '</body></html>';
    var a = document.createElement('a');
    a.style = 'display: none';

    (blob = new Blob([data], {
        type: 'octet/stream'
    })),
    (url = window.URL.createObjectURL(blob));
    a.href = url;
    a.download = 'index.html';
    a.click();
    window.URL.revokeObjectURL(url);
}
window.onload = function () {
    parentContainer = $('[data-dbid="designBuilder0"]');
    parentContainer.addClass('selectedRow');
    customContainer = $('[data-cbid="designBuilder0"]');
    // $('[data-cbid="designBuilder0"]').hide();
    console.log('asdasd', parentContainer);
    $.get('./assets/custom.json', data => {
        customJSON = data;
    });
    $.get('./assets/design.json', data => {
        designJSON = data;
        var menu = createCollapseMenu(data, '');
        count++;
        $('#menu').append(menu);
    });
    createRightClickEvent();
};
var count = 0;

function createCollapseMenu(data, prevID) {
    const className = prevID ? "accordion-inner" : "accordion"
    let menu = '<div class="' + className + '" id="accordionExample' + count + '">';

    const menuHeader = Object.keys(data);
    console.log(menuHeader)
    for (let i = 0; i < menuHeader.length; i++) {
        let header = createHeader(menuHeader[i]);
        prevID1 = prevID ? prevID : menuHeader[i]
        let body = createBody(data, menuHeader[i], prevID1, count.toString().slice());
        menu += header + body;
    }
    return menu;
}

function createHeader(menuHeader) {
    const header =
        '<div class="card">  <div class="card-header" id="heading' +
        menuHeader +
        '"><h5 class="mb-0"> <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse' +
        menuHeader +
        '" aria-expanded="true" aria-controls="' +
        menuHeader +
        '">' +
        menuHeader +
        '</button></h5></div>';
    return header;
}

function createBody(data, key, prevId, count) {
    let body =
        '<div id="collapse' +
        key +
        '" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample' + count + '">  <div class="card-body">';
    console.log(data[key])
    for (let j in data[key]) {

        let id = prevId + '**' + j;
        if (typeof data[key][j] === 'object') {
            console.log(data[key][j])
            var dataKey = "{\"" + j + "\":" + JSON.stringify(data[key][j]) + "}"
            console.log(dataKey)
            const dataBody = createCollapseMenu(JSON.parse(dataKey), id)
            console.log(dataBody)
            body += dataBody;
        } else {

            body += '<div data-id=' + id + ' onclick="genearateElement(this)">' + j + '</div>';
        }
    }
    body += '</div> </div></div>';
    return body;
}

function genearateElement(ele) {
    const data = $(ele).attr('data-id');
    const jsonData = data.split('**');
    const dbid = $(parentContainer).attr('data-dbid');
    const dataParentContainer = '[data-cbid =' + dbid + ']';
    console.log('[data-dbid =' + dbid + '] *:last-child');
    customContainer = $(dataParentContainer);
    parentContainer.append(designJSON[jsonData[0]][jsonData[1]]);
    customContainer.append(customJSON[jsonData[0]][jsonData[1]]);
    designBuilder += 1;
    $('[data-dbid =' + dbid + ']>*:last-child')
        .addClass('rightClickContainer')
        .attr('data-dbid', 'designBuilder' + designBuilder);
    $('[data-cbid =' + dbid + ']>*:last-child').attr('data-cbid', 'designBuilder' + designBuilder);
}

function createRightClickEvent() {
    $('#parentContainer').contextmenu({
        delegate: '.rightClickContainer',
        preventContextMenuForPopup: true,
        menu: [{
            title: 'Delete',
            cmd: 'del',
            uiIcon: 'ui-icon-trash'
        }],
        // Handle menu selection to implement a fake-clipboard
        select: function (event, ui) {
            var $target = ui.target;
            console.log(ui);
            switch (ui.cmd) {
                case 'copy':
                    CLIPBOARD = $target.text();
                    break;
                case 'paste':
                    CLIPBOARD = '';
                    break;
                case 'del':
                    loopParent($target);
                    break;
            }
            // Optionally return false, to prevent closing the menu now
        }
    });
}

function loopParent(target) {
    const dbid = target.attr('data-dbid');
    if (dbid) {
        var db = document.querySelector('[data-dbid =' + dbid + ']');
        var cb = document.querySelector('[data-cbid =' + dbid + ']');
        console.log(db);
        db.remove();
        cb.remove();
    } else {
        console.log(target.parent());
        loopParent(target.parent());
        target.empty();
    }
}