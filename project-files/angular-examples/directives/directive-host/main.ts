import {Component, Directive} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';


@Directive({
    selector: '[simple-directive]',
    host: {
        '(click)': 'handleClick()',
        '[hidden]': 'isHidden'
    }
})

class SimpleDirective {
  private isHidden:boolean = false;
  handleClick() {
    console.log('I was clicked');
  }
}

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
  directives: [SimpleDirective]
})
class DirectiveHost  {
  private name: string;
  constructor () {
    this.name = 'Directive Host';
  }
}

/**
 * Bootstrap the app with `DirectiveHost`.
 */
bootstrap(DirectiveHost, []);
