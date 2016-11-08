define(["require", "exports", "../commons/script/PVector", "./ApplyForceBall"], function (require, exports, PVector_1, ApplyForceBall_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var ball1 = new ApplyForceBall_1.ApplyForceBall(new PVector_1.PVector(canvas.width / 2, canvas.height / 2), 10)
        .setSpeed(new PVector_1.PVector(0, 0))
        .setMass(10000)
        .setColor("rgba(80, 80, 200, 0.6)");
    var ball2 = new ApplyForceBall_1.ApplyForceBall(new PVector_1.PVector(canvas.width / 2, canvas.height / 2), 10)
        .setSpeed(new PVector_1.PVector(0, 0))
        .setMass(15000)
        .setColor("rgba(80, 200, 80, 0.6)");
    var ball3 = new ApplyForceBall_1.ApplyForceBall(new PVector_1.PVector(canvas.width / 2, canvas.height / 2), 10)
        .setSpeed(new PVector_1.PVector(0, 0))
        .setMass(20000)
        .setColor("rgba(200, 80, 80, 0.6)");
    var ball4 = new ApplyForceBall_1.ApplyForceBall(new PVector_1.PVector(canvas.width / 2, canvas.height / 2), 10)
        .setSpeed(new PVector_1.PVector(0, 0))
        .setMass(25000)
        .setColor("rgba(200, 200, 80, 0.6)");
    var ball5 = new ApplyForceBall_1.ApplyForceBall(new PVector_1.PVector(canvas.width / 2, canvas.height / 2), 10)
        .setSpeed(new PVector_1.PVector(0, 0))
        .setMass(30000)
        .setColor("rgba(200, 80, 200, 0.6)");
    var balls = [ball1, ball2, ball3, ball4, ball5];
    var fingerPosition = new PVector_1.PVector(canvas.width / 2, canvas.width / 2);
    canvas.onmousemove = function (ev) {
        fingerPosition.x = ev.layerX;
        fingerPosition.y = ev.layerY;
    };
    function drawBall(ball) {
        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.position.x, ball.position.y, ball.size, 0, 2 * Math.PI);
        ctx.fill();
    }
    function drawFingerPosition() {
        ctx.fillStyle = "rgba(80, 80, 80, 1)";
        ctx.beginPath();
        ctx.arc(fingerPosition.x, fingerPosition.y, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
    function next() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
            var ball = balls_1[_i];
            ball.applyForce(PVector_1.PVector.sub(fingerPosition, ball.position));
            ball.step();
            ball.checkBounds(canvas);
            drawBall(ball);
        }
        drawFingerPosition();
        setTimeout(next, 0);
    }
    next();
});
//# sourceMappingURL=finger-force.js.map