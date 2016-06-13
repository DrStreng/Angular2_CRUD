System.register(['angular2/core', 'angular2/router', './type.service', './type', 'rxjs/add/operator/map', 'angular2/common'], function(exports_1) {
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
    var core_1, router_1, type_service_1, type_1, common_1;
    var TypeComponent;
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
            function (type_1_1) {
                type_1 = type_1_1;
            },
            function (_1) {},
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            TypeComponent = (function () {
                function TypeComponent(TypeService, fb) {
                    var _this = this;
                    this.TypeService = TypeService;
                    TypeService.getTypes()
                        .subscribe(function (response) {
                        if (response)
                            _this.typs = response;
                    });
                    this.myForm = fb.group({
                        'myVal': ['', common_1.Validators.compose([
                                common_1.Validators.required, this.mojslabyValidator])
                        ]
                    });
                    this.myVal = this.myForm.controls['myVal'];
                    this.myVal.valueChanges.subscribe(function (value) {
                        console.log(' Value changed: ', value);
                    });
                    this.myForm.valueChanges.subscribe(function (value) {
                        console.log(' Form changed changed: ', value);
                    });
                }
                TypeComponent.prototype.AddType = function (name) {
                    var _this = this;
                    this.TypeService.addType(new type_1.Typ(name))
                        .subscribe(function (response) {
                        if (response.success)
                            window.location.href = "/AddType";
                        if (response.error)
                            _this.serverAnswer = response;
                    });
                };
                TypeComponent.prototype.mojslabyValidator = function (control) {
                    if (control.value.match(/^[\W]/)) {
                        return { "valerror": true };
                    }
                };
                TypeComponent.prototype.removeTyp = function (name) {
                    var _this = this;
                    this.TypeService.removeTyp(new type_1.Typ(name))
                        .subscribe(function (response) {
                        if (response.success)
                            window.location.href = "/AddType";
                        if (response.error)
                            _this.serverAnswer = response;
                    });
                };
                TypeComponent.prototype.UpdateTyp = function (name, _id) {
                    var _this = this;
                    //console.log(name+" "+_id);
                    this.TypeService.updateTyp(name, _id)
                        .subscribe(function (response) {
                        if (response.success)
                            window.location.href = "/AddType";
                        if (response.error)
                            _this.serverAnswer = response;
                    });
                };
                TypeComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'components/type/AddType-form.html',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        providers: [type_service_1.TypeService]
                    }), 
                    __metadata('design:paramtypes', [type_service_1.TypeService, common_1.FormBuilder])
                ], TypeComponent);
                return TypeComponent;
            }());
            exports_1("TypeComponent", TypeComponent);
        }
    }
});
