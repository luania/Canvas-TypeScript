define(["require", "exports", "./commons/PVector", "./commons/Painter", "./script/ParticalSystem"], function (require, exports, PVector_1, Painter_1, ParticalSystem_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var scale = canvas.getBoundingClientRect().width / canvas.width;
    var systems = [];
    var center = new PVector_1.PVector(canvas.width / 2, canvas.height / 2);
    var mousePosition = new PVector_1.PVector(0, 0);
    canvas.onclick = function (ev) {
        var position = new PVector_1.PVector(ev.layerX / scale, ev.layerY / scale);
        var s = new ParticalSystem_1.ParticalSystem(canvas, position, painter);
        systems.push(s);
    };
    canvas.onmousemove = function (ev) {
        mousePosition.x = ev.layerX / scale;
        mousePosition.y = ev.layerY / scale;
    };
    function emit() {
        for (var _i = 0, systems_1 = systems; _i < systems_1.length; _i++) {
            var s = systems_1[_i];
            s.emit();
        }
    }
    setInterval(emit, 30);
    function run() {
        var windForce = PVector_1.PVector.sub(mousePosition, center);
        for (var _i = 0, systems_2 = systems; _i < systems_2.length; _i++) {
            var s = systems_2[_i];
            s.applyForce(windForce);
            s.run();
        }
    }
    setInterval(run, 0);
    function draw() {
        painter.clearCanvas();
        for (var _i = 0, systems_3 = systems; _i < systems_3.length; _i++) {
            var s = systems_3[_i];
            s.draw();
        }
        setTimeout(draw, 0);
    }
    draw();
});
//# sourceMappingURL=main.js.map