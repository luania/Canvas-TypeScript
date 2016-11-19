import { PVector } from "./script/PVector";
import { Ball } from "./script/Ball";
import { BallFactory } from "./script/BallFactory";
import { FluidArea } from "./script/FluidArea";
import { Painter } from "./script/Painter";
import { ForceGenerator } from "./script/ForceGenerator";

export class Board {
    canvas: HTMLCanvasElement;
    painter: Painter;
    forceGenerator: ForceGenerator;
    fluidArea: FluidArea;
    balls: Ball[] = [];

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.forceGenerator = new ForceGenerator();
        this.painter = new Painter(canvas);
        this.fluidArea = new FluidArea(new PVector(0, canvas.height / 2), new PVector(canvas.width, canvas.height / 2))
            .setColor("rgba(0,100,200,0.1)")
            .setDensity(0.01);
    }

    generateBalls(n: number) {
        let bs: Ball[] = new BallFactory(this.canvas)
            .makeBalls(n)
            .randomSize(20)
            .randomMass(10)
            .randomXSpeed(1)
            .randomColor(0.5)
            .unifyPosition(new PVector(20,20))
            .balls;
        for (let b of bs) {
            this.balls.push(b);
        }
    }

    clearBallsAcceleration() {
        for (let ball of this.balls) {
            ball.acceleration.mult(0);
        }
    }

    stepBalls() {
        for (let ball of this.balls) {
            ball.step();
            ball.checkBounds(this.canvas);
        }
    }

    draw() {
        this.painter.clearCanvas();
        this.painter.drawFluidArea(this.fluidArea);
        for (let ball of this.balls) {
            this.painter.drawBall(ball);
        }
    }

    applyForces() {
        for (let ball of this.balls) {
            ball.applyForce(this.forceGenerator.gravitation(ball));
            ball.applyForce(this.forceGenerator.resistance(ball, this.fluidArea));
        }
    }
}
