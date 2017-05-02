"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TempConverter = (function () {
    function TempConverter() {
    }
    TempConverter.convertFtoC = function (temp) {
        var value = temp.toPrecision ? temp : parseFloat(temp);
        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
        // return ((parseFloat(temp.toPrecision(2)) - 32) / 1.8).toFixed(1);
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;
//# sourceMappingURL=tempConverter.js.map