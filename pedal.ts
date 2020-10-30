export interface IPedals{
    name: string
    color: string
    onOff: boolean
    toggle: () => boolean
}



export class Pedal implements IPedals{

    name: string
    color: string
    onOff: boolean

    constructor(name: string, color: string, onOff: boolean) {
        this.name = name
        this.color = color
        this.onOff = onOff
    }

    toggle() {
        this.onOff = !this.onOff
        return this.onOff
    }

}