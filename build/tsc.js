System.register("pedal", [], function (exports_1, context_1) {
    "use strict";
    var Pedal;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Pedal = class Pedal {
                constructor(name, color, onOff) {
                    this.name = name;
                    this.color = color;
                    this.onOff = onOff;
                }
                toggle() {
                    this.onOff = !this.onOff;
                    return this.onOff;
                }
            };
            exports_1("Pedal", Pedal);
        }
    };
});
System.register("index", ["pedal"], function (exports_2, context_2) {
    "use strict";
    var pedal_1, User, delayPedal, distortionPedal, pedals, Roman;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (pedal_1_1) {
                pedal_1 = pedal_1_1;
            }
        ],
        execute: function () {
            User = class User {
                constructor(firstName, lastName, age, gender, pedals = []) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.age = age;
                    this.gender = gender;
                    this.pedals = pedals;
                }
                getFullName() {
                    console.log(this.firstName + " " + this.lastName);
                }
            };
            delayPedal = new pedal_1.Pedal('Delay', 'Blue', false);
            distortionPedal = new pedal_1.Pedal('Distortion', 'red', false);
            pedals = [delayPedal, distortionPedal];
            Roman = new User('Роман', 'Дроздов', 18, 'муж', pedals);
            console.log(Roman);
        }
    };
});
