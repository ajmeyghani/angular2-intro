/// <reference path="./MyModule.ts" />
import AliasName = MyModule;
const mycar = new AliasName.Car('My Car');
console.log(mycar.name);
mycar.move();
mycar.move();
mycar.move();
console.log(mycar.distance);
//