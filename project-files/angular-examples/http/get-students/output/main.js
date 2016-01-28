System.register(['angular2/core', 'angular2/http', 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, browser_1;
    var StudentSvc, HttpGetExample;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            /**
             * Student service deals with getting
             * data by hitting an endpoint.
             */
            StudentSvc = (function () {
                function StudentSvc(http) {
                    this.http = http;
                } /* Inject Http */
                StudentSvc.prototype.getStudents = function () {
                    return this.http.get('/api/students');
                };
                StudentSvc = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], StudentSvc);
                return StudentSvc;
                var _a;
            })();
            /**
             * Root component class.
             */
            HttpGetExample = (function () {
                function HttpGetExample(studentSvc) {
                    var _this = this;
                    this.name = 'HTTP Get';
                    studentSvc.getStudents().subscribe(function (resp) { return _this.students = resp.json(); });
                }
                HttpGetExample = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/app.tpl.html',
                        providers: [http_1.HTTP_PROVIDERS, StudentSvc]
                    }), 
                    __metadata('design:paramtypes', [StudentSvc])
                ], HttpGetExample);
                return HttpGetExample;
            })();
            /**
             * Bootstrap the app with `HttpGetExample`.
             */
            /**
             * You could make the `HTTP_PROVIDERS` available globally
             * `bootstrap(HttpGetExample, [HTTP_PROVIDERS]);`
             */
            browser_1.bootstrap(HttpGetExample, []);
        }
    }
});
//# sourceMappingURL=main.js.map