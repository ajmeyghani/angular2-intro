import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
})
class DomEventBindingExamples  {
  private name: string;
  private hello: string;
  private doubleHello: string;
  private enterHello: string;
  private upHello: string;
  private downHello: string;
  private inputValue: string;
  private keyupValue: string;
  private rowClicked: string;
  constructor () {
    this.name = 'DOM Event Binding';
  }
  sayHello () {
    this.hello = 'hello';
  }
  sayDoubleHello () {
    this.doubleHello = 'Double Hello!';
  }
  sayEnterHello () {
    this.enterHello = 'Enter Hello!';
  }
  clearEnterHello() {
    this.enterHello = '';
  }
  sayUpHello() {
    this.upHello = 'Up Hello !';
  }
  sayDownHello () {
    this.downHello = 'Down Hello!';
  }
  setInputFieldValue(value) {
    this.inputValue = value;
  }
  setInputFieldValue2(value) {
    this.keyupValue = value;
  }
  catchBubbledEvent(event) {
    this.rowClicked = event.target.nodeName === 'TD' ? event.target.textContent : '';
  }
}

/**
 * Bootstrap the app with `DomEventBindingExamples`.
 */
bootstrap(DomEventBindingExamples, []);
