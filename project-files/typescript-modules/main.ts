/**
 * Defining the module called `MyModule`
 * This module has two classes:
 *  - The `Vehicle` class
 *  - The `Car` class
 * The `Vehicle` class is not accessible from outside of the module.
 * The `Car` class however is accessible because it is exported using the `export` keyword
 */
module MyModule {
  class Vehicle {
    constructor (public name: string = 'Vehicle', private _distance: number = 0) {}
    get distance():number { return this._distance; }
    set distance(newDistance: number) { this._distance = newDistance; }
    move() { this.distance += 1 }
  }
  /**
   * Using the `export` keyword to denote
   * the symbol that we want to make available.
   * Then others can access it with `MyModule.Car`
   */
  export class Car extends Vehicle {
    constructor (public name: string = 'Car') {
      super();
    }
  }
}

const mycar = new MyModule.Car('My Car');
console.log(mycar.name);
mycar.move();
mycar.move();
console.log(mycar.distance);
