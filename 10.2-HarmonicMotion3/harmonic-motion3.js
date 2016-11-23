define(["require", "exports", "./script/Block", "./script/PolarVector", "./script/PVector", "./script/Painter"], function (require, exports, Block_1, PolarVector_1, PVector_1, Painter_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var center = new PVector_1.PVector(canvas.width / 2, canvas.height / 2);
    var block = new Block_1.Block()
        .setColor("rgba(0,100,200,0.02)")
        .setPosition(new PVector_1.PVector(center.x, center.y))
        .setSize(new PolarVector_1.PolarVector(10, Math.PI / 6));
    var angle = new PVector_1.PVector(0, 1);
    var angleVelocity = new PVector_1.PVector(0.003, 0.012);
    var amplitude = new PVector_1.PVector(500, 100);
    function refreshStatus() {
        block.position.x = amplitude.x * Math.cos(2 * Math.PI * angle.x);
        block.position.y = amplitude.y * Math.cos(2 * Math.PI * angle.y);
        angle.add(angleVelocity);
        block.position.add(center);
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
//# sourceMappingURL=harmonic-motion3.js.map