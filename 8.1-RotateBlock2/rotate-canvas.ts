import { PVector } from "./script/PVector";
import { Block } from "./script/Block";
import { Painter } from "./script/Painter";
import { PolarVector } from "./script/PolarVector";

let canvas = <HTMLCanvasElement>document.getElementById("canvas")
var painter: Painter = new Painter(canvas);

let block = new Block()
block.size = new PolarVector(100, Math.PI / 7);
block.angle = Math.PI / 7 * 6;
block.position = new PVector(500, 500);

function rotate() {
    block.rotate(Math.PI / 72);
    painter.clearCanvas();
    painter.drawBlock2(block);
    setTimeout(rotate, 10);
}
rotate();
