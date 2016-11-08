define(["require", "exports", "../commons/script/PVector"], function (require, exports, PVector_1) {
    "use strict";
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = 'rgba(192, 80, 77, 0.1)';
    var position = new PVector_1.PVector(canvas.width / 2, canvas.height / 2);
    ctx.beginPath();
    ctx.moveTo(position.x, position.y);
    function next() {
        console.log('next');
        position.add(PVector_1.PVector.random());
        ctx.beginPath();
        ctx.arc(position.x, position.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        setTimeout(next, 0);
    }
    next();
});
//# sourceMappingURL=random-walker.js.map