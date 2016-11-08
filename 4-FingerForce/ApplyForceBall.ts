import {PVector} from "../commons/script/PVector";
import { Ball } from "../commons/script/Ball";

export class ApplyForceBall extends Ball {
    mass: number = 1;
    setMass(mass: number) {
        this.mass = mass;
        return this;
    }
    applyForce(force:PVector){
        this.acceleration  = force.div(this.mass);
    }
}
