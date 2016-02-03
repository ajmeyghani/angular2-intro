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
    var NativeDomBinding;
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
             * Define the Component.
             */
            NativeDomBinding = (function () {
                function NativeDomBinding() {
                    this.isDone = true;
                    this.isCollapsed = true;
                    this.isVisible = true;
                    this.textValue = 'First Value';
                    this.name = 'Binding to DOM Properties';
                }
                NativeDomBinding.prototype.toggle = function () {
                    this.isDone = !this.isDone;
                };
                NativeDomBinding.prototype.toggleClass = function () {
                    this.isCollapsed = !this.isCollapsed;
                };
                NativeDomBinding.prototype.toggleIsVisible = function () {
                    this.isVisible = !this.isVisible;
                };
                NativeDomBinding.prototype.setTextContent = function (value) {
                    this.textValue = value;
                };
                NativeDomBinding = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/app.tpl.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], NativeDomBinding);
                return NativeDomBinding;
            })();
            /**
             * Bootstrap the app with `NativeDomBinding`.
             */
            browser_1.bootstrap(NativeDomBinding, []);
        }
    }
});
//# sourceMappingURL=main.js.map