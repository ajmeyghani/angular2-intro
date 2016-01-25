import {Component, Injectable} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';


/**
 * Student service
 */
@Injectable()
class StudentSvc {
  private students: any[];
  constructor() {
    this.students = [
      {name: 'Tom', id: 1},
      {name: 'John', id: 2},
      {name: 'Kim', id: 3},
      {name: 'Liz', id: 4}
    ];
  }
  getAll() {
    return this.students;
  }
}

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
  viewProviders: [StudentSvc]
})
class Root  {
  private name: string;
  private students: any[];
  constructor (studentSvc: StudentSvc) {
    this.name = 'Simple Service Demo';
    this.students = studentSvc.getAll();
  }
}

/**
 * Bootstrap the app with `Root`.
 */
bootstrap(Root, []);
