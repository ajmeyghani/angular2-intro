import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
})
class StarterTemplate  {
  private name: string;
  private students: any[];
  constructor () {
    this.name = 'Slice Pipe';
    this.students = [
      {id: 1, name: 'Tom'},
      {id: 2, name: 'Kim' },
      {id: 3, name: 'Al' },
      {id: 4, name: 'Abby' },
      {id: 5, name: 'Sarah' },
    ];
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);
