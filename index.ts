import { Pedal, IPedals } from './pedal';


interface IUser {
    firstName: string
    lastName: string
    age: number
    gender: string
    pedals?: Array<IPedals>
    getFullName: () => void
}

class User implements IUser {

    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    pedals?: any[];

    constructor(firstName: string, lastName: string, age: number, gender: string, pedals: IPedals[] = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.pedals = pedals;
    }   

    getFullName() {
        console.log(this.firstName + " " + this.lastName)
    }
}

const delayPedal = new Pedal('Delay', 'Blue', false);
const distortionPedal = new Pedal('Distortion', 'red', false);
const pedals = [delayPedal, distortionPedal];

const Roman = new User('Роман', 'Дроздов', 18, 'муж', pedals);
console.log(Roman);