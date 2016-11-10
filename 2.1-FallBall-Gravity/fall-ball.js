define(["require", "exports", "../commons/script/PVector", "../commons/script/Painter", "../commons/script/BallFactory"], function (require, exports, PVector_1, Painter_1, BallFactory_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var g = 0.01;
    var balls = new BallFactory_1.BallFactory(canvas)
        .makeBalls(100)
        .randomSize(10)
        .randomMass(10)
        .randomXSpeed(0.5)
        .randomColor(1)
        .unifyPosition(new PVector_1.PVector(0, 0))
        .unifyMass(5)
        .balls;
    function clearBallsAcceleration() {
        for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
            var ball = balls_1[_i];
            ball.acceleration.mult(0);
        }
    }
    function stepAndDrawBalls() {
        for (var _i = 0, balls_2 = balls; _i < balls_2.length; _i++) {
            var ball = balls_2[_i];
            ball.step();
            ball.checkBounds(canvas);
            painter.drawBall(ball);
        }
    }
    function applyForces() {
        for (var _i = 0, balls_3 = balls; _i < balls_3.length; _i++) {
            var ball = balls_3[_i];
            ball.applyForce(new PVector_1.PVector(0, 1).mult(ball.mass * g));
        }
    }
    function next() {
        painter.clearCanvas();
        clearBallsAcceleration();
        applyForces();
        stepAndDrawBalls();
        setTimeout(next, 0);
    }
    next();
});
//# sourceMappingURL=fall-ball.js.map