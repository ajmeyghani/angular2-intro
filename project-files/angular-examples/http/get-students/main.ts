import {Component, Injectable} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {Observable} from 'rxjs';


/**
 * Student service deals with getting
 * data by hitting an endpoint.
 */
@Injectable()
class StudentSvc {
  constructor(private http: Http) {} /* Inject Http */
  getStudents(): Observable<Response> {
    return this.http.get('/api/students');
  }
}


/**
 * Root component class.
 */
@Component({
  selector: 'app',
  templateUrl :'templates/app.tpl.html',
  providers: [HTTP_PROVIDERS, StudentSvc]
})
class HttpGetExample  {
  private name: string;
  private students: Observable<Response>;
  constructor (studentSvc: StudentSvc) {
    this.name = 'HTTP Get';
    studentSvc.getStudents().subscribe(resp => this.students = resp.json());
  }
}

/**
 * Bootstrap the app with `HttpGetExample`.
 */
/**
 * You could make the `HTTP_PROVIDERS` available globally
 * `bootstrap(HttpGetExample, [HTTP_PROVIDERS]);` 
 */
bootstrap(HttpGetExample, []);
