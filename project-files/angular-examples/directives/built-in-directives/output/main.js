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
    var BuiltInDirectives;
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
             * Root Component
             */
            BuiltInDirectives = (function () {
                function BuiltInDirectives() {
                    this.names = ['Tom', 'Kim', 'Jon', 'Liz'];
                    this.users = [
                        { id: 1, name: 'Tom', permission: 'admin' },
                        { id: 2, name: 'Kim', permission: 'write' },
                        { id: 3, name: 'Jon', permission: 'read' },
                        { id: 4, name: 'Liz', permission: 'reader-write' },
                    ];
                    this.userHeaders = Object.keys(this.users[0]);
                    this.isVisible = true;
                    this.status = 'progress';
                    this.statusList = ['progress', 'done', 'error'];
                    this.count = 0;
                    this.name = 'Built-in Directives';
                }
                BuiltInDirectives.prototype.setStatus = function () {
                    if (this.count > 2) {
                        this.count = 0;
                    }
                    else {
                        this.count += 1;
                    }
                    this.status = this.statusList[this.count];
                };
                BuiltInDirectives = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/app.tpl.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], BuiltInDirectives);
                return BuiltInDirectives;
            })();
            /**
             * Bootstrap the app with `BuiltInDirectives`.
             */
            browser_1.bootstrap(BuiltInDirectives, []);
        }
    }
});
//# sourceMappingURL=main.js.map