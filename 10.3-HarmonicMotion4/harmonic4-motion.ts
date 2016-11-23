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
    .setSize(new PolarVector(20, Math.PI / 6));
let indicatorX = new PolarVector(500, -Math.PI / 2);
let indicatorY = new PolarVector(300, -Math.PI / 2);

function refreshStatus() {
    indicatorX.angle += Math.PI / 180 / 5;
    indicatorY.angle += Math.PI / 180 / 3;
    block.position.x = PVector.add(indicatorX.toPVector(), center).x;
    block.position.y = PVector.add(indicatorY.toPVector(), center).y;
    setTimeout(refreshStatus, 0);
}
refreshStatus();
function draw() {
    // painter.clearCanvas();
    painter.ctx.drawImage
    painter.drawBlock(block);
    painter.drawLine(center, PVector.add(indicatorX.toPVector(), center), "rgba(0,0,0,0.01)");
    painter.drawLine(center, PVector.add(indicatorY.toPVector(), center), "rgba(0,0,0,0.01)");
    setTimeout(draw, 0);
}
draw();
