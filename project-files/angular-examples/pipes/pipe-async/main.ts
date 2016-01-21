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


/* // example with observable
// https://github.com/angular/angular/blob/master/modules/angular2/examples/core/pipes/ts/async_pipe/async_pipe_example.ts

// #docregion AsyncPipeObservable
@Component({selector: "task-cmp", template: "Time: {{ time | async }}"})
class Task {
  time = new Observable<number>(
      observer => { setInterval(_ => observer.next(new Date().getTime()), 500); });
}
// #enddocregion

@Component({
  selector: 'example-app',
  directives: [AsyncPipeExample],
  template: `
    <h1>AsyncPipe Example</h1>
    <async-example></async-example>
  `
})
export class AppCmp {
}

export function main() {
  bootstrap(AppCmp);
}
*/
