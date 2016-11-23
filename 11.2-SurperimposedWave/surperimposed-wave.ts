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
let color = "rgba(0,100,200,0.1)";

let balls2: Ball[] = [];
let amplitude2 = 50;
let cycle2 = 300;
let startAngle2 = 0;
let angleVel2 = Math.PI / 180 / 5;
let color2 = "rgba(200,100,0,0.1)";

let surperimposedBalls: Ball[] = [];
let surperimposedColor = "rgba(0,0,0,0.6)";

for (let i = 0; i <= 100; i++) {
    let b: Ball = new Ball();
    b.color = color;
    b.position.x = i * 18;
    b.size = 5;
    balls.push(b);

    let b2: Ball = new Ball();
    b2.color = color2;
    b2.position.x = i * 18;
    b2.size = 5;
    balls2.push(b2);

    let sb: Ball = new Ball();
    sb.size = 5;
    sb.position.x = i * 18;
    surperimposedBalls.push(sb);
}

function refreshStatus() {
    for (let ball of balls) {
        ball.position.y = amplitude * Math.sin(2 * Math.PI * ball.position.x / cycle + startAngle) + canvas.height / 2;
    }
    for (let ball of balls2) {
        ball.position.y = amplitude2 * Math.sin(2 * Math.PI * ball.position.x / cycle2 + startAngle2) + canvas.height / 2;
    }
    for (let i = 0; i < surperimposedBalls.length; i++) {
        surperimposedBalls[i].position.y = balls[i].position.y + balls2[i].position.y - canvas.height / 2;
    }
    startAngle -= angleVel;
    startAngle2 -= angleVel2;
    setTimeout(refreshStatus, 0);
}
refreshStatus();

function draw() {
    painter.clearCanvas();

    painter.drawBalls(balls);
    painter.linkBalls(balls, color);

    painter.drawBalls(balls2);
    painter.linkBalls(balls2, color2);

    painter.drawBalls(surperimposedBalls);
    painter.linkBalls(surperimposedBalls, surperimposedColor);

    setTimeout(draw, 0);
}
draw();
