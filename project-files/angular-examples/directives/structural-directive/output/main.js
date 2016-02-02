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
    var UnlessDirective, UnlessDirectiveExample;
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
             * Define the `Unless` directive
             */
            UnlessDirective = (function () {
                function UnlessDirective(tRef, vContainer) {
                    this.tRef = tRef;
                    this.vContainer = vContainer;
                }
                Object.defineProperty(UnlessDirective.prototype, "myUnless", {
                    set: function (condition) {
                        if (!condition) {
                            this.vContainer.createEmbeddedView(this.tRef);
                        }
                        else {
                            this.vContainer.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], UnlessDirective.prototype, "myUnless", null);
                UnlessDirective = __decorate([
                    core_1.Directive({
                        selector: '[myUnless]'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object])
                ], UnlessDirective);
                return UnlessDirective;
                var _a, _b;
            })();
            /**
             * Root Component
             */
            UnlessDirectiveExample = (function () {
                function UnlessDirectiveExample() {
                    this.isDone = true;
                    this.name = 'Starter Template!!';
                }
                UnlessDirectiveExample = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/app.tpl.html',
                        directives: [UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UnlessDirectiveExample);
                return UnlessDirectiveExample;
            })();
            /**
             * Bootstrap the app with `UnlessDirectiveExample`.
             */
            browser_1.bootstrap(UnlessDirectiveExample, []);
        }
    }
});
//# sourceMappingURL=main.js.map