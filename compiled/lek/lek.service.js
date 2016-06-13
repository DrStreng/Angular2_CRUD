System.register(["angular2/core", "angular2/http"], function(exports_1) {
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
    var core_1, http_1;
    var LekService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LekService = (function () {
                function LekService(http) {
                    this.http = http;
                }
                LekService.prototype.addLek = function (lek) {
                    var headers = new http_1.Headers();
                    headers.append('Content-type', 'application/json');
                    return this.http.post('/leks/addLek', JSON.stringify(lek), { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                ;
                LekService.prototype.getLeks = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-type', 'application/json');
                    return this.http.get('/leks/getLeks', { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                ;
                LekService.prototype.removeLek = function (lek) {
                    var headers = new http_1.Headers();
                    headers.append('Content-type', 'application/json');
                    return this.http.post('/leks/removeLek', JSON.stringify(lek), { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                LekService.prototype.EditLek = function (name, typId, cost, _id) {
                    var headers = new http_1.Headers();
                    headers.append('Content-type', 'application/json');
                    return this.http.post('/leks/EditLek', JSON.stringify({ name: name, _id: _id, cost: cost, typId: typId }), { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                LekService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LekService);
                return LekService;
            }());
            exports_1("LekService", LekService);
        }
    }
});
