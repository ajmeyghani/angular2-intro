module Merged {
  const name = 'File B'; // not exported
  export class Car {
    constructor(public distance = 0) {}
    move () {this.distance += 1;}
  }
}