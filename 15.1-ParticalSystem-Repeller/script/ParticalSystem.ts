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
        for (let i = 0; i < 50; i++) {
            let p = new ExPartical();
            p.position = PVector.copy(this.originPosition);
            p.velocity = new PVector(this.getNumberInNormalDistribution(0, 1), this.getNumberInNormalDistribution(1, 2) - 3);
            p.lifeSpan = Math.random() * 100;
            p.r = Math.round(Math.random() * 255);
            p.g = Math.round(Math.random() * 255);
            p.b = Math.round(Math.random() * 255);
            p.size = Math.round(Math.random() * 5) * 3;
            p.mass = 2000 + Math.random() * 2000 + 1000;
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

    applyRepeller(r: Repeller) {
        for (let p of this.particals) {
            p.applyForce(r.repel(p));
        }
    }

    applyForce(force: PVector) {
        for (let p of this.particals) {
            p.applyForce(force);
        }
    }

    draw() {
        for (let p of this.particals) {
            p.display(this.painter);
        }
    }

    getNumberInNormalDistribution(mean, std_dev) {
        return mean + (this.uniform2NormalDistribution() * std_dev);
    }

    uniform2NormalDistribution() {
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            sum = sum + Math.random();
        }
        return sum - 6;
    }
}
