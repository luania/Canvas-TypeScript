define(["require", "exports", "./PVector"], function (require, exports, PVector_1) {
    "use strict";
    var Ball = (function () {
        function Ball() {
            this.position = new PVector_1.PVector(0, 0);
            this.size = 10;
            this.speed = new PVector_1.PVector(0, 0);
            this.acceleration = new PVector_1.PVector(0, 0);
            this.color = "rgba(192, 80, 77, 0.5)";
            this.mass = 1;
        }
        Ball.prototype.step = function () {
            this.speed.add(this.acceleration);
            this.position.add(this.speed);
        };
        Ball.prototype.setPosition = function (position) {
            this.position = position;
            return this;
        };
        Ball.prototype.setSize = function (size) {
            this.size = size;
            return this;
        };
        Ball.prototype.setSpeed = function (speed) {
            this.speed = speed;
            return this;
        };
        Ball.prototype.setAcceleration = function (acceleration) {
            this.acceleration = acceleration;
            return this;
        };
        Ball.prototype.setColor = function (color) {
            this.color = color;
            return this;
        };
        Ball.prototype.setMass = function (mass) {
            this.mass = mass;
            return this;
        };
        Ball.prototype.applyForce = function (force) {
            this.acceleration.add(PVector_1.PVector.div(force, this.mass));
            return this;
        };
        Ball.prototype.checkBounds = function (canvas) {
            if (this.position.x > canvas.width - this.size * 2 || this.position.x < 0) {
                this.speed.x *= -1;
                this.position.add(this.speed);
            }
            if (this.position.y > canvas.height - this.size * 2 || this.position.y < 0) {
                this.speed.y *= -1;
                this.position.add(this.speed);
            }
        };
        return Ball;
    }());
    exports.Ball = Ball;
});
//# sourceMappingURL=Ball.js.map