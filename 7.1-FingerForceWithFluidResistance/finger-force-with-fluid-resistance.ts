import { Board } from "./Board";

let canvas = <HTMLCanvasElement>document.getElementById("canvas")
let board = new Board(canvas);
board.generateBalls(1000);

canvas.onmousemove = function(ev: MouseEvent) {
    board.fingerBall.position.x = ev.layerX;
    board.fingerBall.position.y = ev.layerY;
}

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
