import { PVector } from "./PVector";

export class FluidArea {
    position: PVector;
    size: PVector;
    color: string;
    density: number;
    constructor(position, size) {
        this.position = position;
        this.size = size;
    }
    setPosition(position: PVector) {
        this.position = position;
        return this;
    }
    setSize(size: PVector) {
        this.size = size;
        return this;
    }
    setColor(color: string) {
        this.color = color;
        return this;
    }
    setDensity(density: number) {
        this.density = density;
        return this;
    }
}
