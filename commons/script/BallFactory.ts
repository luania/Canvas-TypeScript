import { PVector } from "./PVector";
import { Ball } from "./Ball";
import { ApplyForceBall } from "./ApplyForceBall";

export class BallFactory {
    centerBalls(canvas: HTMLCanvasElement) {
        let ball1 = new ApplyForceBall(new PVector(canvas.width / 2, canvas.height / 2), 10)
            .setSpeed(new PVector(0, 0))
            .setMass(100)
            .setColor("rgba(80, 80, 200, 0.5)");
        let ball2 = new ApplyForceBall(new PVector(canvas.width / 2, canvas.height / 2), 10)
            .setSpeed(new PVector(0, 0))
            .setMass(150)
            .setColor("rgba(80, 200, 80, 0.5)");
        let ball3 = new ApplyForceBall(new PVector(canvas.width / 2, canvas.height / 2), 10)
            .setSpeed(new PVector(0, 0))
            .setMass(200)
            .setColor("rgba(200, 80, 80, 0.5)");
        let ball4 = new ApplyForceBall(new PVector(canvas.width / 2, canvas.height / 2), 10)
            .setSpeed(new PVector(0, 0))
            .setMass(250)
            .setColor("rgba(200, 200, 80, 0.5)");
        let ball5 = new ApplyForceBall(new PVector(canvas.width / 2, canvas.height / 2), 10)
            .setSpeed(new PVector(0, 0))
            .setMass(300)
            .setColor("rgba(200, 80, 200, 0.5)");
        return [ball1, ball2, ball3, ball4, ball5];
    }

    random(n: number, canvas: HTMLCanvasElement) {
        let balls: ApplyForceBall[] = [];
        for (let i = 0; i < n; i++) {
            balls.push(new ApplyForceBall(new PVector(Math.random() * canvas.width, Math.random() * canvas.height), 5)
                .setMass(Math.random() * 300)
                .setColor("rgba("
                + Math.round(Math.random() * 17) * 15
                + ","
                + Math.round(Math.random() * 17) * 15
                + ","
                + Math.round(Math.random() * 17) * 15
                + ", 0.5)"));
        }
        return balls;
    }
}
