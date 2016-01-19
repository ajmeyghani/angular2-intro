System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PowerPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * `powerTo` pipe: raises the base to the given exponent.
             * @param: base {number}
             * @param: exponent {number}, default = 1
             * @usage:
             *  template.html
             *  `value is {{ 2 | powerTo:4}}` -> value is 4.
             */
            PowerPipe = (function () {
                function PowerPipe() {
                }
                PowerPipe.prototype.transform = function (base, args) {
                    var exponent = args[0] || 1;
                    return Math.pow(base, exponent);
                };
                PowerPipe = __decorate([
                    core_1.Pipe({ name: 'powerTo' }), 
                    __metadata('design:paramtypes', [])
                ], PowerPipe);
                return PowerPipe;
            })();
            exports_1("PowerPipe", PowerPipe);
        }
    }
});
//# sourceMappingURL=power.pipe.js.map