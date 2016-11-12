import { PVector } from "./PVector";
import { Obj } from "./Obj";

export class Ball extends Obj {
    size: number = 10;

    setSize(size: number) {
        this.size = size;
        return this;
    }
    step() {
        this.speed.add(this.acceleration);
        this.position.add(this.speed);
    }
    checkBounds(canvas: HTMLCanvasElement) {
        if (this.position.x > canvas.width - this.size * 2 || this.position.x < 0) {
            this.speed.x *= -1;
            this.position.add(this.speed);
        }
        if (this.position.y > canvas.height - this.size * 2 || this.position.y < 0) {
            this.speed.y *= -1;
            this.position.add(this.speed);
        }
    }
}
