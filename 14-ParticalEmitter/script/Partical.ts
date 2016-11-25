import { PVector } from "./PVector";

export class Partical {
    position: PVector = new PVector(0, 0);
    velocity: PVector = new PVector(0, 0);
    acceleration: PVector = new PVector(0, 0);
    lifeSpan: number = 0;

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifeSpan--;
    }

    isDead() {
        return this.lifeSpan <= 0;
    }
}
