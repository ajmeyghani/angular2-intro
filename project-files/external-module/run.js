var Z;
(function (Z) {
    var Car = (function () {
        function Car(distance) {
            if (distance === void 0) { distance = 0; }
            this.distance = distance;
        }
        return Car;
    })();
    Z.Car = Car;
})(Z || (Z = {}));
/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./Z.ts" />
/**
 * A CommonJS module
 */
var common = require('./common');
/**
 * Internal TypeScript Module
 */
var MyModule = Z;
/**
 * Confirm that the modules' methods are available.
 */
console.log(common()); // --> CommonJS Module
var car = new Z.Car();
console.log(car.distance); // --> 0
//# sourceMappingURL=run.js.map