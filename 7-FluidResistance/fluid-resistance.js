define(["require", "exports", "../commons/script/PVector", "../commons/script/BallFactory", "../commons/script/Painter", "../commons/script/FluidArea"], function (require, exports, PVector_1, BallFactory_1, Painter_1, FluidArea_1) {
    "use strict";
    var g = 0.01;
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var fluidArea = new FluidArea_1.FluidArea(new PVector_1.PVector(0, canvas.height / 2), new PVector_1.PVector(canvas.width, canvas.height / 2))
        .setColor("rgba(0,100,200,0.1)")
        .setDensity(0.01);
    var balls = [];
    pushBalls();
    function pushBalls() {
        var bs = new BallFactory_1.BallFactory(canvas)
            .makeBalls(1)
            .randomSize(20)
            .randomMass(10)
            .randomXSpeed(1)
            .randomColor(0.5)
            .unifyPosition(new PVector_1.PVector(0, 0))
            .balls;
        for (var _i = 0, bs_1 = bs; _i < bs_1.length; _i++) {
            var b = bs_1[_i];
            balls.push(b);
        }
    }
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
    function drawFluidArea() {
        painter.drawFluidArea(fluidArea);
    }
    function isBallInsideFluid(ball) {
        return ball.position.x > fluidArea.position.x - ball.size * 2
            && ball.position.x < fluidArea.position.x + fluidArea.size.x
            && ball.position.y > fluidArea.position.y - ball.size * 2
            && ball.position.y < fluidArea.position.y + fluidArea.size.y;
    }
    function applyForces() {
        for (var _i = 0, balls_3 = balls; _i < balls_3.length; _i++) {
            var ball = balls_3[_i];
            ball.applyForce(new PVector_1.PVector(0, 1).mult(ball.mass * g));
            if (isBallInsideFluid(ball)) {
                var resistance = PVector_1.PVector.normal(ball.speed)
                    .mult(-0.5)
                    .mult(fluidArea.density)
                    .mult(ball.size)
                    .mult(ball.speed.mag() * ball.speed.mag());
                ball.applyForce(resistance);
            }
        }
    }
    function next() {
        painter.clearCanvas();
        drawFluidArea();
        clearBallsAcceleration();
        applyForces();
        stepAndDrawBalls();
        setTimeout(next, 0);
    }
    next();
    function productBalls() {
        pushBalls();
        setTimeout(productBalls, 200);
    }
    productBalls();
});
//# sourceMappingURL=fluid-resistance.js.map