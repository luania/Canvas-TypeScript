import { PVector } from "./PVector";

export class PolarVector {
    r: number = 1;
    angle: number = 0;

    constructor(r: number, angle: number) {
        this.r = r;
        this.angle = angle;
    }

    rotate(angle: number) {
        this.angle += angle;
    }

    toPVector() {
        return new PVector(Math.cos(this.angle), Math.sin(this.angle))
            .mult(this.r);
    }

    static rotate(polarVector: PolarVector, angle: number) {
        return new PolarVector(polarVector.r, polarVector.angle + angle);
    }
}
