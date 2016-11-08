import { PVector } from "./PVector";

export class Ball {
    position: PVector;
    size: number;
    speed: PVector = new PVector(0, 0);
    acceleration: PVector = new PVector(0, 0);
    color: string = "rgba(192, 80, 77, 1)";

    constructor(position: PVector, size: number) {
        this.position = position;
        this.size = size;
    }
    step() {
        this.speed.add(this.acceleration);
        this.position.add(this.speed);
    }
    setSpeed(speed: PVector) {
        this.speed = speed;
        return this;
    }
    setAcceleration(acceleration: PVector) {
        this.acceleration = acceleration;
        return this;
    }
    setColor(color: string) {
        this.color = color;
        return this;
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
