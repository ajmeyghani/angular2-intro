/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./Z.ts" />
/**
 * A CommonJS module
 */
const common = require('./common');
/**
 * Internal TypeScript Module
 */
import MyModule = Z;

/**
 * Confirm that the modules' methods are available.
 */

console.log(common()); // --> CommonJS Module
const car = new Z.Car();
console.log(car.distance); // --> 0
