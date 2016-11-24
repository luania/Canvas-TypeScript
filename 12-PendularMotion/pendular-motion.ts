import { PolarVector } from "./script/PolarVector";
import { PVector } from "./script/PVector";
import { Painter } from "./script/Painter";
import { Ball } from "./script/Ball";
import { ForceGenerator } from "./script/ForceGenerator";

let canvas = <HTMLCanvasElement>document.getElementById("canvas");
let painter = new Painter(canvas);

let originBall = new Ball();
originBall.size = 5;
originBall.color = "rgb(0,0,0)";
originBall.position = new PVector(canvas.width / 2, canvas.height / 4);

let pendulumBall = new Ball();
pendulumBall.size = 20;
pendulumBall.color = "rgb(0,100,200)";
pendulumBall.position = new PVector(canvas.width / 4 * 3, canvas.height / 4);

let angleVel = 0;

function refreshStatus() {
    let distance = PVector.sub(pendulumBall.position, originBall.position);
    let angleAcc = Math.cos(distance.toPolarVector().angle)
        * ForceGenerator.earthAcc().mag() / distance.mag();
    angleVel += angleAcc;
    pendulumBall.position = PVector.add(
        originBall.position,
        PVector.rotate(distance, angleVel)
    );
    setTimeout(refreshStatus, 0);
}
refreshStatus();

function draw() {
    painter.clearCanvas();
    painter.drawLine(originBall.position, pendulumBall.position, "rgb(0,100,200)");
    painter.drawBall(originBall);
    painter.drawBall(pendulumBall);
    setTimeout(draw, 0);
}
draw();
