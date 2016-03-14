import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
})
class DatePipeExample  {
  private name: string;
  private today: Date;
  constructor () {
    this.name = 'Date Pipe Example';
    this.today = new Date();
  }
}

/**
 * Bootstrap the app with `DatePipeExample`.
 */
bootstrap(DatePipeExample, []);
