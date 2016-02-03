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
    var DomEventBindingExamples;
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
            DomEventBindingExamples = (function () {
                function DomEventBindingExamples() {
                    this.name = 'DOM Event Binding';
                }
                DomEventBindingExamples.prototype.sayHello = function () {
                    this.hello = 'hello';
                };
                DomEventBindingExamples.prototype.sayDoubleHello = function () {
                    this.doubleHello = 'Double Hello!';
                };
                DomEventBindingExamples.prototype.sayEnterHello = function () {
                    this.enterHello = 'Enter Hello!';
                };
                DomEventBindingExamples.prototype.clearEnterHello = function () {
                    this.enterHello = '';
                };
                DomEventBindingExamples.prototype.sayUpHello = function () {
                    this.upHello = 'Up Hello !';
                };
                DomEventBindingExamples.prototype.sayDownHello = function () {
                    this.downHello = 'Down Hello!';
                };
                DomEventBindingExamples.prototype.setInputFieldValue = function (value) {
                    this.inputValue = value;
                };
                DomEventBindingExamples.prototype.setInputFieldValue2 = function (value) {
                    this.keyupValue = value;
                };
                DomEventBindingExamples.prototype.catchBubbledEvent = function (event) {
                    this.rowClicked = event.target.nodeName === 'TD' ? event.target.textContent : '';
                };
                DomEventBindingExamples = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/app.tpl.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], DomEventBindingExamples);
                return DomEventBindingExamples;
            })();
            /**
             * Bootstrap the app with `DomEventBindingExamples`.
             */
            browser_1.bootstrap(DomEventBindingExamples, []);
        }
    }
});
//# sourceMappingURL=main.js.map