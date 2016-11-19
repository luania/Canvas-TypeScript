import { PVector } from "./PVector";
import { Ball } from "./Ball";

export class BallFactory {
    canvas: HTMLCanvasElement;
    balls: Ball[];

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.balls = [];
    }

    makeBalls(n: number) {
        for (let i = 0; i < n; i++) {
            this.balls.push(new Ball());
        }
        return this;
    }

    randomPosition() {
        for (let ball of this.balls) {
            ball.position =
                new PVector(
                    Math.random() * (this.canvas.width - 2 * ball.size) + ball.size,
                    Math.random() * (this.canvas.height - 2 * ball.size) + ball.size
                );
        }
        return this;
    }

    randomSize(maxSize: number) {
        for (let ball of this.balls) {
            ball.size = Math.random() * maxSize;
        }
        return this;
    }

    randomSpeed(maxSpeed: number) {
        for (let ball of this.balls) {
            ball.speed = new PVector((Math.random() - 0.5) * maxSpeed, (Math.random() - 0.5) * maxSpeed);
        }
        return this;
    }

    randomXSpeed(maxSpeed: number) {
        for (let ball of this.balls) {
            ball.speed = new PVector(Math.random() * maxSpeed, 0);
        }
        return this;
    }

    randomMass(maxMass: number) {
        for (let ball of this.balls) {
            ball.mass = Math.random() * maxMass;
        }
        return this;
    }

    randomColor(alpha: number) {
        for (let ball of this.balls) {
            ball.color =
                "rgba(" + Math.round(Math.random() * 255)
                + "," + Math.round(Math.random() * 255)
                + "," + Math.round(Math.random() * 255)
                + ", " + alpha + ")";
        }
        return this;
    }

    unifyPosition(position: PVector) {
        for (let ball of this.balls) {
            ball.position = new PVector(position.x, position.y);
        }
        return this;
    }
}
