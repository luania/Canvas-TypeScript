define(["require", "exports", "../commons/script/PVector", "../commons/script/BallFactory", "../commons/script/Painter"], function (require, exports, PVector_1, BallFactory_1, Painter_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var FRICTION_CONST = 1;
    var GRAVITITIONAL_CONST = 0.001;
    var balls = new BallFactory_1.BallFactory(canvas)
        .makeBalls(20000)
        .randomSize(1)
        .randomPosition()
        .randomMass(300)
        .randomSpeed(2)
        .randomColor(0.01)
        .balls;
    function clearBallsAcceleration() {
        for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
            var ball = balls_1[_i];
            ball.acceleration.mult(0);
        }
    }
    function applyForces() {
        for (var _i = 0, balls_2 = balls; _i < balls_2.length; _i++) {
            var ball = balls_2[_i];
            var frictionForceMag = FRICTION_CONST * ball.mass * GRAVITITIONAL_CONST;
            var frictionForce = PVector_1.PVector.normal(ball.speed).mult(-1);
            if (frictionForceMag < ball.speed.mag()) {
                frictionForce.mult(frictionForceMag);
            }
            else {
                frictionForce.mult(ball.speed.mag());
            }
            ball.applyForce(frictionForce);
        }
    }
    function stepAndDrawBalls() {
        for (var _i = 0, balls_3 = balls; _i < balls_3.length; _i++) {
            var ball = balls_3[_i];
            ball.step();
            painter.drawBall(ball);
        }
    }
    function next() {
        clearBallsAcceleration();
        applyForces();
        stepAndDrawBalls();
        setTimeout(next, 0);
    }
    next();
});
//# sourceMappingURL=friction-force.js.map