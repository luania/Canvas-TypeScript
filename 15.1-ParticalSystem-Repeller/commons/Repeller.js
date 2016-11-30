var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PVector", "./Partical"], function (require, exports, PVector_1, Partical_1) {
    "use strict";
    var G = 10;
    var Repeller = (function (_super) {
        __extends(Repeller, _super);
        function Repeller() {
            var _this = _super.apply(this, arguments) || this;
            _this.r = 0;
            _this.g = 0;
            _this.b = 0;
            _this.size = 0;
            return _this;
        }
        Repeller.prototype.display = function (painter) {
            painter.drawCircular(this.position, this.size, "rgb(" + this.r + "," + this.g + "," + this.b + ")");
        };
        Repeller.prototype.repel = function (p) {
            var distance = PVector_1.PVector.sub(p.position, this.position);
            var d = distance.mag();
            var force = distance.setMag(G * this.mass * p.mass).div(d * d);
            return force;
        };
        return Repeller;
    }(Partical_1.Partical));
    exports.Repeller = Repeller;
});
//# sourceMappingURL=Repeller.js.map