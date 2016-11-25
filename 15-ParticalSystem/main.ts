import { PVector } from "./commons/PVector";
import { Partical } from "./commons/Partical";
import { Painter } from "./commons/Painter";
import { ParticalSystem } from "./script/ParticalSystem";

let canvas = <HTMLCanvasElement>document.getElementById("canvas");
let painter = new Painter(canvas);
let scale = canvas.getBoundingClientRect().width / canvas.width;

let systems: ParticalSystem[] = [];
let center = new PVector(canvas.width / 2, canvas.height / 2);
let mousePosition = new PVector(0, 0);

canvas.onclick = function(ev: MouseEvent) {
    let position = new PVector(ev.layerX / scale, ev.layerY / scale);
    let s = new ParticalSystem(canvas, position, painter);
    systems.push(s);
}
canvas.onmousemove = function(ev: MouseEvent) {
    mousePosition.x = ev.layerX / scale;
    mousePosition.y = ev.layerY / scale;
}


function emit() {
    for (let s of systems) {
        s.emit();
    }
}
setInterval(emit, 30);

function run() {
    let windForce = PVector.sub(mousePosition, center);
    for (let s of systems) {
        s.applyForce(windForce);
        s.run();
    }
}
setInterval(run, 0);

function draw() {
    painter.clearCanvas();
    for (let s of systems) {
        s.draw();
    }
    setTimeout(draw, 0);
}
draw();
