define(["require", "exports"], function (require, exports) {
    "use strict";
    var FluidArea = (function () {
        function FluidArea(position, size) {
            this.position = position;
            this.size = size;
        }
        FluidArea.prototype.setPosition = function (position) {
            this.position = position;
            return this;
        };
        FluidArea.prototype.setSize = function (size) {
            this.size = size;
            return this;
        };
        FluidArea.prototype.setColor = function (color) {
            this.color = color;
            return this;
        };
        FluidArea.prototype.setDensity = function (density) {
            this.density = density;
            return this;
        };
        return FluidArea;
    }());
    exports.FluidArea = FluidArea;
});
//# sourceMappingURL=FluidArea.js.map