"use strict";
exports.__esModule = true;
var pedal_1 = require("./pedal");
var User = /** @class */ (function () {
    function User(firstName, lastName, age, gender, pedals) {
        if (pedals === void 0) { pedals = []; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.pedals = pedals;
    }
    User.prototype.getFullName = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    return User;
}());
var delayPedal = new pedal_1.Pedal('Delay', 'Blue', false);
var distortionPedal = new pedal_1.Pedal('Distortion', 'red', false);
var pedals = [delayPedal, distortionPedal];
var Roman = new User('Роман', 'Дроздов', 18, 'муж', pedals);
console.log(Roman);
