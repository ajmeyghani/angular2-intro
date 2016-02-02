import {Component, Directive, Input, TemplateRef, ViewContainerRef } from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';


/**
 * Define the `Unless` directive
 */

@Directive({
  selector: '[myUnless]'
})
class UnlessDirective {
  
  constructor(
    private tRef: TemplateRef,
    private vContainer: ViewContainerRef
  ) { }
  
  @Input() set myUnless(condition: boolean) {
    if (!condition) {
      this.vContainer.createEmbeddedView(this.tRef);
    } else {
      this.vContainer.clear();
    }
  }
}


/**
 * Root Component
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
  directives: [UnlessDirective]
})
class UnlessDirectiveExample  {
  private name: string;
  private isDone: boolean = true;
  constructor () {
    this.name = 'Starter Template!!';
  }
}

/**
 * Bootstrap the app with `UnlessDirectiveExample`.
 */
bootstrap(UnlessDirectiveExample, []);
