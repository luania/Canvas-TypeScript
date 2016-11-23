import { Ball } from "./Ball";
import { FluidArea } from "./FluidArea";
import { Block } from "./Block";
import { PVector } from "./PVector";
import { PolarVector } from "./PolarVector";

export class Painter {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }

    drawBall(ball: Ball) {
        this.ctx.fillStyle = ball.color;
        this.ctx.beginPath();
        this.ctx.arc(ball.position.x, ball.position.y, ball.size, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    drawBalls(balls: Ball[]) {
        for (let ball of balls) {
            this.drawBall(ball);
        }
    }

    linkBalls(balls: Ball[], color: String) {
        for (let i = 0; i < balls.length - 1; i++) {
            this.drawLine(balls[i].position, balls[i + 1].position, color);
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawFluidArea(fluidArea: FluidArea) {
        this.ctx.fillStyle = fluidArea.color;
        this.ctx.beginPath();
        this.ctx.rect(fluidArea.position.x, fluidArea.position.y, fluidArea.size.x, fluidArea.size.y);
        this.ctx.fill();
    }
    drawBlock(block: Block) {
        this.ctx.fillStyle = block.color;
        this.ctx.beginPath();
        let points = block.points();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i: number = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }
        this.ctx.fill();
    }
    drawLine(p1: PVector, p2: PVector, color: String) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();
    }
}
