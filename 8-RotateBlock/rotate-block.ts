import { PVector } from "./script/PVector";
import { Block } from "./script/Block";
import { Painter } from "./script/Painter";
import { PolarVector } from "./script/PolarVector";

let canvas = <HTMLCanvasElement>document.getElementById("canvas")
var painter: Painter = new Painter(canvas);

let block = new Block()
    .setSize(new PolarVector(100, Math.PI / 7))
    .setAngle(Math.PI / 7 * 6)
    .setPosition(new PVector(500, 500));

function rotate() {
    block.rotate(Math.PI / 72);
    painter.clearCanvas();
    painter.drawBlock(block);
    setTimeout(rotate, 10);
}
rotate();
