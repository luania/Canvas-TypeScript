import { Ball } from "./Ball";
import { FluidArea } from "./FluidArea";

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
        this.ctx.arc(ball.position.x + ball.size, ball.position.y + ball.size, ball.size, 0, 2 * Math.PI);
        this.ctx.fill();
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
}
