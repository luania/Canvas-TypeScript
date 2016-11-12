define(["require", "exports", "../commons/script/Block", "../commons/script/PolarVector", "../commons/script/PVector", "../commons/script/Painter"], function (require, exports, Block_1, PolarVector_1, PVector_1, Painter_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var center = new PVector_1.PVector(canvas.width / 2, canvas.height / 2);
    var distance = new PolarVector_1.PolarVector(10, 0);
    var block = new Block_1.Block()
        .setColor("rgb(0,100,200)")
        .setPosition(PVector_1.PVector.add(center, distance.toPVector()))
        .setSize(new PolarVector_1.PolarVector(20, Math.PI / 6));
    function refreshStatus() {
        distance.rotate(Math.PI / 180);
        distance.r += 0.1;
        block.setPosition(PVector_1.PVector.add(center, distance.toPVector()))
            .setAngle(distance.angle + Math.PI / 2);
        setTimeout(refreshStatus, 0);
    }
    refreshStatus();
    function draw() {
        painter.ctx.drawImage;
        painter.drawBlock(block);
        setTimeout(draw, 0);
    }
    draw();
});
//# sourceMappingURL=helical-motion.js.map