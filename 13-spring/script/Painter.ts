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

    drawBlock2(block: Block) {
        this.ctx.fillStyle = block.color;
        this.rotate(block.position, block.angle);
        this.ctx.beginPath();

        let point1 = block.size.toPVector();
        this.ctx.moveTo(point1.x, point1.y);
        this.ctx.lineTo(point1.x, -point1.y);
        this.ctx.lineTo(-point1.x, -point1.y);
        this.ctx.lineTo(-point1.x, point1.y);

        this.ctx.fill();
        this.rotateBack(block.position, block.angle);
    }

    drawLine(p1: PVector, p2: PVector, color: String) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();
    }
    
    rotate(center: PVector, angle: number) {
        this.ctx.translate(center.x, center.y);
        this.ctx.rotate(angle);
    }

    rotateBack(center: PVector, angle: number) {
        this.ctx.rotate(-angle);
        this.ctx.translate(-center.x, -center.y);
    }
}
