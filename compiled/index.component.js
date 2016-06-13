System.register(['angular2/core', './lek/lek.component', './aaa/aaa.component', './type/type.component', 'angular2/router'], function(exports_1) {
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
    var core_1, lek_component_1, aaa_component_1, type_component_1, router_1;
    var IndexComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lek_component_1_1) {
                lek_component_1 = lek_component_1_1;
            },
            function (aaa_component_1_1) {
                aaa_component_1 = aaa_component_1_1;
            },
            function (type_component_1_1) {
                type_component_1 = type_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            IndexComponent = (function () {
                function IndexComponent() {
                }
                IndexComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: aaa_component_1.aaaComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/AddLek',
                            name: 'AddLek',
                            component: lek_component_1.LekComponent,
                        },
                        {
                            path: '/AddType',
                            name: 'AddType',
                            component: type_component_1.TypeComponent,
                        }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n  ",
                        directives: [lek_component_1.LekComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], IndexComponent);
                return IndexComponent;
            }());
            exports_1("IndexComponent", IndexComponent);
        }
    }
});
