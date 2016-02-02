import {Directive, Component, ElementRef, Renderer, Input, OnInit, Host, EventEmitter, Output} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';


/**
 * Define Directive (Attribute Directive).
 */

@Directive({
  selector: '[simple-directive]',
  host: {
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()',
    '[hidden]': 'isHidden',
    '[class.done]': 'isDone',
    'role': 'button'
  }
})
class SimpleDirective implements OnInit {
  @Input() private color: string
  @Output() myevent: EventEmitter<string>;
  private isHidden: boolean = false;
  private isDone: boolean = false;
  private defaultColor:string = 'magenta';
  private elm: any;


  constructor(private elmRef: ElementRef, private renderer: Renderer) {
    this.elm = elmRef.nativeElement;
    this.myevent = new EventEmitter();
    setInterval(() => {this.myevent.emit('myevename')}, 1000);
  }


  /**
   * Set the color after the input
   * value has been resolved.
   */
  ngOnInit() {
    this.defaultColor = this.color || this.defaultColor;
    this.setColor(this.color || this.defaultColor);
  }

  /**
   * Private method for setting the color
   */
  private setColor(color: string) {
    this.renderer.setElementStyle(this.elm, 'color', color);
  }


 /**
  * Setter/Getter for isHidden, isDone
  */
  set setIsHidden(state) { this.isHidden = state; }
  set setIsDone(state) { this.isDone = state; }

  /**
   * Event handlers
   */
  onMouseLeave() { this.setColor(this.defaultColor); }
  onClick() { this.setColor('orange') }
}

@Component({
  selector: '[simple-directive]',
  styles: ['.value { text-decoration: underline } .value:hover { cursor: pointer } .value:active { color: black } '],
  template: `
  <span class="value"> <ng-content></ng-content> </span>
  <div> <button (click)="hide()"> Hide/Show Value </button> </div>
  <div> <button (click)="setIsDone()"> Done </button></div>
  `
})
class SimpleDirCmp {
  constructor(private simpleDirective: SimpleDirective) { }
  hide() { this.simpleDirective.setIsHidden = true; }
  setIsDone() { this.simpleDirective.setIsDone = true; }
}

/**
 * Root Component
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
  directives: [SimpleDirective, SimpleDirCmp]
})
class DirectiveExample  {
  private name: string;
  private value: number = 0;
  private firedEvent: string = '...';
  constructor() { this.name = 'Basic Directive'; }
  addOne(event) {
    this.value += 1;
    this.firedEvent = event + this.value;
  }
}

/**
 * Bootstrap the app with `DirectiveExample`.
 */
bootstrap(DirectiveExample, []);
