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
        Painter.prototype.drawBlock = function (block) {
            this.ctx.fillStyle = block.color;
            this.ctx.beginPath();
            var points = block.points();
            this.ctx.moveTo(points[0].x, points[0].y);
            for (var i = 1; i < points.length; i++) {
                this.ctx.lineTo(points[i].x, points[i].y);
            }
            this.ctx.fill();
        };
        Painter.prototype.drawLine = function (p1, p2, color) {
            this.ctx.strokeStyle = color;
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.stroke();
        };
        return Painter;
    }());
    exports.Painter = Painter;
});
//# sourceMappingURL=Painter.js.map