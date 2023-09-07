export interface Animal {
    happiness: number
    hunger: number;
    typeOfAnimal: string;

    eat(): string;
    play(): string;
    talk(): string;
    inspect(): string;
}

export class Mascota implements Animal {
    private name: string;
    typeOfAnimal: string;
    happiness: number = 2;
    hunger: number = 8;
    constructor(name: string,typeOfAnimal:string) {
        this.typeOfAnimal = typeOfAnimal;
        this.name = name;
    }
    talk(): string {
        return this.happiness > 1
            ? `sonidos de ${this.typeOfAnimal} feliz`
            : `quejidos de ${this.typeOfAnimal}`;
    }
    eat(): string {
        this.hunger >= 5 ? this.happiness = 2 : this.happiness = 1;

        if (this.hunger > 10) {
            this.talk();
            return `Amigo, se esta atragantando tu ${this.typeOfAnimal}`
        }
        this.hunger += 5;
        this.talk();
        return `Medidor de hambre aumento a ${this.hunger}`
    }
    play(): string {
        this.hunger >= 5 ? this.happiness = 2 : this.happiness = 1;
        this.talk();
        return this.hunger > 3
            ? `Medidor de Hambre bajo a ${this.hunger -= 2}`
            : `${this.name} esta cansado/a`;
    }
    inspect(): string {
        return `Nombre: ${this.name}\nAnimal: ${this.typeOfAnimal}\nEstado: ${this.happiness===2?"Feliz":"Triste"}\nMedidor de hambre: ${this.hunger}`;
    }
}

// ejemplo de uso // copiar en index.ts
// const pajarito = new Mascota("Pepita", "pajaro");

// console.log(pajarito.inspect()+"\n");
// console.log(pajarito.eat()+"\n");
// console.log(pajarito.play()+"\n");
// console.log(pajarito.inspect()+"\n");


// const gato = new Mascota("diana", "gato");

// console.log(gato.inspect()+"\n");
// console.log(gato.eat()+"\n");
// console.log(gato.play()+"\n");
// console.log(gato.inspect()+"\n");