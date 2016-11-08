define(["require", "exports", "../commons/script/PVector", "./Ball"], function (require, exports, PVector_1, Ball_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = 'rgba(192, 80, 77, 1)';
    var ball = new Ball_1.Ball(new PVector_1.PVector(10, 10), 10);
    ball.setSpeed(new PVector_1.PVector(0.5, 0));
    ball.setAcceleration(new PVector_1.PVector(0, 0.01));
    function next() {
        ball.step();
        ball.checkBounds(canvas);
        ctx.beginPath();
        ctx.arc(ball.position.x, ball.position.y, ball.size, 0, 2 * Math.PI);
        ctx.fill();
        setTimeout(next, 0);
    }
    next();
});
//# sourceMappingURL=fall-ball.js.map