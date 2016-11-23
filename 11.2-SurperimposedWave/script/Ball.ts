import { PVector } from "./PVector";
import { Obj } from "./Obj";

export class Ball extends Obj {
    size: number = 1;

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
}
