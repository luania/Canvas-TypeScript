import { PVector } from "./PVector";
import { Ball } from "./Ball";

export class ApplyForceBall extends Ball {
    mass: number = 1;
    setMass(mass: number) {
        this.mass = mass;
        return this;
    }
    applyForce(force: PVector) {
        this.acceleration.add(force.div(this.mass));
        return this;
    }
}
