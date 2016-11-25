import { PVector } from "./script/PVector";
import { Partical } from "./script/Partical";
import { Painter } from "./script/Painter";

class ExPartical extends Partical {
    r: number = 0;
    g: number = 0;
    b: number = 0;
    size: number = 0;
}

let canvas = <HTMLCanvasElement>document.getElementById("canvas");
let painter = new Painter(canvas);

let scale = canvas.getBoundingClientRect().width / canvas.width;

let arr: ExPartical[] = [];
let originPosition = new PVector(0, 0);

canvas.onmousemove = function(ev: MouseEvent) {
    originPosition.x = ev.layerX / scale;
    originPosition.y = ev.layerY / scale;
}

function emit() {
    for (let i = 0; i < 5; i++) {
        let p = new ExPartical();
        p.position = PVector.copy(originPosition);
        p.velocity = new PVector((Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3);
        p.lifeSpan = 100;
        p.r = Math.round(Math.random() * 255);
        p.g = Math.round(Math.random() * 255);
        p.b = Math.round(Math.random() * 255);
        p.size = Math.round(Math.random() * 5) * 2;
        arr.push(p);
    }
}
setInterval(emit,30);


function refreshStatus() {
    for (let p of arr) {
        p.update();
        if (p.isDead()) {
            arr.splice(arr.indexOf(p), 1);
        }
    }
}
setInterval(refreshStatus, 10);

function draw() {
    painter.clearCanvas();
    for (let p of arr) {
        painter.drawCircular(
            p.position,
            p.size,
            "rgba(" + p.r + "," + p.g + "," + p.b + ", " + p.lifeSpan / 255 + ")"
        );
    }
    setTimeout(draw, 10);
}
draw();
