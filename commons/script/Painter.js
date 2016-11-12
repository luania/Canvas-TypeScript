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
            this.ctx.arc(ball.position.x + ball.size, ball.position.y + ball.size, ball.size, 0, 2 * Math.PI);
            this.ctx.fill();
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
            this.ctx.fillStyle = "#000";
            this.ctx.beginPath();
            var points = block.points();
            this.ctx.moveTo(points[0].x, points[0].y);
            for (var i = 1; i < points.length; i++) {
                this.ctx.lineTo(points[i].x, points[i].y);
            }
            this.ctx.fill();
        };
        return Painter;
    }());
    exports.Painter = Painter;
});
//# sourceMappingURL=Painter.js.map