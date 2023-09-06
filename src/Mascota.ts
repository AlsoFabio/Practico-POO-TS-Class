export interface Animal {
    happiness: number
    hunger: number;
    type: string;
    voice: string;

    comer(): void;
    jugar(): void;
    hablar(): void;
}

export class Perro implements Animal {
    private name: string;
    happiness: number = 2;
    hunger: number = 8;
    type: string = "perro";
    voice: string = "sonidos de perro";
    constructor(name: string) {
        this.name = name;
    }
    hablar(): string {
        return this.happiness > 1
            ? `sonidos de ${this.type} feliz`
            : `quejidos de ${this.type}`;
    }
    comer(): string {
        this.hunger >= 5 ? this.happiness = 2 : this.happiness = 1;

        if (this.hunger > 10) {
            this.hablar();
            return `Amigo, se esta atragantando tu ${this.type}`
        }
        this.hunger += 5;
        this.hablar();
        return `${this.hunger}`
    }
    jugar(): string {
        this.hunger >= 5 ? this.happiness = 2 : this.happiness = 1;
        this.hablar();
        return this.hunger > 3
            ? `Hambre: ${this.hunger -= 3}`
            : `${this.name} esta cansado/a`;
    }
}