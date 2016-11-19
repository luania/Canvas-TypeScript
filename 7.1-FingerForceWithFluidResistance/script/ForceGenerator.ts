import { PVector } from "./PVector";
import { Ball } from "./Ball";
import { FluidArea } from "./FluidArea";

const GRAVITY_ACCELERATION = new PVector(0, 0.0098);
const GRAVITITIONAL_CONST: number = 1;

export class ForceGenerator {
    gravitation(b1: Ball, b2: Ball) {
        let sub = PVector.sub(b1.position, b2.position);
        let distance = sub.mag();
        return PVector.normal(sub).mult(
            GRAVITITIONAL_CONST * b1.mass * b2.mass / distance / distance
        );
    }
    earthGravitation(ball: Ball) {
        return PVector.mult(GRAVITY_ACCELERATION, ball.mass);
    }
    resistance(ball: Ball, fluidArea: FluidArea) {
        if (ball.speed.mag() == 0 || !fluidArea.containBall(ball)) {
            return new PVector(0, 0);
        }
        return PVector.normal(ball.speed)
            .mult(-0.5)
            .mult(fluidArea.density)
            .mult(ball.size)
            .mult(ball.speed.mag() * ball.speed.mag());
    }
    repulsion(b1: Ball, b2: Ball) {
        return this.gravitation(b1, b2).mult(-1);
    }
}
