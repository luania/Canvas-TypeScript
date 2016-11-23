import { PolarVector } from "./script/PolarVector";
import { PVector } from "./script/PVector";
import { Painter } from "./script/Painter";
import { Ball } from "./script/Ball";

let canvas = <HTMLCanvasElement>document.getElementById("canvas");
let painter = new Painter(canvas);

let balls: Ball[] = [];

let amplitude = 100;
let cycle = 600;

for (let i = 0; i < 1800; i++) {
    let b: Ball = new Ball();
    b.color = "rgba(0,100,200,0.5)";
    b.position.x = i;
    b.position.y = amplitude * Math.cos(2 * Math.PI * i / cycle) + canvas.height / 2;
    balls.push(b);
}

function refreshStatus() {
}
refreshStatus();

function draw() {
    painter.clearCanvas();
    for (let ball of balls) {
        painter.drawBall(ball);
    }
    setTimeout(draw, 0);
}
draw();
