import { Block } from "./script/Block";
import { PolarVector } from "./script/PolarVector";
import { PVector } from "./script/PVector";
import { Painter } from "./script/Painter";

let canvas = <HTMLCanvasElement>document.getElementById("canvas");
let painter = new Painter(canvas);

let center = new PVector(canvas.width / 2, canvas.height / 2);
let block = new Block()
    .setColor("rgb(0,100,200)")
    .setPosition(new PVector(center.x, center.y))
    .setSize(new PolarVector(20, Math.PI / 6));

let time = 0;
let amplitude = 500;
let cycle = 100;


function refreshStatus() {
    block.position.x = center.x + amplitude * Math.cos(2 * Math.PI * time / cycle);
    setTimeout(refreshStatus, 0);
}
refreshStatus();

function draw() {
    time++;
    painter.clearCanvas();
    painter.ctx.drawImage
    painter.drawBlock(block);
    setTimeout(draw, 0);
}
draw();
