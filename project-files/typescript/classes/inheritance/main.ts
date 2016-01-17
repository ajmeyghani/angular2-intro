/**
 * Importing the `Car` and the `Truck`
 * classes from the `Cars` file.
 */
import {Car, Truck} from './cars';

/**
 * Creating a new car from `Car`
 */
const car = new Car();
console.log(car.name);
car.distance = 5;
car.move();
car.move();
console.log(car.distance);
/**
 * Creating a new Truck.
 */
const truck = new Truck();
console.log(truck.name);