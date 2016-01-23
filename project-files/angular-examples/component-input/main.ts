import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Input, OnInit} from 'angular2/core';


/**
 * Permission component
 */
@Component({
  selector: 'permission',
  template: '<h2> Restriction is: {{ restriction }}'
})
class Permission {
  @Input() private uid: string;
  private restriction: string;
  constructor() {
    this.restriction = 'none';
  }
  ngOnInit() {
    this.restriction = this.uid === '1' ? 'admin' : 'normal';
  }
}

/**
 * User component
 */
@Component({
  selector: 'user',
  template: `
  <h1>Hello, {{ name }} {{ lastName }}, id: {{ userId}}</h1>
  <div>
    <permission [uid]="userId"></permission>
  </div>
  `,
  inputs: ['name', 'lastName', 'userId'],
  directives: [Permission] // <- register `Permissio` with `User`
})
class User {}

/**
 * Root component
 */
@Component({
  selector: 'app',
  template: `<user name="Tom" lastName="Johnson" userId="1"></user>`,
  directives: [User] // <- register the component
})
class Root {}

bootstrap(Root, [])