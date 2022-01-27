let brush = {
    el: $("#brush"),
    size: $("#sizePicker").val(),
    colour: $("#colourPicker").val(),
    posX: 0,
    posY: 0,
    paint: false,
    followCursor: function () {
        this.el.css({
            "left": this.posX, "top": this.posY,
            "height": this.size, "width": this.size
        });
    },
    placeSplotch: function () {
        // Put a dot where the user clicks.
        $("#canvas").append('<div class="splotch" style="position:absolute; left:'
            + this.posX + 'px; top:' + this.posY + 'px; height:' + this.size
            + 'px; width:' + this.size + 'px; background-color:'
            + this.colour + ';"></div>');
    }
};

$(document).mousemove((e) => {
    brush.posX = e.pageX - brush.size / 2; // Get the centre the brush by subtracting half of its width from the x position
    brush.posY = e.pageY - brush.size / 2; // and half of its height from the y position.
    if (brush.paint) brush.placeSplotch(); // Place splotches if the user is holding the mouse down.
    if ($("#canvas:hover").length != 0) brush.followCursor(); // Run brush.followCursor() while the mouse is over the canvas.
});

$("#canvas").mousedown(() => {
    brush.placeSplotch(); // 1 splotch placed if the user clicks and doesn't move the mouse
    brush.paint = true;
});
$("#canvas").mouseup(() => brush.paint = false);
