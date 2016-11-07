export class PVector {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(p: PVector) {
        this.x += p.x;
        this.y += p.y;
    }
    static random() {
        return new PVector((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);
    }
}
