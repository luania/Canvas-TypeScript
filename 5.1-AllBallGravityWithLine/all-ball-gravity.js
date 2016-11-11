define(["require", "exports", "../commons/script/PVector", "../commons/script/BallFactory"], function (require, exports, PVector_1, BallFactory_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var GRAVITITIONAL_CONST = 0.001;
    var balls = new BallFactory_1.BallFactory(canvas)
        .makeBalls(100)
        .randomSize(10)
        .randomPosition()
        .randomMass(300)
        .randomColor(0.8)
        .balls;
    function drawBall(ball) {
        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.position.x, ball.position.y, ball.size, 0, 2 * Math.PI);
        ctx.fill();
    }
    function clearBallsAcceleration() {
        for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
            var ball = balls_1[_i];
            ball.acceleration.mult(0);
        }
    }
    function applyForces() {
        for (var i = 0; i < balls.length; i++) {
            for (var j = i + 1; j < balls.length; j++) {
                var sub = PVector_1.PVector.sub(balls[j].position, balls[i].position);
                var distance = sub.mag();
                var force = PVector_1.PVector.normal(sub).mult(GRAVITITIONAL_CONST * balls[j].mass * balls[i].mass / distance / distance);
                balls[i].applyForce(force);
                balls[j].applyForce(PVector_1.PVector.mult(force, -1));
            }
        }
    }
    function stepBalls() {
        for (var _i = 0, balls_2 = balls; _i < balls_2.length; _i++) {
            var ball = balls_2[_i];
            ball.step();
        }
    }
    function drawBalls() {
        for (var _i = 0, balls_3 = balls; _i < balls_3.length; _i++) {
            var ball = balls_3[_i];
            drawBall(ball);
        }
    }
    function drawLines() {
        for (var i = 0; i < balls.length; i++) {
            for (var j = i + 1; j < balls.length; j++) {
                ctx.strokeStyle = "rgba(0,0,0,0.01)";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(balls[i].position.x, balls[i].position.y);
                ctx.lineTo(balls[j].position.x, balls[j].position.y);
                ctx.stroke();
            }
        }
    }
    function next() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        clearBallsAcceleration();
        applyForces();
        stepBalls();
        drawLines();
        drawBalls();
        setTimeout(next, 0);
    }
    next();
});
//# sourceMappingURL=all-ball-gravity.js.map