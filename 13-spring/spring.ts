import { PolarVector } from "./script/PolarVector";
import { PVector } from "./script/PVector";
import { Painter } from "./script/Painter";
import { Ball } from "./script/Ball";
import { ForceGenerator } from "./script/ForceGenerator";

let canvas = <HTMLCanvasElement>document.getElementById("canvas");
let painter = new Painter(canvas);

let originBall = new Ball();
originBall.size = 5;
originBall.color = "rgb(0,0,0)";
originBall.position = new PVector(canvas.width / 4, canvas.height / 2);

let restLength = 500;
let springK = 0.1;

let pendulumBall = new Ball();
pendulumBall.size = 20;
pendulumBall.mass = 1000;
pendulumBall.color = "rgb(0,100,200)";
pendulumBall.position = new PVector(originBall.position.x + 50, originBall.position.y);

function refreshStatus() {
    let distance = PVector.sub(originBall.position, pendulumBall.position);
    let restDistance = PVector.add(distance, PVector.normal(distance).mult(-restLength));
    let springForce = restDistance.mult(springK);
    pendulumBall.applyForce(springForce);
    pendulumBall.step();
    setTimeout(refreshStatus, 0);
}
refreshStatus();

function draw() {
    painter.clearCanvas();
    // painter.drawLine(originBall.position, pendulumBall.position, "rgb(0,100,200)");
    let distance = PVector.sub(originBall.position, pendulumBall.position);
    let a = (distance.mag()- originBall.size - pendulumBall.size) / 50 ;
    let springStartX = originBall.position.x+originBall.size;
    for (let i = 0; i < 50; i++) {
        if (i == 0) {
            painter.drawLine(
                new PVector(springStartX + a * i, originBall.position.y),
                new PVector(springStartX + a * (i + 1), originBall.position.y + ((i + 1) % 2 == 0 ? 10 : -10)),
                "rgb(0,100,200)"
            );
            continue;
        }
        if (i == 49) {
            painter.drawLine(
                new PVector(springStartX + a * i, originBall.position.y + (i % 2 == 0 ? 10 : -10)),
                new PVector(springStartX + a * (i + 1), originBall.position.y),
                "rgb(0,100,200)"
            );
            continue;
        }
        painter.drawLine(
            new PVector(springStartX + a * i, originBall.position.y + (i % 2 == 0 ? 10 : -10)),
            new PVector(springStartX + a * (i + 1), originBall.position.y + ((i + 1) % 2 == 0 ? 10 : -10)),
            "rgb(0,100,200)"
        );
    }
    painter.drawBall(originBall);
    painter.drawBall(pendulumBall);
    setTimeout(draw, 0);
}
draw();
