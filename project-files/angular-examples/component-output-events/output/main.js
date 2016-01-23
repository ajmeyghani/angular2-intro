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
    var AdderAuto, Adder, App;
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
             * Adder Auto
             */
            AdderAuto = (function () {
                function AdderAuto() {
                    var _this = this;
                    this.myevent = new core_2.EventEmitter();
                    setInterval(function () { _this.myevent.emit('myevename'); }, 1000);
                }
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_2.EventEmitter !== 'undefined' && core_2.EventEmitter) === 'function' && _a) || Object)
                ], AdderAuto.prototype, "myevent", void 0);
                AdderAuto = __decorate([
                    core_1.Directive({
                        selector: '[adder-auto]',
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdderAuto);
                return AdderAuto;
                var _a;
            })();
            /**
             * Adder component
             */
            Adder = (function () {
                function Adder() {
                    this.value = 0;
                    this.firedEvent = '...';
                }
                Adder.prototype.addOne = function (event) {
                    this.value += 1;
                    this.firedEvent = event + this.value;
                };
                Adder = __decorate([
                    core_1.Component({
                        selector: 'adder',
                        template: "\n  <p>Value: {{ value }}</p>\n  <button (click)=\"addOne()\">Add +</button>\n  <h2>Using Emitter</h2>\n  <span adder-auto (myevent)=\"addOne($event)\"> EVENT: {{firedEvent}}</span>\n  ",
                        directives: [AdderAuto]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Adder);
                return Adder;
            })();
            /**
             * App
             */
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [Adder],
                        template: "\n  <div><adder></adder></div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            /** boot */
            browser_1.bootstrap(App, []);
        }
    }
});
//# sourceMappingURL=main.js.map