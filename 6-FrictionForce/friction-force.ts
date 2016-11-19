import { PVector } from "./script/PVector";
import { Ball } from "./script/Ball";
import { BallFactory } from "./script/BallFactory";
import { Painter } from "./script/Painter";

let canvas = <HTMLCanvasElement>document.getElementById("canvas")
var painter: Painter = new Painter(canvas);

const FRICTION_CONST: number = 1;
const GRAVITITIONAL_CONST: number = 0.001;

let balls = new BallFactory(canvas)
    .makeBalls(2000)
    .randomPosition()
    .randomMass(300)
    .randomSpeed(3)
    .randomColor(0.01)
    .balls;

function clearBallsAcceleration() {
    for (let ball of balls) {
        ball.acceleration.mult(0);
    }
}

function stepAndDrawBalls() {
    for (let ball of balls) {
        ball.step();
        // ball.checkBounds(canvas);
        painter.drawBall(ball);
    }
}

function applyForces() {
    for (let ball of balls) {
        let frictionForceMag = FRICTION_CONST * ball.mass * GRAVITITIONAL_CONST;
        let frictionForce = PVector.normal(ball.speed).mult(-1);
        if (frictionForceMag < ball.speed.mag()) {
            frictionForce.mult(frictionForceMag);
        } else {
            frictionForce.mult(ball.speed.mag());
        }
        ball.applyForce(frictionForce);
    }
}

function next() {
    // painter.clearCanvas();
    clearBallsAcceleration();
    applyForces();
    stepAndDrawBalls();
    setTimeout(next, 0);
}
next();
