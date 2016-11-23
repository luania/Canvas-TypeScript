define(["require", "exports", "./PVector"], function (require, exports, PVector_1) {
    "use strict";
    var Obj = (function () {
        function Obj() {
            this.color = "rgba(192, 80, 77, 0.5)";
            this.mass = 1;
            this.position = new PVector_1.PVector(0, 0);
            this.speed = new PVector_1.PVector(0, 0);
            this.acceleration = new PVector_1.PVector(0, 0);
        }
        Obj.prototype.setPosition = function (position) {
            this.position = position;
            return this;
        };
        Obj.prototype.setColor = function (color) {
            this.color = color;
            return this;
        };
        Obj.prototype.setMass = function (mass) {
            this.mass = mass;
            return this;
        };
        Obj.prototype.setSpeed = function (speed) {
            this.speed = speed;
            return this;
        };
        Obj.prototype.setAcceleration = function (acceleration) {
            this.acceleration = acceleration;
            return this;
        };
        Obj.prototype.applyForce = function (force) {
            this.acceleration.add(PVector_1.PVector.div(force, this.mass));
            return this;
        };
        return Obj;
    }());
    exports.Obj = Obj;
});
//# sourceMappingURL=Obj.js.map