$(document).ready(() => {
    $('#AddGridClick').click(() => {
        try {
            const val = $('#gridValue').val()
            const array = val.split(' ');
            const total = array.reduce((a, b) => {
                return parseInt(a) + parseInt(b)
            })

            if (total < 13) {
                let grid = "<div class='row'>"
                for (let i = 0; i < array.length; i++) {
                    grid += "<div onclick='selectedParent(event,this)' class='col-" + parseInt(array[i]) + "' style='min-height:90px;border:1px solid black'></div>"
                }
                grid += '<div>';
                parentContainer.append(grid)
            } else {
                alert("Count of the grid should less than or equal to 12")
            }
        } catch (e) {
            alert("Count of the grid should less than or equal to 12")
        }

    })
})
function selectedParent(event,element) {
    parentContainer = $(element);
   event.stopPropagation();
   console.log($(element))
}