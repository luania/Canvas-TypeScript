import { PolarVector } from "./script/PolarVector";
import { PVector } from "./script/PVector";
import { Painter } from "./script/Painter";
import { Ball } from "./script/Ball";

let canvas = <HTMLCanvasElement>document.getElementById("canvas");
let painter = new Painter(canvas);

let balls: Ball[] = [];

let amplitude = 100;
let cycle = 600;

let startAngle = 0;
let angleVel = Math.PI / 180 / 5;

for (let i = 0; i <= 100; i++) {
    let b: Ball = new Ball();
    b.color = "rgba(0,100,200,0.5)";
    b.position.x = i * 18;
    b.size = 5;
    balls.push(b);
}

function refreshStatus() {
    for (let ball of balls) {
        ball.position.y = amplitude * Math.sin(2 * Math.PI * ball.position.x / cycle + startAngle) + canvas.height / 2;
    }
    startAngle -= angleVel;
    setTimeout(refreshStatus, 0);
}
refreshStatus();

function draw() {
    painter.clearCanvas();
    for (let ball of balls) {
        painter.drawBall(ball);
    }

    for (let i = 0; i < balls.length - 1; i++) {
        painter.drawLine(balls[i].position, balls[i + 1].position, "rgba(0,100,200,0.5)");
    }
    setTimeout(draw, 0);
}
draw();
