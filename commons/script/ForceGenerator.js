define(["require", "exports", "./PVector"], function (require, exports, PVector_1) {
    "use strict";
    var GRAVITY_ACCELERATION = new PVector_1.PVector(0, 0.0098);
    var ForceGenerator = (function () {
        function ForceGenerator() {
        }
        ForceGenerator.prototype.gravitation = function (ball) {
            return PVector_1.PVector.mult(GRAVITY_ACCELERATION, ball.mass);
        };
        ForceGenerator.prototype.resistance = function (ball, fluidArea) {
            return fluidArea.containBall(ball) ?
                PVector_1.PVector.normal(ball.speed)
                    .mult(-0.5)
                    .mult(fluidArea.density)
                    .mult(ball.size)
                    .mult(ball.speed.mag() * ball.speed.mag())
                : new PVector_1.PVector(0, 0);
        };
        return ForceGenerator;
    }());
    exports.ForceGenerator = ForceGenerator;
});
//# sourceMappingURL=ForceGenerator.js.map