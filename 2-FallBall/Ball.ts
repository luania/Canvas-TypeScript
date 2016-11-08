import { PVector } from "../commons/script/PVector";

export class Ball {
    position: PVector;
    size: number;
    speed: PVector = new PVector(0, 0);
    acceleration: PVector = new PVector(0, 0);
    isOnBound: boolean = false;

    constructor(position: PVector, size: number) {
        this.position = position;
        this.size = size;
    }
    step() {
        if (this.isOnBound) {
            this.isOnBound = false;
        } else {
            this.speed.add(this.acceleration);
        }
        this.position.add(this.speed);
    }
    setSpeed(speed: PVector) {
        this.speed = speed;
    }
    setAcceleration(acceleration: PVector) {
        this.acceleration = acceleration;
    }
    checkBounds(canvas: HTMLCanvasElement) {
        if (this.position.x > canvas.width - this.size || this.position.x < this.size) {
            this.speed.x *= -1;
            this.isOnBound = true;
        }
        if (this.position.y > canvas.height - this.size || this.position.y < this.size) {
            this.speed.y *= -1;
            this.isOnBound = true;
        }
    }
}
