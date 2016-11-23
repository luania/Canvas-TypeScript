import { PVector } from "./PVector";

export abstract class Obj {
    color: string = "rgba(192, 80, 77, 0.5)";
    mass: number = 1;
    position: PVector = new PVector(0, 0);
    speed: PVector = new PVector(0, 0);
    acceleration: PVector = new PVector(0, 0);
    
    applyForce(force: PVector) {
        this.acceleration.add(PVector.div(force, this.mass));
        return this;
    }
}
