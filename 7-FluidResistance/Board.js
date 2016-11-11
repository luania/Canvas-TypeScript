define(["require", "exports", "../commons/script/PVector", "../commons/script/BallFactory", "../commons/script/FluidArea", "../commons/script/Painter", "../commons/script/ForceGenerator"], function (require, exports, PVector_1, BallFactory_1, FluidArea_1, Painter_1, ForceGenerator_1) {
    "use strict";
    var Board = (function () {
        function Board(canvas) {
            this.balls = [];
            this.canvas = canvas;
            this.forceGenerator = new ForceGenerator_1.ForceGenerator();
            this.painter = new Painter_1.Painter(canvas);
            this.fluidArea = new FluidArea_1.FluidArea(new PVector_1.PVector(0, canvas.height / 2), new PVector_1.PVector(canvas.width, canvas.height / 2))
                .setColor("rgba(0,100,200,0.1)")
                .setDensity(0.01);
        }
        Board.prototype.generateBalls = function (n) {
            var bs = new BallFactory_1.BallFactory(this.canvas)
                .makeBalls(n)
                .randomSize(20)
                .randomMass(10)
                .randomXSpeed(1)
                .randomColor(0.5)
                .unifyPosition(new PVector_1.PVector(0, 0))
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
        };
        Board.prototype.applyForces = function () {
            for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                var ball = _a[_i];
                ball.applyForce(this.forceGenerator.gravitation(ball));
                ball.applyForce(this.forceGenerator.resistance(ball, this.fluidArea));
            }
        };
        return Board;
    }());
    exports.Board = Board;
});
//# sourceMappingURL=Board.js.map