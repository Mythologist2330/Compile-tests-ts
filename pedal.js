"use strict";
exports.__esModule = true;
exports.Pedal = void 0;
var Pedal = /** @class */ (function () {
    function Pedal(name, color, onOff) {
        this.name = name;
        this.color = color;
        this.onOff = onOff;
    }
    Pedal.prototype.toggle = function () {
        this.onOff = !this.onOff;
        return this.onOff;
    };
    return Pedal;
}());
exports.Pedal = Pedal;
