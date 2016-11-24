import { PVector } from "./PVector";
import { Ball } from "./Ball";

export class FluidArea {
    position: PVector;
    size: PVector;
    color: string;
    density: number;
    constructor(position, size) {
        this.position = position;
        this.size = size;
    }
    setPosition(position: PVector) {
        this.position = position;
        return this;
    }
    setSize(size: PVector) {
        this.size = size;
        return this;
    }
    setColor(color: string) {
        this.color = color;
        return this;
    }
    setDensity(density: number) {
        this.density = density;
        return this;
    }
    containBall(ball: Ball) {
        return ball.position.x > this.position.x - ball.size * 2
            && ball.position.x < this.position.x + this.size.x
            && ball.position.y > this.position.y - ball.size * 2
            && ball.position.y < this.position.y + this.size.y;
    }
}
