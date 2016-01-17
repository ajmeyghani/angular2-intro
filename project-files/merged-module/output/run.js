var Merged;
(function (Merged) {
    var name = 'File A'; // not exported
    var Door = (function () {
        function Door(_color) {
            if (_color === void 0) { _color = 'white'; }
            this._color = _color;
        }
        Object.defineProperty(Door.prototype, "color", {
            get: function () { return this._color; },
            set: function (newColor) { this._color = newColor; },
            enumerable: true,
            configurable: true
        });
        return Door;
    })();
    Merged.Door = Door;
})(Merged || (Merged = {}));
var Merged;
(function (Merged) {
    var name = 'File B'; // not exported
    var Car = (function () {
        function Car(distance) {
            if (distance === void 0) { distance = 0; }
            this.distance = distance;
        }
        Car.prototype.move = function () { this.distance += 1; };
        return Car;
    })();
    Merged.Car = Car;
})(Merged || (Merged = {}));
/// <reference path="./A.ts" />
/// <reference path="./B.ts" />
var car = new Merged.Car();
var door = new Merged.Door();
door.color = 'blue';
car.move();
car.move();
console.log(car.distance);
console.log(door.color);
//# sourceMappingURL=run.js.map