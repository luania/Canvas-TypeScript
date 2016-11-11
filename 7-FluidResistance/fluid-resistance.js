define(["require", "exports", "./Board"], function (require, exports, Board_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var board = new Board_1.Board(canvas);
    function refreshStatus() {
        board.clearBallsAcceleration();
        board.applyForces();
        board.stepBalls();
        setTimeout(refreshStatus, 0);
    }
    refreshStatus();
    function generateBalls() {
        board.generateBalls(10);
        setTimeout(generateBalls, 200);
    }
    generateBalls();
    function draw() {
        board.draw();
    }
    setInterval(draw, 0);
});
//# sourceMappingURL=fluid-resistance.js.map