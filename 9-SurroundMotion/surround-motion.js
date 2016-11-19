define(["require", "exports", "./script/Block", "./script/PolarVector", "./script/PVector", "./script/Painter"], function (require, exports, Block_1, PolarVector_1, PVector_1, Painter_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var center = new PVector_1.PVector(canvas.width / 2, canvas.height / 2);
    var distance = new PolarVector_1.PolarVector(100, 0);
    var block = new Block_1.Block()
        .setColor("rgb(0,100,200)")
        .setPosition(PVector_1.PVector.add(center, distance.toPVector()))
        .setSize(new PolarVector_1.PolarVector(20, Math.PI / 6));
    function refreshStatus() {
        distance.rotate(Math.PI / 180);
        block.setPosition(PVector_1.PVector.add(center, distance.toPVector()))
            .setAngle(distance.angle + Math.PI / 2);
        setTimeout(refreshStatus, 0);
    }
    refreshStatus();
    function draw() {
        painter.clearCanvas();
        painter.drawBlock(block);
        setTimeout(draw, 0);
    }
    draw();
});
//# sourceMappingURL=surround-motion.js.map