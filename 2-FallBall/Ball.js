define(["require", "exports", "../commons/script/PVector"], function (require, exports, PVector_1) {
    "use strict";
    var Ball = (function () {
        function Ball(position, size) {
            this.speed = new PVector_1.PVector(0, 0);
            this.acceleration = new PVector_1.PVector(0, 0);
            this.isOnBound = false;
            this.position = position;
            this.size = size;
        }
        Ball.prototype.step = function () {
            if (this.isOnBound) {
                this.isOnBound = false;
            }
            else {
                this.speed.add(this.acceleration);
            }
            this.position.add(this.speed);
        };
        Ball.prototype.setSpeed = function (speed) {
            this.speed = speed;
        };
        Ball.prototype.setAcceleration = function (acceleration) {
            this.acceleration = acceleration;
        };
        Ball.prototype.checkBounds = function (canvas) {
            if (this.position.x > canvas.width - this.size || this.position.x < this.size) {
                this.speed.x *= -1;
                this.isOnBound = true;
            }
            if (this.position.y > canvas.height - this.size || this.position.y < this.size) {
                this.speed.y *= -1;
                this.isOnBound = true;
            }
        };
        return Ball;
    }());
    exports.Ball = Ball;
});
//# sourceMappingURL=Ball.js.map