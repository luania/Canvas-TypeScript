define(["require", "exports"], function (require, exports) {
    "use strict";
    var FluidArea = (function () {
        function FluidArea(position, size) {
            this.position = position;
            this.size = size;
        }
        FluidArea.prototype.setPosition = function (position) {
            this.position = position;
            return this;
        };
        FluidArea.prototype.setSize = function (size) {
            this.size = size;
            return this;
        };
        FluidArea.prototype.setColor = function (color) {
            this.color = color;
            return this;
        };
        FluidArea.prototype.setDensity = function (density) {
            this.density = density;
            return this;
        };
        FluidArea.prototype.containBall = function (ball) {
            return ball.position.x > this.position.x - ball.size * 2
                && ball.position.x < this.position.x + this.size.x
                && ball.position.y > this.position.y - ball.size * 2
                && ball.position.y < this.position.y + this.size.y;
        };
        return FluidArea;
    }());
    exports.FluidArea = FluidArea;
});
//# sourceMappingURL=FluidArea.js.map