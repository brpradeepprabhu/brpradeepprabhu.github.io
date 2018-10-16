var designJSON = {};
var parentContainer ;
window.onload = function () {
    let menu = '<div class="accordion" id="accordionExample">';
    parentContainer = $('#parentContainer')
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
    parentContainer.append(designJSON[jsonData[0]][jsonData[1]])
}