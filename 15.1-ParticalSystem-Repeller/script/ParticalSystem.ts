import { PVector } from "../commons/PVector";
import { Partical } from "../commons/Partical";
import { ExPartical } from "./ExPartical";
import { Painter } from "../commons/Painter";
import { Repeller } from "../commons/Repeller";

export class ParticalSystem {
    canvas: HTMLCanvasElement;
    painter: Painter;

    particals: ExPartical[] = [];
    originPosition = new PVector(0, 0);

    constructor(canvas: HTMLCanvasElement, originPosition: PVector, painter?: Painter) {
        this.canvas = canvas;
        this.originPosition = originPosition;
        this.painter = painter || new Painter(canvas);
    }

    emit() {
        for (let i = 0; i < 10; i++) {
            let p = new ExPartical();
            p.position = PVector.copy(this.originPosition);
            p.velocity = new PVector((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5);
            p.lifeSpan = Math.random() * 100;
            p.r = Math.round(Math.random() * 255);
            p.g = Math.round(Math.random() * 255);
            p.b = Math.round(Math.random() * 255);
            p.size = Math.round(Math.random() * 5) * 3;
            p.mass = 2000 + Math.random() * 2000;
            this.particals.push(p);
        }
    }

    run() {
        for (let p of this.particals) {
            p.update();
            if (p.isDead()) {
                this.particals.splice(this.particals.indexOf(p), 1);
            }
        }
    }

    draw() {
        for (let p of this.particals) {
            p.display(this.painter);
        }
    }

    applyForce(force: PVector) {
        for (let p of this.particals) {
            p.applyForce(force);
        }
    }

    applyRepeller(r: Repeller) {
        for (let p of this.particals) {
            p.applyForce(r.repel(p));
        }
    }
}
