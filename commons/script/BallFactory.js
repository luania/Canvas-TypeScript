define(["require", "exports", "./PVector", "./Ball"], function (require, exports, PVector_1, Ball_1) {
    "use strict";
    var BallFactory = (function () {
        function BallFactory(canvas) {
            this.canvas = canvas;
            this.balls = [];
        }
        BallFactory.prototype.makeBalls = function (n) {
            for (var i = 0; i < n; i++) {
                this.balls.push(new Ball_1.Ball());
            }
            return this;
        };
        BallFactory.prototype.randomPosition = function () {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.setPosition(new PVector_1.PVector(Math.random() * (this.canvas.width - 2 * ball.size) + ball.size, Math.random() * (this.canvas.height - 2 * ball.size) + ball.size));
            }
            return this;
        };
        BallFactory.prototype.randomSize = function (maxSize) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.setSize(Math.random() * maxSize);
            }
            return this;
        };
        BallFactory.prototype.randomSpeed = function (maxSpeed) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.setSpeed(new PVector_1.PVector((Math.random() - 0.5) * maxSpeed, (Math.random() - 0.5) * maxSpeed));
            }
            return this;
        };
        BallFactory.prototype.randomXSpeed = function (maxSpeed) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.setSpeed(new PVector_1.PVector(Math.random() * maxSpeed, 0));
            }
            return this;
        };
        BallFactory.prototype.randomMass = function (maxMass) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.setMass(Math.random() * maxMass);
            }
            return this;
        };
        BallFactory.prototype.randomColor = function (alpha) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.setColor("rgba(" + Math.round(Math.random() * 255)
                    + "," + Math.round(Math.random() * 255)
                    + "," + Math.round(Math.random() * 255)
                    + ", " + alpha + ")");
            }
            return this;
        };
        BallFactory.prototype.unifyPosition = function (position) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.setPosition(new PVector_1.PVector(position.x, position.y));
            }
            return this;
        };
        BallFactory.prototype.unifyMass = function (mass) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.setMass(mass);
            }
            return this;
        };
        BallFactory.prototype.unifySize = function (size) {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.setSize(size);
            }
            return this;
        };
        return BallFactory;
    }());
    exports.BallFactory = BallFactory;
});
//# sourceMappingURL=BallFactory.js.map