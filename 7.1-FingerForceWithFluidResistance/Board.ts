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
    fingerBall: Ball = new Ball()

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.forceGenerator = new ForceGenerator();
        this.painter = new Painter(canvas);

        this.fluidArea = new FluidArea(new PVector(0, 0), new PVector(canvas.width, canvas.height))
        this.fluidArea.color = "rgba(0,100,200,0.1)";
        this.fluidArea.density = 1;

        this.fingerBall.size = 10;
        this.fingerBall.mass = 1000;
        this.fingerBall.color = "rgba(80, 80, 80, 1)";
    }

    generateBalls(n: number) {
        let bs: Ball[] = new BallFactory(this.canvas)
            .makeBalls(n)
            .randomSize(20)
            .randomMass(10)
            .randomColor(0.5)
            .randomPosition()
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
        this.painter.drawBall(this.fingerBall);
    }

    applyForces() {
        for (let ball of this.balls) {
            ball.applyForce(this.forceGenerator.repulsion(this.fingerBall, ball));
            ball.applyForce(this.forceGenerator.resistance(ball, this.fluidArea));
        }
    }
}
