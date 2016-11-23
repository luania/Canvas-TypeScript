define(["require", "exports", "./script/Painter", "./script/Ball"], function (require, exports, Painter_1, Ball_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var balls = [];
    var amplitude = 100;
    var cycle = 600;
    var startAngle = 0;
    var angleVel = Math.PI / 180 / 5;
    for (var i = 0; i <= 100; i++) {
        var b = new Ball_1.Ball();
        b.color = "rgba(0,100,200,0.5)";
        b.position.x = i * 18;
        b.size = 5;
        balls.push(b);
    }
    function refreshStatus() {
        for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
            var ball = balls_1[_i];
            ball.position.y = amplitude * Math.sin(2 * Math.PI * ball.position.x / cycle + startAngle) + canvas.height / 2;
        }
        startAngle -= angleVel;
        setTimeout(refreshStatus, 0);
    }
    refreshStatus();
    function draw() {
        painter.clearCanvas();
        for (var _i = 0, balls_2 = balls; _i < balls_2.length; _i++) {
            var ball = balls_2[_i];
            painter.drawBall(ball);
        }
        for (var i = 0; i < balls.length - 1; i++) {
            painter.drawLine(balls[i].position, balls[i + 1].position, "rgba(0,100,200,0.5)");
        }
        setTimeout(draw, 0);
    }
    draw();
});
//# sourceMappingURL=wave.js.map