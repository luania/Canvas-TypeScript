import { PVector } from "./PVector";

export class Ball {
    color: string = "rgba(0, 0, 0, 0.5)";
    position: PVector = new PVector(10, 10);
    speed: PVector = new PVector(0, 0);
    acceleration: PVector = new PVector(0, 0);
    size: number = 1;
    mass: number = 1;

    step() {
        this.speed.add(this.acceleration);
        this.position.add(this.speed);
    }
    checkBounds(canvas: HTMLCanvasElement) {
        if (this.position.x > canvas.width - this.size || this.position.x < this.size) {
            this.speed.x *= -1;
            this.position.add(this.speed);
        }
        if (this.position.y > canvas.height - this.size || this.position.y < this.size) {
            this.speed.y *= -1;
            this.position.add(this.speed);
        }
    }

    applyForce(force: PVector) {
        this.acceleration.add(PVector.div(force, this.mass));
        return this;
    }
}
