import {Component, Directive} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {EventEmitter, Output} from 'angular2/core';

/**
 * Adder Auto
 */
@Directive({
  selector: '[adder-auto]',
})
class AdderAuto {
  @Output() myevent: EventEmitter<string>;
  constructor() {
    this.myevent = new EventEmitter();
    setInterval(() => {this.myevent.emit('myevename')}, 1000);
  }
}

/**
 * Adder component
 */
@Component({
  selector: 'adder',
  template:`
  <p>Value: {{ value }}</p>
  <button (click)="addOne()">Add +</button>
  <h2>Using Emitter</h2>
  <span adder-auto (myevent)="addOne($event)"> EVENT: {{firedEvent}}</span>
  `,
  directives: [AdderAuto]
})
class Adder {
  private value: number;
  private firedEvent: string;
  constructor() {
    this.value = 0;
    this.firedEvent = '...';
    
  }
  addOne(event) {
  this.value += 1;
  this.firedEvent = event + this.value;
  }
}



/**
 * App
 */
@Component({
  selector: 'app',
  directives: [Adder],
  template: `
  <div><adder></adder></div>
  `
})
class App {}

/** boot */
bootstrap(App, [])