import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/**
 * Root Component
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
})
class BuiltInDirectives  {
  private name: string;
  private names: string[] = ['Tom', 'Kim', 'Jon', 'Liz'];
  private users: any[] = [
    {id: 1, name: 'Tom', permission: 'admin'},
    { id: 2, name: 'Kim', permission: 'write' },
    { id: 3, name: 'Jon', permission: 'read' },
    { id: 4, name: 'Liz', permission: 'reader-write' },
  ];
  
  private userHeaders: string[] = Object.keys(this.users[0]);
  private isVisible: boolean = true;
  private status: string = 'progress';
  private statusList: string[] = ['progress', 'done', 'error'];
  private count: number = 0;
  constructor () {
    this.name = 'Built-in Directives';
  }
  setStatus() {
      if (this.count > 2) { this.count = 0; } else { this.count += 1;}
    this.status = this.statusList[this.count];
  }
}

/**
 * Bootstrap the app with `BuiltInDirectives`.
 */
bootstrap(BuiltInDirectives, []);
