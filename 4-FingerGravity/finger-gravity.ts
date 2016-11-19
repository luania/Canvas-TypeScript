import { PVector } from "./script/PVector";
import { Ball } from "./script/Ball";
import { BallFactory } from "./script/BallFactory";

var canvas = <HTMLCanvasElement>document.getElementById("canvas")
var ctx = canvas.getContext("2d");

const GRAVITITIONAL_CONST: number = 6;

let balls = new BallFactory(canvas)
    .makeBalls(1000)
    .randomSize(10)
    .randomMass(300)
    .randomColor(0.5)
    .randomPosition()
    .balls;
let fingerBall = new Ball()
fingerBall.size = 10;
fingerBall.position = new PVector(canvas.width / 2, canvas.width / 2);
fingerBall.mass = 1000;
fingerBall.color = "rgba(80, 80, 80, 1)";

canvas.onmousemove = function(ev: MouseEvent) {
    fingerBall.position.x = ev.layerX;
    fingerBall.position.y = ev.layerY;
}

function drawBall(ball: Ball) {
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.position.x, ball.position.y, ball.size, 0, 2 * Math.PI);
    ctx.fill();
}

function next() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let ball of balls) {
        let sub = PVector.sub(fingerBall.position, ball.position);
        let distance = sub.mag();
        let fingerForce = PVector.normal(sub).mult(
            GRAVITITIONAL_CONST * fingerBall.mass * ball.mass / distance / distance
        );
        ball.acceleration.mult(0);
        ball.applyForce(fingerForce);
        ball.step();
        // ball.checkBounds(canvas);
        drawBall(ball);
    }
    drawBall(fingerBall);
    setTimeout(next, 10);
}
next();
