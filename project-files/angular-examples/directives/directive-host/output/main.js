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
    var SimpleDirective, DirectiveHost;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            SimpleDirective = (function () {
                function SimpleDirective() {
                    this.isHidden = false;
                }
                SimpleDirective.prototype.handleClick = function () {
                    console.log('I was clicked');
                };
                SimpleDirective = __decorate([
                    core_1.Directive({
                        selector: '[simple-directive]',
                        host: {
                            '(click)': 'handleClick()',
                            '[hidden]': 'isHidden'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], SimpleDirective);
                return SimpleDirective;
            })();
            /**
             * Define the Component.
             */
            DirectiveHost = (function () {
                function DirectiveHost() {
                    this.name = 'Directive Host';
                }
                DirectiveHost = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/app.tpl.html',
                        directives: [SimpleDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DirectiveHost);
                return DirectiveHost;
            })();
            /**
             * Bootstrap the app with `DirectiveHost`.
             */
            browser_1.bootstrap(DirectiveHost, []);
        }
    }
});
//# sourceMappingURL=main.js.map