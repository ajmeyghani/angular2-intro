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
    var LocalVariable;
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
            LocalVariable = (function () {
                function LocalVariable() {
                    this.name = 'Local Variable';
                }
                LocalVariable.prototype.setTitle = function (title) {
                    title.textContent = 'New Title';
                };
                LocalVariable.prototype.updateUsername = function (input) {
                    this.usernameValue = input.value;
                };
                LocalVariable = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/app.tpl.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], LocalVariable);
                return LocalVariable;
            })();
            /**
             * Bootstrap the app with `LocalVariable`.
             */
            browser_1.bootstrap(LocalVariable, []);
        }
    }
});
//# sourceMappingURL=main.js.map