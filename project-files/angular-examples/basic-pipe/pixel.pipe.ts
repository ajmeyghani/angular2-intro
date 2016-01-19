import {Pipe} from 'angular2/core';
@Pipe({name: 'pixel'}) // <- adding the decorator
export class PixelPipe {
  transform(input) {
    return input + 'px';
  }
}
