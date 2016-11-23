import { Block } from "./script/Block";
import { PolarVector } from "./script/PolarVector";
import { PVector } from "./script/PVector";
import { Painter } from "./script/Painter";

let canvas = <HTMLCanvasElement>document.getElementById("canvas");
let painter = new Painter(canvas);

let center = new PVector(canvas.width / 2, canvas.height / 2);
let block = new Block()
    .setColor("rgba(0,100,200,0.02)")
    .setPosition(new PVector(center.x, center.y))
    .setSize(new PolarVector(10, Math.PI / 6));

let angle: PVector = new PVector(0, 1);
let angleVelocity = new PVector(0.003, 0.012);
let amplitude = new PVector(500, 100);

function refreshStatus() {
    block.position.x = amplitude.x * Math.cos(2 * Math.PI * angle.x);
    block.position.y = amplitude.y * Math.cos(2 * Math.PI * angle.y);
    angle.add(angleVelocity);
    block.position.add(center);
    setTimeout(refreshStatus, 0);
}
refreshStatus();

function draw() {
    // painter.clearCanvas();
    painter.ctx.drawImage
    painter.drawBlock(block);
    setTimeout(draw, 0);
}
draw();
