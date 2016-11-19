import {PVector} from "./PVector";

var canvas = <HTMLCanvasElement>document.getElementById("canvas")
var ctx = canvas.getContext("2d");
ctx.fillStyle = 'rgba(192, 80, 77, 0.1)';

var position: PVector = new PVector(canvas.width / 2, canvas.height / 2);
ctx.beginPath();
ctx.moveTo(position.x, position.y);

function next() {
    position.add(new PVector((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20));
    ctx.beginPath();
    ctx.arc(position.x, position.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    setTimeout(next, 0);
}
next();
