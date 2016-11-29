define(["require", "exports", "./commons/PVector", "./commons/Painter", "./script/ParticalSystem", "./commons/Repeller"], function (require, exports, PVector_1, Painter_1, ParticalSystem_1, Repeller_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var scale = canvas.getBoundingClientRect().width / canvas.width;
    var systems = [];
    var mousePosition = new PVector_1.PVector(0, 0);
    var repeller = new Repeller_1.Repeller();
    repeller.lifeSpan = 100;
    repeller.r = Math.round(Math.random() * 255);
    repeller.g = Math.round(Math.random() * 255);
    repeller.b = Math.round(Math.random() * 255);
    repeller.size = Math.round(Math.random() * 5) * 2;
    repeller.mass = 100;
    canvas.onclick = function (ev) {
        var position = new PVector_1.PVector(ev.layerX / scale, ev.layerY / scale);
        var s = new ParticalSystem_1.ParticalSystem(canvas, position, painter);
        systems.push(s);
    };
    canvas.onmousemove = function (ev) {
        repeller.position.x = ev.layerX / scale;
        repeller.position.y = ev.layerY / scale;
    };
    function emit() {
        for (var _i = 0, systems_1 = systems; _i < systems_1.length; _i++) {
            var s = systems_1[_i];
            s.emit();
        }
    }
    setInterval(emit, 0);
    function run() {
        for (var _i = 0, systems_2 = systems; _i < systems_2.length; _i++) {
            var s = systems_2[_i];
            s.applyRepeller(repeller);
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
        repeller.display(painter);
        setTimeout(draw, 0);
    }
    draw();
});
//# sourceMappingURL=main.js.map