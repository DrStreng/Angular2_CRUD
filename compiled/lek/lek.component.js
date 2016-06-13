System.register(['angular2/core', 'angular2/router', '../type/type.service', './lek.service', './lek', 'rxjs/add/operator/map'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, type_service_1, lek_service_1, lek_1;
    var LekComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (type_service_1_1) {
                type_service_1 = type_service_1_1;
            },
            function (lek_service_1_1) {
                lek_service_1 = lek_service_1_1;
            },
            function (lek_1_1) {
                lek_1 = lek_1_1;
            },
            function (_1) {}],
        execute: function() {
            LekComponent = (function () {
                function LekComponent(TypeService, LekService) {
                    var _this = this;
                    this.TypeService = TypeService;
                    this.LekService = LekService;
                    TypeService.getTypes().subscribe(function (response) {
                        if (response)
                            _this.typs = response;
                    });
                    LekService.getLeks().subscribe(function (response) {
                        if (response)
                            _this.leks = response;
                    });
                }
                LekComponent.prototype.removeLek = function (name) {
                    var _this = this;
                    this.LekService.removeLek(new lek_1.Lek(name))
                        .subscribe(function (response) {
                        if (response.success)
                            window.location.href = "/AddLek";
                        if (response.error)
                            _this.serverAnswer = response;
                    });
                };
                LekComponent.prototype.EditLek = function (name, typId, cost, _id) {
                    var _this = this;
                    this.LekService.EditLek(name, typId, cost, _id)
                        .subscribe(function (response) {
                        if (response.success)
                            window.location.href = "/AddLek";
                        if (response.error)
                            _this.serverAnswer = response;
                    });
                };
                LekComponent.prototype.AddLek = function (name, typeId, cost) {
                    var _this = this;
                    this.LekService.addLek(new lek_1.Lek(name, typeId, cost))
                        .subscribe(function (response) {
                        if (response.success)
                            window.location.href = "/AddLek";
                        if (response.error)
                            _this.serverAnswer = response;
                    });
                };
                LekComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'components/lek/AddLek-form.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [type_service_1.TypeService, lek_service_1.LekService]
                    }), 
                    __metadata('design:paramtypes', [type_service_1.TypeService, lek_service_1.LekService])
                ], LekComponent);
                return LekComponent;
            }());
            exports_1("LekComponent", LekComponent);
        }
    }
});
