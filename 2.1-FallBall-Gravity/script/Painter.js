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
        Painter.prototype.clearCanvas = function () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        };
        return Painter;
    }());
    exports.Painter = Painter;
});
//# sourceMappingURL=Painter.js.map