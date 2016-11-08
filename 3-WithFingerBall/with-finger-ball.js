define(["require", "exports"], function (require, exports) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = 'rgba(192, 80, 77, 1)';
    canvas.onmousemove = function (ev) {
        ctx.beginPath();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.arc(ev.layerX, ev.layerY, 10, 0, 2 * Math.PI);
        ctx.fill();
    };
});
//# sourceMappingURL=with-finger-ball.js.map