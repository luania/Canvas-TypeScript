import { PVector } from "./PVector";
import { Painter } from "./Painter";
import { Partical } from "./Partical";

const G = 10;

export class Repeller extends Partical {
    r: number = 0;
    g: number = 0;
    b: number = 0;
    size: number = 0;

    display(painter: Painter) {
        painter.drawCircular(
            this.position,
            this.size,
            "rgb(" + this.r + "," + this.g + "," + this.b + ")"
        );
    }

    repel(p: Partical) {
        let distance = PVector.sub(p.position, this.position);
        let d = distance.mag();
        let force = distance.setMag(G * this.mass * p.mass).div(d * d);
        return force;
    }
}
