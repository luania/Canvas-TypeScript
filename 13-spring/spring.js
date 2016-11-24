define(["require", "exports", "./script/PVector", "./script/Painter", "./script/Ball"], function (require, exports, PVector_1, Painter_1, Ball_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var originBall = new Ball_1.Ball();
    originBall.size = 5;
    originBall.color = "rgb(0,0,0)";
    originBall.position = new PVector_1.PVector(canvas.width / 4, canvas.height / 2);
    var restLength = 500;
    var springK = 0.1;
    var pendulumBall = new Ball_1.Ball();
    pendulumBall.size = 20;
    pendulumBall.mass = 1000;
    pendulumBall.color = "rgb(0,100,200)";
    pendulumBall.position = new PVector_1.PVector(originBall.position.x + 50, originBall.position.y);
    function refreshStatus() {
        var distance = PVector_1.PVector.sub(originBall.position, pendulumBall.position);
        var restDistance = PVector_1.PVector.add(distance, PVector_1.PVector.normal(distance).mult(-restLength));
        var springForce = restDistance.mult(springK);
        pendulumBall.applyForce(springForce);
        pendulumBall.step();
        setTimeout(refreshStatus, 0);
    }
    refreshStatus();
    function draw() {
        painter.clearCanvas();
        var distance = PVector_1.PVector.sub(originBall.position, pendulumBall.position);
        var a = (distance.mag() - originBall.size - pendulumBall.size) / 50;
        var springStartX = originBall.position.x + originBall.size;
        for (var i = 0; i < 50; i++) {
            if (i == 0) {
                painter.drawLine(new PVector_1.PVector(springStartX + a * i, originBall.position.y), new PVector_1.PVector(springStartX + a * (i + 1), originBall.position.y + ((i + 1) % 2 == 0 ? 10 : -10)), "rgb(0,100,200)");
                continue;
            }
            if (i == 49) {
                painter.drawLine(new PVector_1.PVector(springStartX + a * i, originBall.position.y + (i % 2 == 0 ? 10 : -10)), new PVector_1.PVector(springStartX + a * (i + 1), originBall.position.y), "rgb(0,100,200)");
                continue;
            }
            painter.drawLine(new PVector_1.PVector(springStartX + a * i, originBall.position.y + (i % 2 == 0 ? 10 : -10)), new PVector_1.PVector(springStartX + a * (i + 1), originBall.position.y + ((i + 1) % 2 == 0 ? 10 : -10)), "rgb(0,100,200)");
        }
        painter.drawBall(originBall);
        painter.drawBall(pendulumBall);
        setTimeout(draw, 0);
    }
    draw();
});
//# sourceMappingURL=spring.js.map