import { Partical } from "../commons/Partical";
import { Painter } from "../commons/Painter";

export class ExPartical extends Partical {
    r: number = 0;
    g: number = 0;
    b: number = 0;
    size: number = 0;

    // display(painter: Painter) {
    //     painter.drawCircular(
    //         this.position,
    //         this.size,
    //         "rgba(" + this.r + "," + this.g + "," + this.b + ", " + this.lifeSpan / 255 + ")"
    //     );
    // }

    display(painter: Painter) {
        let grd: CanvasGradient = painter.ctx.createRadialGradient(
            this.position.x,
            this.position.y,
            0,
            this.position.x,
            this.position.y,
            this.size
        );
        grd.addColorStop(0.000, "rgba(255,0,0," + this.lifeSpan / 510 + ")");
        grd.addColorStop(0.3, "rgba(255,0,0," + this.lifeSpan / 765 + ")");
        grd.addColorStop(1.0, "rgba(255,0,0,0)");

        painter.drawCircular(
            this.position,
            this.size,
            grd
        );
    }
}
