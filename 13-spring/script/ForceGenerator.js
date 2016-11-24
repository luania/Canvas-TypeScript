define(["require", "exports", "./PVector"], function (require, exports, PVector_1) {
    "use strict";
    var GRAVITY_ACCELERATION = new PVector_1.PVector(0, 0.0098);
    var GRAVITITIONAL_CONST = 1;
    var ForceGenerator = (function () {
        function ForceGenerator() {
        }
        ForceGenerator.prototype.gravitation = function (b1, b2) {
            var sub = PVector_1.PVector.sub(b1.position, b2.position);
            var distance = sub.mag();
            return b1.size + b2.size > distance ?
                new PVector_1.PVector(0, 0) :
                PVector_1.PVector.normal(sub).mult(GRAVITITIONAL_CONST * b1.mass * b2.mass / distance / distance);
        };
        ForceGenerator.prototype.repulsion = function (b1, b2) {
            return this.gravitation(b1, b2).mult(-1);
        };
        ForceGenerator.prototype.earthGravitation = function (ball) {
            return PVector_1.PVector.mult(GRAVITY_ACCELERATION, ball.mass);
        };
        ForceGenerator.prototype.resistance = function (ball, fluidArea) {
            if (ball.speed.mag() == 0 || !fluidArea.containBall(ball)) {
                return new PVector_1.PVector(0, 0);
            }
            return PVector_1.PVector.normal(ball.speed)
                .mult(-0.5)
                .mult(fluidArea.density)
                .mult(ball.size)
                .mult(ball.speed.mag() * ball.speed.mag());
        };
        ForceGenerator.earthAcc = function () {
            return GRAVITY_ACCELERATION;
        };
        return ForceGenerator;
    }());
    exports.ForceGenerator = ForceGenerator;
});
//# sourceMappingURL=ForceGenerator.js.map