import { PVector } from "./commons/PVector";
import { Partical } from "./commons/Partical";
import { Painter } from "./commons/Painter";
import { ParticalSystem } from "./script/ParticalSystem";
import { Repeller } from "./commons/Repeller";

let canvas = <HTMLCanvasElement>document.getElementById("canvas");
let painter = new Painter(canvas);
let scale = canvas.getBoundingClientRect().width / canvas.width;

let systems: ParticalSystem[] = [];
let mousePosition = new PVector(0, 0);

let repeller = new Repeller();
repeller.lifeSpan = 100;
repeller.r = Math.round(Math.random() * 255);
repeller.g = Math.round(Math.random() * 255);
repeller.b = Math.round(Math.random() * 255);
repeller.size = Math.round(Math.random() * 5) * 2;
repeller.mass = 100;

canvas.onclick = function(ev: MouseEvent) {
    let position = new PVector(ev.layerX / scale, ev.layerY / scale);
    let s = new ParticalSystem(canvas, position, painter);
    systems.push(s);
}
canvas.onmousemove = function(ev: MouseEvent) {
    repeller.position.x = ev.layerX / scale;
    repeller.position.y = ev.layerY / scale;
}


function emit() {
    for (let s of systems) {
        s.emit();
    }
}
setInterval(emit, 0);

function run() {
    for (let s of systems) {
        s.applyRepeller(repeller);
        s.run();
    }
}
setInterval(run, 0);

function draw() {
    painter.clearCanvas();
    for (let s of systems) {
        s.draw();
    }
    repeller.display(painter);
    setTimeout(draw, 0);
}
draw();
