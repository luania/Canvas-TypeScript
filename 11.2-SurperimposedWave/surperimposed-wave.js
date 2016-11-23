define(["require", "exports", "./script/Painter", "./script/Ball"], function (require, exports, Painter_1, Ball_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var balls = [];
    var amplitude = 100;
    var cycle = 600;
    var startAngle = 0;
    var angleVel = Math.PI / 180 / 5;
    var color = "rgba(0,100,200,0.1)";
    var balls2 = [];
    var amplitude2 = 50;
    var cycle2 = 300;
    var startAngle2 = 0;
    var angleVel2 = Math.PI / 180 / 5;
    var color2 = "rgba(200,100,0,0.1)";
    var surperimposedBalls = [];
    var surperimposedColor = "rgba(0,0,0,0.6)";
    for (var i = 0; i <= 100; i++) {
        var b = new Ball_1.Ball();
        b.color = color;
        b.position.x = i * 18;
        b.size = 5;
        balls.push(b);
        var b2 = new Ball_1.Ball();
        b2.color = color2;
        b2.position.x = i * 18;
        b2.size = 5;
        balls2.push(b2);
        var sb = new Ball_1.Ball();
        sb.size = 5;
        sb.position.x = i * 18;
        surperimposedBalls.push(sb);
    }
    function refreshStatus() {
        for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
            var ball = balls_1[_i];
            ball.position.y = amplitude * Math.sin(2 * Math.PI * ball.position.x / cycle + startAngle) + canvas.height / 2;
        }
        for (var _a = 0, balls2_1 = balls2; _a < balls2_1.length; _a++) {
            var ball = balls2_1[_a];
            ball.position.y = amplitude2 * Math.sin(2 * Math.PI * ball.position.x / cycle2 + startAngle2) + canvas.height / 2;
        }
        for (var i = 0; i < surperimposedBalls.length; i++) {
            surperimposedBalls[i].position.y = balls[i].position.y + balls2[i].position.y - canvas.height / 2;
        }
        startAngle -= angleVel;
        startAngle2 -= angleVel2;
        setTimeout(refreshStatus, 0);
    }
    refreshStatus();
    function draw() {
        painter.clearCanvas();
        painter.drawBalls(balls);
        painter.linkBalls(balls, color);
        painter.drawBalls(balls2);
        painter.linkBalls(balls2, color2);
        painter.drawBalls(surperimposedBalls);
        painter.linkBalls(surperimposedBalls, surperimposedColor);
        setTimeout(draw, 0);
    }
    draw();
});
//# sourceMappingURL=surperimposed-wave.js.map