import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
})
class LocalVariable  {
  private name: string;
  private usernameValue: string;
  constructor () {
    this.name = 'Local Variable';
  }
  setTitle(title) {
      title.textContent = 'New Title';
  }
  updateUsername(input) {
      this.usernameValue = input.value;
  }
}

/**
 * Bootstrap the app with `LocalVariable`.
 */
bootstrap(LocalVariable, []);
