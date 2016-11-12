var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Obj"], function (require, exports, Obj_1) {
    "use strict";
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball() {
            var _this = _super.apply(this, arguments) || this;
            _this.size = 10;
            return _this;
        }
        Ball.prototype.setSize = function (size) {
            this.size = size;
            return this;
        };
        Ball.prototype.step = function () {
            this.speed.add(this.acceleration);
            this.position.add(this.speed);
        };
        Ball.prototype.checkBounds = function (canvas) {
            if (this.position.x > canvas.width - this.size * 2 || this.position.x < 0) {
                this.speed.x *= -1;
                this.position.add(this.speed);
            }
            if (this.position.y > canvas.height - this.size * 2 || this.position.y < 0) {
                this.speed.y *= -1;
                this.position.add(this.speed);
            }
        };
        return Ball;
    }(Obj_1.Obj));
    exports.Ball = Ball;
});
//# sourceMappingURL=Ball.js.map