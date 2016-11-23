define(["require", "exports", "./script/Block", "./script/PolarVector", "./script/PVector", "./script/Painter"], function (require, exports, Block_1, PolarVector_1, PVector_1, Painter_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var center = new PVector_1.PVector(canvas.width / 2, canvas.height / 2);
    var block = new Block_1.Block()
        .setColor("rgba(0,100,200,0.02)")
        .setPosition(new PVector_1.PVector(center.x, center.y))
        .setSize(new PolarVector_1.PolarVector(20, Math.PI / 6));
    var indicatorX = new PolarVector_1.PolarVector(500, -Math.PI / 2);
    var indicatorY = new PolarVector_1.PolarVector(300, -Math.PI / 2);
    function refreshStatus() {
        indicatorX.angle += Math.PI / 180 / 5;
        indicatorY.angle += Math.PI / 180 / 3;
        block.position.x = PVector_1.PVector.add(indicatorX.toPVector(), center).x;
        block.position.y = PVector_1.PVector.add(indicatorY.toPVector(), center).y;
        setTimeout(refreshStatus, 0);
    }
    refreshStatus();
    function draw() {
        painter.ctx.drawImage;
        painter.drawBlock(block);
        painter.drawLine(center, PVector_1.PVector.add(indicatorX.toPVector(), center), "rgba(0,0,0,0.01)");
        painter.drawLine(center, PVector_1.PVector.add(indicatorY.toPVector(), center), "rgba(0,0,0,0.01)");
        setTimeout(draw, 0);
    }
    draw();
});
//# sourceMappingURL=harmonic4-motion.js.map