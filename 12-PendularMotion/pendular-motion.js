define(["require", "exports", "./script/PVector", "./script/Painter", "./script/Ball", "./script/ForceGenerator"], function (require, exports, PVector_1, Painter_1, Ball_1, ForceGenerator_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var painter = new Painter_1.Painter(canvas);
    var originBall = new Ball_1.Ball();
    originBall.size = 5;
    originBall.color = "rgb(0,0,0)";
    originBall.position = new PVector_1.PVector(canvas.width / 2, canvas.height / 4);
    var pendulumBall = new Ball_1.Ball();
    pendulumBall.size = 20;
    pendulumBall.color = "rgb(0,100,200)";
    pendulumBall.position = new PVector_1.PVector(canvas.width / 4 * 3, canvas.height / 4);
    var angleVel = 0;
    function refreshStatus() {
        var distance = PVector_1.PVector.sub(pendulumBall.position, originBall.position);
        var angleAcc = Math.cos(distance.toPolarVector().angle)
            * ForceGenerator_1.ForceGenerator.earthAcc().mag() / distance.mag();
        angleVel += angleAcc;
        pendulumBall.position = PVector_1.PVector.add(originBall.position, PVector_1.PVector.rotate(distance, angleVel));
        setTimeout(refreshStatus, 0);
    }
    refreshStatus();
    function draw() {
        painter.clearCanvas();
        painter.drawLine(originBall.position, pendulumBall.position, "rgb(0,100,200)");
        painter.drawBall(originBall);
        painter.drawBall(pendulumBall);
        setTimeout(draw, 0);
    }
    draw();
});
//# sourceMappingURL=pendular-motion.js.map