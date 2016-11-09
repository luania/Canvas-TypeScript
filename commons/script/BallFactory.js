define(["require", "exports", "./PVector", "./ApplyForceBall"], function (require, exports, PVector_1, ApplyForceBall_1) {
    "use strict";
    var BallFactory = (function () {
        function BallFactory() {
        }
        BallFactory.prototype.centerBalls = function (canvas) {
            var ball1 = new ApplyForceBall_1.ApplyForceBall(new PVector_1.PVector(canvas.width / 2, canvas.height / 2), 10)
                .setSpeed(new PVector_1.PVector(0, 0))
                .setMass(10)
                .setColor("rgba(80, 80, 200, 0.5)");
            var ball2 = new ApplyForceBall_1.ApplyForceBall(new PVector_1.PVector(canvas.width / 2, canvas.height / 2), 10)
                .setSpeed(new PVector_1.PVector(0, 0))
                .setMass(15)
                .setColor("rgba(80, 200, 80, 0.5)");
            var ball3 = new ApplyForceBall_1.ApplyForceBall(new PVector_1.PVector(canvas.width / 2, canvas.height / 2), 10)
                .setSpeed(new PVector_1.PVector(0, 0))
                .setMass(20)
                .setColor("rgba(200, 80, 80, 0.5)");
            var ball4 = new ApplyForceBall_1.ApplyForceBall(new PVector_1.PVector(canvas.width / 2, canvas.height / 2), 10)
                .setSpeed(new PVector_1.PVector(0, 0))
                .setMass(25)
                .setColor("rgba(200, 200, 80, 0.5)");
            var ball5 = new ApplyForceBall_1.ApplyForceBall(new PVector_1.PVector(canvas.width / 2, canvas.height / 2), 10)
                .setSpeed(new PVector_1.PVector(0, 0))
                .setMass(30)
                .setColor("rgba(200, 80, 200, 0.5)");
            return [ball1, ball2, ball3, ball4, ball5];
        };
        BallFactory.prototype.random = function (n, canvas) {
            var balls = [];
            for (var i = 0; i < n; i++) {
                balls.push(new ApplyForceBall_1.ApplyForceBall(new PVector_1.PVector(Math.random() * canvas.width, Math.random() * canvas.height), 5)
                    .setMass(Math.random() * 300)
                    .setColor("rgba("
                    + Math.round(Math.random() * 17) * 15
                    + ","
                    + Math.round(Math.random() * 17) * 15
                    + ","
                    + Math.round(Math.random() * 17) * 15
                    + ", 0.5)"));
            }
            return balls;
        };
        return BallFactory;
    }());
    exports.BallFactory = BallFactory;
});
//# sourceMappingURL=BallFactory.js.map