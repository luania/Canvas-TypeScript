import { PVector } from "./script/PVector";
import { Ball } from "./script/Ball";
import { Painter } from "./script/Painter";
import { BallFactory } from "./script/BallFactory";

var canvas = <HTMLCanvasElement>document.getElementById("canvas")
let painter = new Painter(canvas);

const g = 0.01;

let balls = new BallFactory(canvas)
    .makeBalls(100)
    .randomSize(10)
    .randomMass(10)
    .randomXSpeed(0.5)
    .randomColor(1)
    .unifyPosition(new PVector(10, 10))
    .balls;

function clearBallsAcceleration() {
    for (let ball of balls) {
        ball.acceleration.mult(0);
    }
}

function stepAndDrawBalls() {
    for (let ball of balls) {
        ball.step();
        ball.checkBounds(canvas);
        painter.drawBall(ball);
    }
}

function applyForces() {
    for (let ball of balls) {
        ball.applyForce(new PVector(0, 1).mult(ball.mass * g));
    }
}

function next() {
    painter.clearCanvas();
    clearBallsAcceleration();
    applyForces();
    stepAndDrawBalls();
    setTimeout(next, 0);
}
next();
