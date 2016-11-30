var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../commons/Partical"], function (require, exports, Partical_1) {
    "use strict";
    var ExPartical = (function (_super) {
        __extends(ExPartical, _super);
        function ExPartical() {
            var _this = _super.apply(this, arguments) || this;
            _this.r = 0;
            _this.g = 0;
            _this.b = 0;
            _this.size = 0;
            return _this;
        }
        ExPartical.prototype.display = function (painter) {
            var grd = painter.ctx.createRadialGradient(this.position.x, this.position.y, 0, this.position.x, this.position.y, this.size);
            grd.addColorStop(0.000, "rgba(255,0,0," + this.lifeSpan / 510 + ")");
            grd.addColorStop(0.3, "rgba(255,0,0," + this.lifeSpan / 765 + ")");
            grd.addColorStop(1.0, "rgba(255,0,0,0)");
            painter.drawCircular(this.position, this.size, grd);
        };
        return ExPartical;
    }(Partical_1.Partical));
    exports.ExPartical = ExPartical;
});
//# sourceMappingURL=ExPartical.js.map