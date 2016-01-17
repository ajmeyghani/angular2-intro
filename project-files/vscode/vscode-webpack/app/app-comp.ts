import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: '<h1>{{ name }}</h1>'
})
class AppComponent {
  name: string;
  constructor() {
    this.name = 'amin';
  }
}

export {AppComponent}