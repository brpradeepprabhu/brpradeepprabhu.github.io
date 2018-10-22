var designBuilder = 0;
$(document).ready(() => {
    $('#AddGridClick').click(() => {
        try {
            const val = $('#gridValue').val()
            if (val) {
                const array = val.split(' ');
                const total = array.reduce((a, b) => {
                    return parseInt(a) + parseInt(b)
                })
                console.log(array)
                if (total < 13) {
                    let grid = "<div class='row'>"
                    let cgrid = "<div class='row'>"
                    for (let i = 0; i < array.length; i++) {
                        designBuilder += 1;
                        grid += "<div data-dbid='designBuilder" + designBuilder + "' onclick='selectedParent(event,this)' class='col-" + parseInt(array[i]) + "'></div>"
                        cgrid += "<div data-cbid='designBuilder" + designBuilder + "'  class='col-" + parseInt(array[i]) + "'></div>"
                    }
                    grid += '</div>';

                    cgrid += '</div>';
                    parentContainer.append(grid);
                    console.log("ccc", customContainer)
                    customContainer.append(cgrid)
                } else {
                    alert("Count of the grid should less than or equal to 12")
                }
            } else {
                alert("Count of the grid should less than or equal to 12")
            }
        } catch (e) {
            alert("Count of the grid should less than or equal to 12")
        }

    })
})

function selectedParent(event, element) {
    parentContainer = $(element);
    const dataParentContainer = "[data-cbid =" + $(parentContainer).attr('data-dbid') + "]"
    customContainer = $(dataParentContainer);
    event.stopPropagation();
    console.log($(element))
}