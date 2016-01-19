import {Pipe} from 'angular2/core';
@Pipe({name: 'unit'})
export class UnitPipe {
  transform(input, args:string) {
    const unit = args[0] || 'px';
    return input + unit;
  }
}