import { Board } from "./Board";

let canvas = <HTMLCanvasElement>document.getElementById("canvas")
let board = new Board(canvas);

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
