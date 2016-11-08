define(["require", "exports"], function (require, exports) {
    "use strict";
    var PVector = (function () {
        function PVector(x, y) {
            this.x = x;
            this.y = y;
        }
        PVector.prototype.add = function (p) {
            this.x += p.x;
            this.y += p.y;
        };
        PVector.prototype.sub = function (p) {
            this.x -= p.x;
            this.y -= p.y;
        };
        PVector.prototype.mult = function (n) {
            this.x *= n;
            this.y *= n;
        };
        PVector.prototype.div = function (n) {
            this.x /= n;
            this.y /= n;
        };
        PVector.prototype.mag = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        PVector.prototype.normalize = function () {
            this.div(this.mag());
        };
        PVector.prototype.setMag = function (mag) {
            this.normalize();
            this.mult(mag);
        };
        PVector.add = function (p1, p2) {
            return new PVector(p1.x + p2.x, p1.y + p2.y);
        };
        PVector.sub = function (p1, p2) {
            return new PVector(p1.x - p2.x, p1.y - p2.y);
        };
        PVector.mult = function (p, n) {
            return new PVector(p.x * n, p.y * n);
        };
        PVector.div = function (p, n) {
            return new PVector(p.x / n, p.y / n);
        };
        PVector.normal = function (p) {
            var mag = p.mag();
            return new PVector(p.x / mag, p.y / mag);
        };
        PVector.random = function () {
            return new PVector((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);
        };
        return PVector;
    }());
    exports.PVector = PVector;
});
//# sourceMappingURL=PVector.js.map