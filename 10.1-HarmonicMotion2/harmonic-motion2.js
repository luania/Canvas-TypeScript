define(["require", "exports", "./script/Block", "./script/PolarVector", "./script/PVector", "./script/Painter"], function (require, exports, Block_1, PolarVector_1, PVector_1, Painter_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var center = new PVector_1.PVector(canvas.width / 2, canvas.height / 2);
    var block = new Block_1.Block()
        .setColor("rgb(0,100,200)")
        .setPosition(new PVector_1.PVector(center.x, center.y))
        .setSize(new PolarVector_1.PolarVector(20, Math.PI / 6));
    var time = 0;
    var amplitude = 500;
    var cycle = 100;
    function refreshStatus() {
        block.position.x = center.x + amplitude * Math.cos(2 * Math.PI * time / cycle);
        setTimeout(refreshStatus, 0);
    }
    refreshStatus();
    function draw() {
        time++;
        painter.clearCanvas();
        painter.ctx.drawImage;
        painter.drawBlock(block);
        setTimeout(draw, 0);
    }
    draw();
});
//# sourceMappingURL=harmonic-motion2.js.map