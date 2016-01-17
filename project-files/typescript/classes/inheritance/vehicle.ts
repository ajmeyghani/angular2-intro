/**
 * The `Vehicle` class is the base class
 * for all the vehicles.
 */
export class Vehicle {
  /**
   * The vehicle constructor sets the name
   * to `Vehicle` and the distance to 0
   * for all instances created from this base class.
   */
  constructor( private _name: string = 'Vehicle',
               private _distance: number = 0 ) { }
  /**
   * The distance and name getters/setters
   * are defined here and available to all
   * instances extended by this base class.
   */
  get distance(): number { return this._distance; }
  set distance(newDistance: number) { this._distance = newDistance; }
  get name(): string { return this._name;}
  set name(newName: string) { this._name = newName; }
  move() { this.distance += 1 }
  /**
   * The toString method for all instances
   * will return the name of the Vehicle.
   */
  toString() { return this._name; }
}
