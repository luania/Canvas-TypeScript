define(["require", "exports", "./PVector"], function (require, exports, PVector_1) {
    "use strict";
    var PolarVector = (function () {
        function PolarVector(r, angle) {
            this.r = 1;
            this.angle = 0;
            this.r = r;
            this.angle = angle;
        }
        PolarVector.prototype.rotate = function (angle) {
            this.angle += angle;
            return this;
        };
        PolarVector.prototype.toPVector = function () {
            return new PVector_1.PVector(Math.cos(this.angle), Math.sin(this.angle))
                .mult(this.r);
        };
        PolarVector.rotate = function (polarVector, angle) {
            return new PolarVector(polarVector.r, polarVector.angle + angle);
        };
        return PolarVector;
    }());
    exports.PolarVector = PolarVector;
});
//# sourceMappingURL=PolarVector.js.map