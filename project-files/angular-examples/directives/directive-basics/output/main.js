System.register(['angular2/core', 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1;
    var SimpleDirective, SimpleDirCmp, DirectiveExample;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            /**
             * Define Directive (Attribute Directive).
             */
            SimpleDirective = (function () {
                function SimpleDirective(elmRef, renderer) {
                    var _this = this;
                    this.elmRef = elmRef;
                    this.renderer = renderer;
                    this.isHidden = false;
                    this.isDone = false;
                    this.defaultColor = 'magenta';
                    this.elm = elmRef.nativeElement;
                    this.myevent = new core_1.EventEmitter();
                    setInterval(function () { _this.myevent.emit('myevename'); }, 1000);
                }
                /**
                 * Set the color after the input
                 * value has been resolved.
                 */
                SimpleDirective.prototype.ngOnInit = function () {
                    this.defaultColor = this.color || this.defaultColor;
                    this.setColor(this.color || this.defaultColor);
                };
                /**
                 * Private method for setting the color
                 */
                SimpleDirective.prototype.setColor = function (color) {
                    this.renderer.setElementStyle(this.elm, 'color', color);
                };
                Object.defineProperty(SimpleDirective.prototype, "setIsHidden", {
                    /**
                     * Setter/Getter for isHidden, isDone
                     */
                    set: function (state) { this.isHidden = state; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SimpleDirective.prototype, "setIsDone", {
                    set: function (state) { this.isDone = state; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Event handlers
                 */
                SimpleDirective.prototype.onMouseLeave = function () { this.setColor(this.defaultColor); };
                SimpleDirective.prototype.onClick = function () { this.setColor('orange'); };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SimpleDirective.prototype, "color", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], SimpleDirective.prototype, "myevent", void 0);
                SimpleDirective = __decorate([
                    core_1.Directive({
                        selector: '[simple-directive]',
                        host: {
                            '(mouseleave)': 'onMouseLeave()',
                            '(click)': 'onClick()',
                            '[hidden]': 'isHidden',
                            '[class.done]': 'isDone',
                            'role': 'button'
                        }
                    }), 
                    __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _c) || Object])
                ], SimpleDirective);
                return SimpleDirective;
                var _a, _b, _c;
            })();
            SimpleDirCmp = (function () {
                function SimpleDirCmp(simpleDirective) {
                    this.simpleDirective = simpleDirective;
                }
                SimpleDirCmp.prototype.hide = function () {
                    this.simpleDirective.setIsHidden = true;
                };
                SimpleDirCmp.prototype.setIsDone = function () {
                    this.simpleDirective.setIsDone = true;
                };
                SimpleDirCmp = __decorate([
                    core_1.Component({
                        selector: '[simple-directive]',
                        styles: ['.value { text-decoration: underline } .value:hover { cursor: pointer } .value:active { color: black } '],
                        template: "\n  <span class=\"value\"> <ng-content></ng-content> </span>\n  <div> <button (click)=\"hide()\"> Hide/Show Value </button> </div>\n  <div> <button (click)=\"setIsDone()\"> Done </button></div>\n  "
                    }), 
                    __metadata('design:paramtypes', [SimpleDirective])
                ], SimpleDirCmp);
                return SimpleDirCmp;
            })();
            /**
             * Root Component
             */
            DirectiveExample = (function () {
                function DirectiveExample() {
                    this.value = 0;
                    this.firedEvent = '...';
                    this.name = 'Basic Directive';
                }
                DirectiveExample.prototype.addOne = function (event) {
                    this.value += 1;
                    this.firedEvent = event + this.value;
                };
                DirectiveExample = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/app.tpl.html',
                        directives: [SimpleDirective, SimpleDirCmp]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DirectiveExample);
                return DirectiveExample;
            })();
            /**
             * Bootstrap the app with `DirectiveExample`.
             */
            browser_1.bootstrap(DirectiveExample, []);
        }
    }
});
//# sourceMappingURL=main.js.map