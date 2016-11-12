define(["require", "exports", "../commons/script/PVector", "../commons/script/Ball"], function (require, exports, PVector_1, Ball_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = 'rgba(192, 80, 77, 1)';
    var ball = new Ball_1.Ball()
        .setSpeed(new PVector_1.PVector(0.5, 0))
        .setAcceleration(new PVector_1.PVector(0, 0.01))
        .setSize(10)
        .setPosition(new PVector_1.PVector(10, 10));
    function next() {
        ball.step();
        ball.checkBounds(canvas);
        ctx.beginPath();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.arc(ball.position.x + ball.size, ball.position.y + ball.size, ball.size, 0, 2 * Math.PI);
        ctx.fill();
        setTimeout(next, 0);
    }
    next();
});
//# sourceMappingURL=fall-ball.js.map