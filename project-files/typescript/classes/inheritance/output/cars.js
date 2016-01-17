var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var vehicle_1 = require('./vehicle');
/**
 * Defining the `Car` class that inherits
 * from the `Vehicle` class using the
 * `extends` keyword.
 */
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(name) {
        _super.call(this);
        this.name = name || 'Car';
    }
    return Car;
})(vehicle_1.Vehicle);
exports.Car = Car;
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(name) {
        _super.call(this);
        this.name = name || 'Truck';
    }
    return Truck;
})(vehicle_1.Vehicle);
exports.Truck = Truck;
//# sourceMappingURL=cars.js.map