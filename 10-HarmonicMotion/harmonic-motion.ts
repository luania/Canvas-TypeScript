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
let indicator = new PolarVector(300, -Math.PI / 2);

function refreshStatus() {
    indicator.angle += Math.PI / 180;
    block.position.x = PVector.add(indicator.toPVector(), center).x;
    setTimeout(refreshStatus, 0);
}
refreshStatus();
function draw() {
    painter.clearCanvas();
    painter.ctx.drawImage
    painter.drawBlock(block);
    painter.drawLine(center, PVector.add(indicator.toPVector(), center), "rgb(0,0,0)");
    setTimeout(draw, 0);
}
draw();
