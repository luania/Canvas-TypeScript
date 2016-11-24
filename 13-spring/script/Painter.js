define(["require", "exports"], function (require, exports) {
    "use strict";
    var Painter = (function () {
        function Painter(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext("2d");
        }
        Painter.prototype.drawBall = function (ball) {
            this.ctx.fillStyle = ball.color;
            this.ctx.beginPath();
            this.ctx.arc(ball.position.x, ball.position.y, ball.size, 0, 2 * Math.PI);
            this.ctx.fill();
        };
        Painter.prototype.drawBalls = function (balls) {
            for (var _i = 0, balls_1 = balls; _i < balls_1.length; _i++) {
                var ball = balls_1[_i];
                this.drawBall(ball);
            }
        };
        Painter.prototype.linkBalls = function (balls, color) {
            for (var i = 0; i < balls.length - 1; i++) {
                this.drawLine(balls[i].position, balls[i + 1].position, color);
            }
        };
        Painter.prototype.clearCanvas = function () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        };
        Painter.prototype.drawFluidArea = function (fluidArea) {
            this.ctx.fillStyle = fluidArea.color;
            this.ctx.beginPath();
            this.ctx.rect(fluidArea.position.x, fluidArea.position.y, fluidArea.size.x, fluidArea.size.y);
            this.ctx.fill();
        };
        Painter.prototype.drawBlock2 = function (block) {
            this.ctx.fillStyle = block.color;
            this.rotate(block.position, block.angle);
            this.ctx.beginPath();
            var point1 = block.size.toPVector();
            this.ctx.moveTo(point1.x, point1.y);
            this.ctx.lineTo(point1.x, -point1.y);
            this.ctx.lineTo(-point1.x, -point1.y);
            this.ctx.lineTo(-point1.x, point1.y);
            this.ctx.fill();
            this.rotateBack(block.position, block.angle);
        };
        Painter.prototype.drawLine = function (p1, p2, color) {
            this.ctx.strokeStyle = color;
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.stroke();
        };
        Painter.prototype.rotate = function (center, angle) {
            this.ctx.translate(center.x, center.y);
            this.ctx.rotate(angle);
        };
        Painter.prototype.rotateBack = function (center, angle) {
            this.ctx.rotate(-angle);
            this.ctx.translate(-center.x, -center.y);
        };
        return Painter;
    }());
    exports.Painter = Painter;
});
//# sourceMappingURL=Painter.js.map