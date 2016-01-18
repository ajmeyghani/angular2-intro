import {Pipe} from 'angular2/core';
/**
 * `powerTo` pipe: raises the base to the given exponent.
 * @param: base {number}
 * @param: exponent {number}, default = 1
 * @usage:
 *  template.html
 *  `value is {{ 2 | powerTo:4}}` -> value is 4.
 */
@Pipe({name: 'powerTo'})
export class PowerPipe {
  transform(base: number, args:number[]) {
    const exponent: number = args[0] || 1;
    return Math.pow(base, exponent);
  }
}