class Car {

  /**
   * Defining static methods and props
   */
  private static _controls: { isAuto: boolean } = {
    isAuto: true
  };

  /**
   * Defining a getter for the private
   * static property `_controls`
   */
  static get controls() { return Car._controls; }
  /**
   * Defining a static method the returns
   * the value of `isAuto` using the static
   * controls getter.
   */
  static isAuto(): boolean { return Car.controls.isAuto; }
  
  /**
   * Defining instance related methods and props.
   */

  /**
   * The constructor is called when a new
   * instance of the `Car` class is created.
   * The default value of `_distance` is set to
   * 0 if no value is provided.
   */
  constructor(private _distance = 0) { }
  /**
   * Defining setters and getters for the
   * private prop `_distance`
   */
  get distance() { return this._distance; }
  set distance(newDistance: number) {
    this._distance = newDistance;
  }

  /**
   * Basic method that inc the distance prop
   * using the setter method of the distance.
   */
  move(): void { this.distance += 1; }

}

/**
 * Static methods and props.
 */
console.log(Car.controls); // -> { isAuto: true }
console.log(Car.isAuto()); // -> true
/**
 * Will not assign a new value
 * because it `controls` is private.
 */
Car.controls = { isAuto: false }
console.log(Car.controls); // -> true

/**
 * Creating Instance
 */
const mycar = new Car(5); // distance = 5;
mycar.move();
console.log(mycar.distance); // -> 6