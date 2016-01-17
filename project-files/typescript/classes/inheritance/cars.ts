import {Vehicle} from './vehicle';
/**
 * Defining the `Car` class that inherits
 * from the `Vehicle` class using the
 * `extends` keyword.
 */
export class Car extends Vehicle {
  constructor(name?: string) {
    super();
    this.name = name || 'Car';
  }
  
}
export class Truck extends Vehicle {
  constructor(name?: string) {
    super();
    this.name = name || 'Truck';
  }
}