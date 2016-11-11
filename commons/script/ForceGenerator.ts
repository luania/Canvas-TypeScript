import { PVector } from "./PVector";
import { Ball } from "./Ball";
import { FluidArea } from "./FluidArea";

const GRAVITY_ACCELERATION = new PVector(0, 0.0098);

export class ForceGenerator {
    gravitation(ball: Ball) {
        return PVector.mult(GRAVITY_ACCELERATION, ball.mass);
    }
    resistance(ball: Ball, fluidArea: FluidArea) {
        return fluidArea.containBall(ball) ?
            PVector.normal(ball.speed)
                .mult(-0.5)
                .mult(fluidArea.density)
                .mult(ball.size)
                .mult(ball.speed.mag() * ball.speed.mag())
            : new PVector(0, 0);
    }
}
