import { Block } from "./script/Block";
import { PolarVector } from "./script/PolarVector";
import { PVector } from "./script/PVector";
import { Painter } from "./script/Painter";

let canvas = <HTMLCanvasElement>document.getElementById("canvas");
let painter = new Painter(canvas);

let center = new PVector(canvas.width / 2, canvas.height / 2);
let distance = new PolarVector(10, 0);

let block = new Block()
    .setColor("rgb(0,100,200)")
    .setPosition(PVector.add(center, distance.toPVector()))
    .setSize(new PolarVector(20, Math.PI / 6));

function refreshStatus() {
    distance.rotate(Math.PI / 180);
    distance.r += 0.1;
    block.setPosition(PVector.add(center, distance.toPVector()))
        .setAngle(distance.angle + Math.PI / 2);
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
