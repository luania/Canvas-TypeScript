define(["require", "exports", "./script/PVector", "./script/Ball", "./script/BallFactory"], function (require, exports, PVector_1, Ball_1, BallFactory_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var GRAVITITIONAL_CONST = 6;
    var balls = new BallFactory_1.BallFactory(canvas)
        .makeBalls(1000)
        .randomSize(10)
        .randomMass(300)
        .randomColor(0.5)
        .randomPosition()
        .balls;
    var fingerBall = new Ball_1.Ball();
    fingerBall.size = 10;
    fingerBall.position = new PVector_1.PVector(canvas.width / 2, canvas.width / 2);
    fingerBall.mass = 1000;
    fingerBall.color = "rgba(80, 80, 80, 1)";
    canvas.onmousemove = function (ev) {
        fingerBall.position.x = ev.layerX;
        fingerBall.position.y = ev.layerY;
    };
    function drawBall(ball) {
        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.position.x, ball.position.y, ball.size, 0, 2 * Math.PI);
        ctx.fill();
    }
    function next() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
            var ball = balls_1[_i];
            var sub = PVector_1.PVector.sub(fingerBall.position, ball.position);
            var distance = sub.mag();
            var fingerForce = PVector_1.PVector.normal(sub).mult(GRAVITITIONAL_CONST * fingerBall.mass * ball.mass / distance / distance);
            ball.acceleration.mult(0);
            ball.applyForce(fingerForce);
            ball.step();
            drawBall(ball);
        }
        drawBall(fingerBall);
        setTimeout(next, 10);
    }
    next();
});
//# sourceMappingURL=finger-gravity.js.map