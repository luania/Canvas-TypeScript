define(["require", "exports", "./script/Painter", "./script/Ball"], function (require, exports, Painter_1, Ball_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var balls = [];
    var amplitude = 100;
    var cycle = 600;
    for (var i = 0; i < 1800; i++) {
        var b = new Ball_1.Ball();
        b.color = "rgba(0,100,200,0.5)";
        b.position.x = i;
        b.position.y = amplitude * Math.cos(2 * Math.PI * i / cycle) + canvas.height / 2;
        balls.push(b);
    }
    function refreshStatus() {
    }
    refreshStatus();
    function draw() {
        painter.clearCanvas();
        for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
            var ball = balls_1[_i];
            painter.drawBall(ball);
        }
        setTimeout(draw, 0);
    }
    draw();
});
//# sourceMappingURL=wave.js.map