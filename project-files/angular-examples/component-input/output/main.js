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
    var core_1, browser_1, core_2;
    var Permission, User, Root;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            /**
             * Permission component
             */
            Permission = (function () {
                function Permission() {
                    this.restriction = 'none';
                }
                Permission.prototype.ngOnInit = function () {
                    this.restriction = this.uid === '1' ? 'admin' : 'normal';
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], Permission.prototype, "uid", void 0);
                Permission = __decorate([
                    core_1.Component({
                        selector: 'permission',
                        template: '<h2> Restriction is: {{ restriction }}'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Permission);
                return Permission;
            })();
            /**
             * User component
             */
            User = (function () {
                function User() {
                }
                User = __decorate([
                    core_1.Component({
                        selector: 'user',
                        template: "\n  <h1>Hello, {{ name }} {{ lastName }}, id: {{ userId}}</h1>\n  <div>\n    <permission [uid]=\"userId\"></permission>\n  </div>\n  ",
                        inputs: ['name', 'lastName', 'userId'],
                        directives: [Permission] // <- register `Permissio` with `User`
                    }), 
                    __metadata('design:paramtypes', [])
                ], User);
                return User;
            })();
            /**
             * Root component
             */
            Root = (function () {
                function Root() {
                }
                Root = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "<user name=\"Tom\" lastName=\"Johnson\" userId=\"1\"></user>",
                        directives: [User] // <- register the component
                    }), 
                    __metadata('design:paramtypes', [])
                ], Root);
                return Root;
            })();
            browser_1.bootstrap(Root, []);
        }
    }
});
//# sourceMappingURL=main.js.map