System.register(['angular2/core', 'angular2/platform/browser', './power.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, power_pipe_1;
    var BasicPipeExample;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (power_pipe_1_1) {
                power_pipe_1 = power_pipe_1_1;
            }],
        execute: function() {
            /**
             * Define the app component
             */
            BasicPipeExample = (function () {
                function BasicPipeExample() {
                }
                BasicPipeExample = __decorate([
                    core_1.Component({
                        selector: 'app',
                        pipes: [power_pipe_1.PowerPipe],
                        templateUrl: 'templates/basic-pipe.tpl.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], BasicPipeExample);
                return BasicPipeExample;
            })();
            /**
             * Bootstrap the app.
             */
            browser_1.bootstrap(BasicPipeExample, []);
        }
    }
});
//# sourceMappingURL=main.js.map