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
    var HelloAngular;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            HelloAngular = (function () {
                function HelloAngular() {
                    console.log('constructor called');
                    this.name = 'NG';
                }
                HelloAngular.prototype.ngOnInit = function () { console.log('component initialized'); };
                HelloAngular = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "<h1> hello {{name}} </h1> "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloAngular);
                return HelloAngular;
            })();
            browser_1.bootstrap(HelloAngular, []);
        }
    }
});
//# sourceMappingURL=main.js.map