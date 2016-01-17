var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Defining the module called `MyModule`
 * This module has two classes:
 *  - The `Vehicle` class
 *  - The `Car` class
 * The `Vehicle` class is not accessible from outside of the module.
 * The `Car` class however is accessible because it is exported using the `export` keyword
 */
var MyModule;
(function (MyModule) {
    var Vehicle = (function () {
        function Vehicle(name, _distance) {
            if (name === void 0) { name = 'Vehicle'; }
            if (_distance === void 0) { _distance = 0; }
            this.name = name;
            this._distance = _distance;
        }
        Object.defineProperty(Vehicle.prototype, "distance", {
            get: function () { return this._distance; },
            set: function (newDistance) { this._distance = newDistance; },
            enumerable: true,
            configurable: true
        });
        Vehicle.prototype.move = function () { this.distance += 1; };
        return Vehicle;
    })();
    /**
     * Using the `export` keyword to denote
     * the symbol that we want to make available.
     * Then others can access it with `MyModule.Car`
     */
    var Car = (function (_super) {
        __extends(Car, _super);
        function Car(name) {
            if (name === void 0) { name = 'Car'; }
            _super.call(this);
            this.name = name;
        }
        return Car;
    })(Vehicle);
    MyModule.Car = Car;
})(MyModule || (MyModule = {}));
/// <reference path="./MyModule.ts" />
var AliasName = MyModule;
var mycar = new AliasName.Car('My Car');
console.log(mycar.name);
mycar.move();
mycar.move();
mycar.move();
console.log(mycar.distance);
// 
//# sourceMappingURL=run.js.map