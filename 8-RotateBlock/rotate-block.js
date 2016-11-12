define(["require", "exports", "../commons/script/PVector", "../commons/script/Block", "../commons/script/Painter", "../commons/script/PolarVector"], function (require, exports, PVector_1, Block_1, Painter_1, PolarVector_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var block = new Block_1.Block()
        .setSize(new PolarVector_1.PolarVector(100, Math.PI / 7))
        .setAngle(Math.PI / 7 * 6)
        .setPosition(new PVector_1.PVector(500, 500));
    function rotate() {
        block.rotate(Math.PI / 72);
        painter.clearCanvas();
        painter.drawBlock(block);
        setTimeout(rotate, 10);
    }
    rotate();
});
//# sourceMappingURL=rotate-block.js.map