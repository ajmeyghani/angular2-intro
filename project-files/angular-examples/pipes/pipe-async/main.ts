import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
})
class AsyncPipeExample  {
  value: Promise<string>;
  isArrived: boolean;
  resolve: Function = null;
  private name: string;
  constructor () {
    this.name = 'Async Pipe Example';
    this.isArrived = false;
    this.value = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }
  setValue() {
    setTimeout(() => {
      this.resolve("Future Value!");
      this.isArrived = true;
      console.log(this.value, this.isArrived);
    }, 1000);
  }
}

/**
 * Bootstrap the app with `AsyncPipeExample`.
 */
bootstrap(AsyncPipeExample, []);


