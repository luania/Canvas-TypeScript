var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PolarVector", "./Obj"], function (require, exports, PolarVector_1, Obj_1) {
    "use strict";
    var Block = (function (_super) {
        __extends(Block, _super);
        function Block() {
            var _this = _super.apply(this, arguments) || this;
            _this.size = new PolarVector_1.PolarVector(1, Math.PI / 4);
            _this.angle = 0;
            return _this;
        }
        Block.prototype.setSize = function (size) {
            this.size = size;
            return this;
        };
        Block.prototype.setAngle = function (angle) {
            this.angle = angle;
            return this;
        };
        Block.prototype.rotate = function (angle) {
            this.angle += angle;
        };
        return Block;
    }(Obj_1.Obj));
    exports.Block = Block;
});
//# sourceMappingURL=Block.js.map