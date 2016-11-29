define(["require", "exports", "./PVector"], function (require, exports, PVector_1) {
    "use strict";
    var Partical = (function () {
        function Partical() {
            this.position = new PVector_1.PVector(0, 0);
            this.velocity = new PVector_1.PVector(0, 0);
            this.acceleration = new PVector_1.PVector(0, 0);
            this.lifeSpan = 0;
            this.mass = 1;
        }
        Partical.prototype.update = function () {
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.lifeSpan--;
            this.acceleration.mult(0);
        };
        Partical.prototype.applyForce = function (force) {
            this.acceleration.add(PVector_1.PVector.div(force, this.mass));
        };
        Partical.prototype.isDead = function () {
            return this.lifeSpan <= 0;
        };
        return Partical;
    }());
    exports.Partical = Partical;
});
//# sourceMappingURL=Partical.js.map