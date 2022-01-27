let posX, posY, mouseDown;

// Get mouse position with respect to the canvas
$("#canvas").mousemove((e) => {
    posX = e.pageX - $("#sizePicker").val() / 2 // Centre the brush by subtracting half of its width from the x position
    posY = e.pageY - $("#sizePicker").val() / 2; // and half of its height from the y position
});

const followCursor = () => {
    // Make the brush element follow the cursor position
    $("#brush").css("left", posX);
    $("#brush").css("top", posY);
    // Change the brush size as selected by the user
    $("#brush").css("height", $("#sizePicker").val());
    $("#brush").css("width", $("#sizePicker").val());
}

// Run followCursor() while the cursor is on the canvas
$(document).mousemove(() => {
    if ($("#canvas:hover").length != 0) followCursor();
    if (mouseDown) placeSplotch();
});

$("#canvas").mousedown(() => {
    placeSplotch();
    mouseDown = true
});
$("#canvas").mouseup(() => mouseDown = false);

// Put a dot where the user clicks
const placeSplotch = () => $("#canvas").append('<div class="splotch" style="position:absolute; left:'
    + posX + 'px; top:' + posY + 'px; height:' + $("#sizePicker").val()
    + 'px; width:' + $("#sizePicker").val() + 'px; background-color:'
    + $("#colourPicker").val() + ';"></div>');