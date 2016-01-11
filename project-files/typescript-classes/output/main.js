var Car = (function () {
    /**
     * Defining instance related methods and props.
     */
    /**
     * The constructor is called when a new
     * instance of the `Car` class is created.
     * The default value of `_distance` is set to
     * 0 if no value is provided.
     */
    function Car(_distance) {
        if (_distance === void 0) { _distance = 0; }
        this._distance = _distance;
    }
    Object.defineProperty(Car, "controls", {
        /**
         * Defining a getter for the private
         * static property `_controls`
         */
        get: function () { return Car._controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * Defining a static method the returns
     * the value of `isAuto` using the static
     * controls getter.
     */
    Car.isAuto = function () { return Car.controls.isAuto; };
    Object.defineProperty(Car.prototype, "distance", {
        /**
         * Defining setters and getters for the
         * private prop `_distance`
         */
        get: function () { return this._distance; },
        set: function (newDistance) {
            this._distance = newDistance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Basic method that inc the distance prop
     * using the setter method of the distance.
     */
    Car.prototype.move = function () { this.distance += 1; };
    /**
     * Defining static methods and props
     */
    Car._controls = {
        isAuto: true
    };
    return Car;
})();
/**
 * Static methods and props.
 */
console.log(Car.controls); // -> { isAuto: true }
console.log(Car.isAuto()); // -> true
/**
 * Will not assign a new value
 * because it `controls` is private.
 */
Car.controls = { isAuto: false };
console.log(Car.controls); // -> true
/**
 * Creating Instance
 */
var mycar = new Car(5); // distance = 5;
mycar.move();
console.log(mycar.distance); // -> 6
//# sourceMappingURL=main.js.map