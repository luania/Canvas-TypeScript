define(["require", "exports", "./Board"], function (require, exports, Board_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var board = new Board_1.Board(canvas);
    board.generateBalls(2000);
    canvas.onmousemove = function (ev) {
        board.fingerBall.position.x = ev.layerX;
        board.fingerBall.position.y = ev.layerY;
    };
    function refreshStatus() {
        board.clearBallsAcceleration();
        board.applyForces();
        board.stepBalls();
        setTimeout(refreshStatus, 0);
    }
    refreshStatus();
    function draw() {
        board.draw();
    }
    setInterval(draw, 0);
});
//# sourceMappingURL=finger-force-with-fluid-resistance.js.map