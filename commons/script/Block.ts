import { PVector } from "./PVector";
import { PolarVector } from "./PolarVector";
import { Obj } from "./Obj";

export class Block extends Obj {
    size: PolarVector = new PolarVector(1, 0);//其实是平放的时候中心点到右下角的极坐标向量
    angle: number = 0;//从平放开始旋转的角度

    setSize(size: PolarVector) {
        this.size = size;
        return this;
    }

    setAngle(angle: number) {
        this.angle = angle;
        return this;
    }

    rotate(angle: number) {
        this.angle += angle;
    }

    points() {
        let points: PVector[] = [];
        let point1 = PolarVector.rotate(this.size, this.angle).toPVector();
        let point2 = PolarVector.rotate(this.size, this.angle - this.size.angle * 2).toPVector();
        points.push(PVector.add(this.position, point1));
        points.push(PVector.add(this.position, point2));
        points.push(PVector.add(this.position, PVector.mult(point1, -1)));
        points.push(PVector.add(this.position, PVector.mult(point2, -1)));
        return points;
    }
}
