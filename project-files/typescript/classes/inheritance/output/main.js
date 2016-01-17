/**
 * Importing the `Car` and the `Truck`
 * classes from the `Cars` file.
 */
var cars_1 = require('./cars');
/**
 * Creating a new car from `Car`
 */
var car = new cars_1.Car();
console.log(car.name);
car.distance = 5;
car.move();
car.move();
console.log(car.distance);
/**
 * Creating a new Truck.
 */
var truck = new cars_1.Truck();
console.log(truck.name);
//# sourceMappingURL=main.js.map