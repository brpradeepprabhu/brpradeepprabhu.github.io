var designJSON = {};
var customJSON = {}
var parentContainer, customContainer;

function DownloadHTML() {
    var body = document.getElementById("cbContainer").outerHTML;
    var data = "<!DOCTYPE html><html lang='en'><head>    <meta charset='UTF-8'>    <meta name='viewport' content='width=device-width, initial-scale=1.0'>    <meta http-equiv='X-UA-Compatible' content='ie=edge'>    <title>Document</title><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO' crossorigin='anonymous'>    <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script>    <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' integrity='sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49' crossorigin='anonymous'></script>   <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' integrity='sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy' crossorigin='anonymous'></script></head><body>"
    data += body;
    data += "</body></html>"
    var a = document.createElement("a");
    a.style = "display: none";

    blob = new Blob([data], {
            type: "octet/stream"
        }),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = "index.html";
    a.click();
    window.URL.revokeObjectURL(url);

}
window.onload = function () {
    let menu = '<div class="accordion" id="accordionExample">';
    parentContainer = $('[data-dbid="designBuilder0"]')
    customContainer  = $('[data-cbid="designBuilder0"]')
    console.log("asdasd", parentContainer)
    $.get('./assets/custom.json', (data) => {
        customJSON = data;
    })
    $.get('./assets/design.json', (data) => {
        designJSON = data;
        const menuHeader = Object.keys(data);
        for (let i = 0; i < menuHeader.length; i++) {
            console.log(menuHeader)
            const header =
                '<div class="card">  <div class="card-header" id="heading' +
                menuHeader[i] +
                '"><h5 class="mb-0"> <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse' +
                menuHeader[i] +
                '" aria-expanded="true" aria-controls="' +
                menuHeader[i] +
                '">' +
                menuHeader[i] +
                '</button></h5></div>';

            let body =
                '<div id="collapse' +
                menuHeader[i] +
                '" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">  <div class="card-body">';

            for (let j in data[menuHeader[i]]) {
                let id = menuHeader[i] + "**" + j
                body += '<div data-id=' + id + ' onclick="genearateElement(this)">' + j + '</div>';
            }
            body += '</div> </div></div>';
            menu += header + body;

        }
        $('#menu').append(menu);
    })

}

function genearateElement(ele) {
    const data = $(ele).attr("data-id");
    const jsonData = data.split("**");
    const dataParentContainer = "[data-cbid =" + $(parentContainer).attr('data-dbid') + "]"
    customContainer = $(dataParentContainer);
    parentContainer.append(designJSON[jsonData[0]][jsonData[1]])
    customContainer.append(customJSON[jsonData[0]][jsonData[1]])
}