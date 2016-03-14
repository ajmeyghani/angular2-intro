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
    var MyFilter, ListFiltering;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            MyFilter = (function () {
                function MyFilter() {
                }
                MyFilter.prototype.transform = function (input, args) {
                    if (args.length) {
                        var titleToFilter = args[0].title;
                        return input.filter(function (item) { return item.title !== titleToFilter; });
                    }
                    else {
                        return input.filter(function (item) { return item.id < 3; });
                    }
                };
                MyFilter = __decorate([
                    core_1.Pipe({
                        name: 'myfilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyFilter);
                return MyFilter;
            })();
            /**
             * Define the Component.
             */
            ListFiltering = (function () {
                function ListFiltering() {
                    this.name = 'Filter a List';
                    this.items = [
                        { id: 1, title: 'first' },
                        { id: 2, title: 'second' },
                        { id: 3, title: 'third' },
                        { id: 4, title: 'forth' }
                    ];
                }
                ListFiltering = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/app.tpl.html',
                        pipes: [MyFilter]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListFiltering);
                return ListFiltering;
            })();
            /**
             * Bootstrap the app with `ListFiltering`.
             */
            browser_1.bootstrap(ListFiltering, []);
        }
    }
});
//# sourceMappingURL=main.js.map