import { PVector } from "../commons/script/PVector";
import { Ball } from "../commons/script/Ball";
import { BallFactory } from "../commons/script/BallFactory";

var canvas = <HTMLCanvasElement>document.getElementById("canvas")
var ctx = canvas.getContext("2d");

const GRAVITITIONAL_CONST: number = 0.001;

let balls = new BallFactory(canvas)
    .makeBalls(500)
    .randomSize(10)
    .randomPosition()
    .randomMass(300)
    .randomColor(0.5)
    .balls;

function drawBall(ball: Ball) {
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.position.x, ball.position.y, ball.size, 0, 2 * Math.PI);
    ctx.fill();
}

function clearBallsAcceleration() {
    for (let ball of balls) {
        ball.acceleration.mult(0);
    }
}

function applyForces() {
    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            let sub = PVector.sub(balls[j].position, balls[i].position);
            let distance = sub.mag();
            let force = PVector.normal(sub).mult(
                GRAVITITIONAL_CONST * balls[j].mass * balls[i].mass / distance / distance
            );
            balls[i].applyForce(force);
            balls[j].applyForce(PVector.mult(force, -1));
        }
    }
}

function stepAndDrawBalls() {
    for (let ball of balls) {
        ball.step();
        // ball.checkBounds(canvas);
        drawBall(ball);
    }
}

function next() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearBallsAcceleration();
    applyForces();
    stepAndDrawBalls();
    setTimeout(next, 0);
}
next();
