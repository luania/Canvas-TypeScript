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
        PVector.random = function () {
            return new PVector((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);
        };
        return PVector;
    }());
    exports.PVector = PVector;
});
//# sourceMappingURL=PVector.js.map