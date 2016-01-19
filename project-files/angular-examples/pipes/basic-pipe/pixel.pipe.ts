import {Pipe} from 'angular2/core';
@Pipe({name: 'pixel'})
export class PixelPipe {
  transform(input, args) {
    return input + 'px';
  }
}