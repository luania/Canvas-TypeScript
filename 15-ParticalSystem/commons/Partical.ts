import { PVector } from "./PVector";

export class Partical {
    position: PVector = new PVector(0, 0);
    velocity: PVector = new PVector(0, 0);
    acceleration: PVector = new PVector(0, 0);
    lifeSpan: number = 0;
    mass: number = 1;

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifeSpan--;
        this.acceleration.mult(0);
    }

    applyForce(force: PVector) {
        this.acceleration.add(PVector.div(force, this.mass));
    }

    isDead() {
        return this.lifeSpan <= 0;
    }
}
