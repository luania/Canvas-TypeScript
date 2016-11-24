define(["require", "exports", "./script/PVector", "./script/Block", "./script/Painter", "./script/PolarVector"], function (require, exports, PVector_1, Block_1, Painter_1, PolarVector_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var block = new Block_1.Block();
    block.size = new PolarVector_1.PolarVector(100, Math.PI / 7);
    block.angle = Math.PI / 7 * 6;
    block.position = new PVector_1.PVector(500, 500);
    function rotate() {
        block.rotate(Math.PI / 72);
        painter.clearCanvas();
        painter.drawBlock2(block);
        setTimeout(rotate, 10);
    }
    rotate();
});
//# sourceMappingURL=rotate-canvas.js.map