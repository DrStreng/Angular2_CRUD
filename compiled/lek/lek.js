System.register([], function(exports_1) {
    "use strict";
    var Lek;
    return {
        setters:[],
        execute: function() {
            Lek = (function () {
                function Lek(name, typeId, cost) {
                    this.name = name;
                    this.typeId = typeId;
                    this.cost = cost;
                }
                return Lek;
            }());
            exports_1("Lek", Lek);
        }
    }
});
