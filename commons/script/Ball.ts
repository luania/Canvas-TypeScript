import { PVector } from "./PVector";

export class Ball {
    position: PVector = new PVector(0, 0);
    size: number = 10;
    speed: PVector = new PVector(0, 0);
    acceleration: PVector = new PVector(0, 0);
    color: string = "rgba(192, 80, 77, 0.5)";
    mass: number = 1;

    constructor() { }

    step() {
        this.speed.add(this.acceleration);
        this.position.add(this.speed);
    }
    setPosition(position: PVector) {
        this.position = position;
        return this;
    }
    setSize(size: number) {
        this.size = size;
        return this;
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
    setMass(mass: number) {
        this.mass = mass;
        return this;
    }
    applyForce(force: PVector) {
        this.acceleration.add(PVector.div(force, this.mass));
        return this;
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
