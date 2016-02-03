import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/**
 * Define the Component.
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
})
class NativeDomBinding  {
  private name: string;
  private isDone: boolean = true;
  private isCollapsed: boolean = true;
  private isVisible: boolean = true;
  private textValue:string = 'First Value';
 
  constructor () {
    this.name = 'Binding to DOM Properties';
  }
  toggle () {
    this.isDone = !this.isDone;
  }
  
  toggleClass() {
    this.isCollapsed = !this.isCollapsed;
  }
  
  toggleIsVisible() {
    this.isVisible = !this.isVisible;
  }
  
  setTextContent(value) {
    this.textValue = value;
  }
}


/**
 * Bootstrap the app with `NativeDomBinding`.
 */
bootstrap(NativeDomBinding, []);
