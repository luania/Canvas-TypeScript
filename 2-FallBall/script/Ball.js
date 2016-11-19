define(["require", "exports", "./PVector"], function (require, exports, PVector_1) {
    "use strict";
    var Ball = (function () {
        function Ball() {
            this.color = "rgba(0, 0, 0, 0.5)";
            this.position = new PVector_1.PVector(10, 10);
            this.speed = new PVector_1.PVector(0, 0);
            this.acceleration = new PVector_1.PVector(0, 0);
            this.size = 10;
        }
        Ball.prototype.step = function () {
            this.speed.add(this.acceleration);
            this.position.add(this.speed);
        };
        Ball.prototype.checkBounds = function (canvas) {
            if (this.position.x > canvas.width - this.size || this.position.x < this.size) {
                this.speed.x *= -1;
                this.position.add(this.speed);
            }
            if (this.position.y > canvas.height - this.size || this.position.y < this.size) {
                this.speed.y *= -1;
                this.position.add(this.speed);
            }
        };
        return Ball;
    }());
    exports.Ball = Ball;
});
//# sourceMappingURL=Ball.js.map