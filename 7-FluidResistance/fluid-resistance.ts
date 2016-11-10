import { PVector } from "../commons/script/PVector";
import { Ball } from "../commons/script/Ball";
import { BallFactory } from "../commons/script/BallFactory";
import { Painter } from "../commons/script/Painter";
import { FluidArea } from "../commons/script/FluidArea";

const g = 0.01;
let canvas = <HTMLCanvasElement>document.getElementById("canvas")
let painter = new Painter(canvas);

let fluidArea = new FluidArea(new PVector(0, canvas.height / 2), new PVector(canvas.width, canvas.height / 2))
    .setColor("rgba(0,100,200,0.1)")
    .setDensity(0.01);

let balls: Ball[] = []
pushBalls();

function pushBalls() {
    let bs: Ball[] = new BallFactory(canvas)
        .makeBalls(1)
        .randomSize(20)
        .randomMass(10)
        .randomXSpeed(1)
        .randomColor(0.5)
        .unifyPosition(new PVector(0, 0))
        .balls;
    for (let b of bs) {
        balls.push(b);
    }
}


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

function drawFluidArea() {
    painter.drawFluidArea(fluidArea);
}

function isBallInsideFluid(ball: Ball) {
    return ball.position.x > fluidArea.position.x - ball.size * 2
        && ball.position.x < fluidArea.position.x + fluidArea.size.x
        && ball.position.y > fluidArea.position.y - ball.size * 2
        && ball.position.y < fluidArea.position.y + fluidArea.size.y;
}

function applyForces() {
    for (let ball of balls) {
        ball.applyForce(new PVector(0, 1).mult(ball.mass * g));
        if (isBallInsideFluid(ball)) {
            let resistance = PVector.normal(ball.speed)
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
