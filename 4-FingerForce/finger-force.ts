import { PVector } from "../commons/script/PVector";
import { Ball } from "../commons/script/Ball";
import { ApplyForceBall } from "./ApplyForceBall";

var canvas = <HTMLCanvasElement>document.getElementById("canvas")
var ctx = canvas.getContext("2d");

let ball1 = new ApplyForceBall(new PVector(canvas.width / 2, canvas.height / 2), 10)
    .setSpeed(new PVector(0, 0))
    .setMass(10000)
    .setColor("rgba(80, 80, 200, 0.6)");
let ball2 = new ApplyForceBall(new PVector(canvas.width / 2, canvas.height / 2), 10)
    .setSpeed(new PVector(0, 0))
    .setMass(15000)
    .setColor("rgba(80, 200, 80, 0.6)");
let ball3 = new ApplyForceBall(new PVector(canvas.width / 2, canvas.height / 2), 10)
    .setSpeed(new PVector(0, 0))
    .setMass(20000)
    .setColor("rgba(200, 80, 80, 0.6)");
let ball4 = new ApplyForceBall(new PVector(canvas.width / 2, canvas.height / 2), 10)
    .setSpeed(new PVector(0, 0))
    .setMass(25000)
    .setColor("rgba(200, 200, 80, 0.6)");
let ball5 = new ApplyForceBall(new PVector(canvas.width / 2, canvas.height / 2), 10)
    .setSpeed(new PVector(0, 0))
    .setMass(30000)
    .setColor("rgba(200, 80, 200, 0.6)");
let balls = [ball1, ball2, ball3, ball4, ball5];

let fingerPosition: PVector = new PVector(canvas.width / 2, canvas.width / 2);
canvas.onmousemove = function(ev: MouseEvent) {
    fingerPosition.x = ev.layerX;
    fingerPosition.y = ev.layerY;
}

function drawBall(ball: Ball) {
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.position.x, ball.position.y, ball.size, 0, 2 * Math.PI);
    ctx.fill();
}

function drawFingerPosition() {
    ctx.fillStyle = "rgba(80, 80, 80, 1)";
    ctx.beginPath();
    ctx.arc(fingerPosition.x, fingerPosition.y, 10, 0, 2 * Math.PI);
    ctx.fill();
}

function next() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let ball of balls) {
        ball.applyForce(PVector.sub(fingerPosition, ball.position));
        ball.step();
        ball.checkBounds(canvas);
        drawBall(ball);
    }
    drawFingerPosition();
    setTimeout(next, 0);
}
next();
