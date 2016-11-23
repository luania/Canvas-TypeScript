define(["require", "exports", "./script/PVector", "./script/Ball", "./script/BallFactory", "./script/FluidArea", "./script/Painter", "./script/ForceGenerator"], function (require, exports, PVector_1, Ball_1, BallFactory_1, FluidArea_1, Painter_1, ForceGenerator_1) {
    "use strict";
    var Board = (function () {
        function Board(canvas) {
            this.balls = [];
            this.fingerBall = new Ball_1.Ball();
            this.canvas = canvas;
            this.forceGenerator = new ForceGenerator_1.ForceGenerator();
            this.painter = new Painter_1.Painter(canvas);
            this.fluidArea = new FluidArea_1.FluidArea(new PVector_1.PVector(0, 0), new PVector_1.PVector(canvas.width, canvas.height));
            this.fluidArea.color = "rgba(0,100,200,0.1)";
            this.fluidArea.density = 1;
            this.fingerBall.size = 10;
            this.fingerBall.mass = 1000;
            this.fingerBall.color = "rgba(80, 80, 80, 1)";
        }
        Board.prototype.generateBalls = function (n) {
            var bs = new BallFactory_1.BallFactory(this.canvas)
                .makeBalls(n)
                .randomSize(20)
                .randomMass(10)
                .randomColor(0.5)
                .randomPosition()
                .balls;
            for (var _i = 0, bs_1 = bs; _i < bs_1.length; _i++) {
                var b = bs_1[_i];
                this.balls.push(b);
            }
        };
        Board.prototype.clearBallsAcceleration = function () {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.acceleration.mult(0);
            }
        };
        Board.prototype.stepBalls = function () {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.step();
                ball.checkBounds(this.canvas);
            }
        };
        Board.prototype.draw = function () {
            this.painter.clearCanvas();
            this.painter.drawFluidArea(this.fluidArea);
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                this.painter.drawBall(ball);
            }
            this.painter.drawBall(this.fingerBall);
        };
        Board.prototype.applyForces = function () {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.applyForce(this.forceGenerator.repulsion(this.fingerBall, ball));
                ball.applyForce(this.forceGenerator.resistance(ball, this.fluidArea));
            }
        };
        return Board;
    }());
    exports.Board = Board;
});
//# sourceMappingURL=Board.js.map