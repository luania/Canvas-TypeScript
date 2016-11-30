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
            for (var i = 0; i < 50; i++) {
                var p = new ExPartical_1.ExPartical();
                p.position = PVector_1.PVector.copy(this.originPosition);
                p.velocity = new PVector_1.PVector(this.getNumberInNormalDistribution(0, 1), this.getNumberInNormalDistribution(1, 2) - 3);
                p.lifeSpan = Math.random() * 100;
                p.r = Math.round(Math.random() * 255);
                p.g = Math.round(Math.random() * 255);
                p.b = Math.round(Math.random() * 255);
                p.size = Math.round(Math.random() * 5) * 3;
                p.mass = 2000 + Math.random() * 2000 + 1000;
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
        ParticalSystem.prototype.applyRepeller = function (r) {
            for (var _i = 0, _a = this.particals; _i < _a.length; _i++) {
                var p = _a[_i];
                p.applyForce(r.repel(p));
            }
        };
        ParticalSystem.prototype.applyForce = function (force) {
            for (var _i = 0, _a = this.particals; _i < _a.length; _i++) {
                var p = _a[_i];
                p.applyForce(force);
            }
        };
        ParticalSystem.prototype.draw = function () {
            for (var _i = 0, _a = this.particals; _i < _a.length; _i++) {
                var p = _a[_i];
                p.display(this.painter);
            }
        };
        ParticalSystem.prototype.getNumberInNormalDistribution = function (mean, std_dev) {
            return mean + (this.uniform2NormalDistribution() * std_dev);
        };
        ParticalSystem.prototype.uniform2NormalDistribution = function () {
            var sum = 0;
            for (var i = 0; i < 12; i++) {
                sum = sum + Math.random();
            }
            return sum - 6;
        };
        return ParticalSystem;
    }());
    exports.ParticalSystem = ParticalSystem;
});
//# sourceMappingURL=ParticalSystem.js.map