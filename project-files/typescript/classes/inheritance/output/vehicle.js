/**
 * The `Vehicle` class is the base class
 * for all the vehicles.
 */
var Vehicle = (function () {
    /**
     * The vehicle constructor sets the name
     * to `Vehicle` and the distance to 0
     * for all instances created from this base class.
     */
    function Vehicle(_name, _distance) {
        if (_name === void 0) { _name = 'Vehicle'; }
        if (_distance === void 0) { _distance = 0; }
        this._name = _name;
        this._distance = _distance;
    }
    Object.defineProperty(Vehicle.prototype, "distance", {
        /**
         * The distance and name getters/setters
         * are defined here and available to all
         * instances extended by this base class.
         */
        get: function () { return this._distance; },
        set: function (newDistance) { this._distance = newDistance; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "name", {
        get: function () { return this._name; },
        set: function (newName) { this._name = newName; },
        enumerable: true,
        configurable: true
    });
    Vehicle.prototype.move = function () { this.distance += 1; };
    /**
     * The toString method for all instances
     * will return the name of the Vehicle.
     */
    Vehicle.prototype.toString = function () { return this._name; };
    return Vehicle;
})();
exports.Vehicle = Vehicle;
//# sourceMappingURL=vehicle.js.map