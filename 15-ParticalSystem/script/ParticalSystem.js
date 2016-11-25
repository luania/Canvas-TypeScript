define(["require", "exports", "../commons/PVector", "./ExPartical", "../commons/Painter"], function (require, exports, PVector_1, ExPartical_1, Painter_1) {
    "use strict";
    var ParticalSystem = (function () {
        function ParticalSystem(canvas, originPosition, painter) {
            this.particals = [];
            this.originPosition = new PVector_1.PVector(0, 0);
            this.canvas = canvas;
            this.originPosition = originPosition;
            this.painter = painter || new Painter_1.Painter(canvas);
        }
        ParticalSystem.prototype.emit = function () {
            for (var i = 0; i < 5; i++) {
                var p = new ExPartical_1.ExPartical();
                p.position = PVector_1.PVector.copy(this.originPosition);
                p.velocity = new PVector_1.PVector((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5);
                p.lifeSpan = 100;
                p.r = Math.round(Math.random() * 255);
                p.g = Math.round(Math.random() * 255);
                p.b = Math.round(Math.random() * 255);
                p.size = Math.round(Math.random() * 5) * 2;
                p.mass = 2000 + Math.random() * 2000;
                this.particals.push(p);
            }
        };
        ParticalSystem.prototype.run = function () {
            for (var _i = 0, _a = this.particals; _i < _a.length; _i++) {
                var p = _a[_i];
                p.update();
                if (p.isDead()) {
                    this.particals.splice(this.particals.indexOf(p), 1);
                }
            }
        };
        ParticalSystem.prototype.draw = function () {
            for (var _i = 0, _a = this.particals; _i < _a.length; _i++) {
                var p = _a[_i];
                this.painter.drawCircular(p.position, p.size, "rgba(" + p.r + "," + p.g + "," + p.b + ", " + p.lifeSpan / 255 + ")");
            }
        };
        ParticalSystem.prototype.applyForce = function (force) {
            for (var _i = 0, _a = this.particals; _i < _a.length; _i++) {
                var p = _a[_i];
                p.applyForce(force);
            }
        };
        return ParticalSystem;
    }());
    exports.ParticalSystem = ParticalSystem;
});
//# sourceMappingURL=ParticalSystem.js.map