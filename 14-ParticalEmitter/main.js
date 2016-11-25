var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./script/PVector", "./script/Partical", "./script/Painter"], function (require, exports, PVector_1, Partical_1, Painter_1) {
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
        return ExPartical;
    }(Partical_1.Partical));
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var scale = canvas.getBoundingClientRect().width / canvas.width;
    var arr = [];
    canvas.onmousemove = function (ev) {
        for (var i = 0; i < 5; i++) {
            var p = new ExPartical();
            p.position = new PVector_1.PVector(ev.layerX / scale, ev.layerY / scale);
            p.velocity = new PVector_1.PVector((Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3);
            p.lifeSpan = 100;
            p.r = Math.round(Math.random() * 255);
            p.g = Math.round(Math.random() * 255);
            p.b = Math.round(Math.random() * 255);
            p.size = Math.round(Math.random() * 5) * 2;
            arr.push(p);
        }
    };
    function refreshStatus() {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var p = arr_1[_i];
            p.update();
            if (p.isDead()) {
                arr.splice(arr.indexOf(p), 1);
            }
        }
    }
    setInterval(refreshStatus, 10);
    function draw() {
        painter.clearCanvas();
        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
            var p = arr_2[_i];
            painter.drawCircular(p.position, p.size, "rgba(" + p.r + "," + p.g + "," + p.b + ", " + p.lifeSpan / 255 + ")");
        }
        setTimeout(draw, 10);
    }
    draw();
});
//# sourceMappingURL=main.js.map