// Definimos una interfaz para las formas geométricas que incluye métodos para calcular área y perímetro.
interface FormaGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
}
 
// Para investigar
// abstract class FormaBase implements FormaGeometrica {
//     abstract calcularArea(): number;
//     abstract calcularPerimetro(): number;
// }

export class Geometria {
    constructor(private forma: FormaGeometrica){
    }
    area(){
        return this.forma.calcularArea();
    }
    perimetro(){
        return this.forma.calcularPerimetro();
    }
}

// Clase para círculos
export class Circulo implements FormaGeometrica {
    // radio: number;

    constructor(private radio: number) {
        // this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

// Clase para rectángulos
export class Rectangulo implements FormaGeometrica {
    // base: number;
    // altura: number;

    constructor(private base: number, private altura: number) {
        // this.base = base;
        // this.altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.base + this.altura);
    }
}

// Clase para triángulos
export class Triangulo implements FormaGeometrica {
    // private base: number;
    // private altura: number;

    constructor(private base: number, private altura: number) {
        // this.base = base;
        // this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro(): number {
        // En este ejemplo, asumimos que es un triángulo rectángulo.
        const hipotenusa = Math.sqrt(this.base * this.base + this.altura * this.altura);
        return this.base + this.altura + hipotenusa;
    }
}

// ejemplo de uso // copiar en index.ts
// const circulo = new Circulo(5);
// const rectangulo = new Rectangulo(4, 6);
// const triangulo = new Triangulo(3, 4);

// console.log("Círculo:");
// console.log("Área:", circulo.calcularArea());
// console.log("Perímetro:", circulo.calcularPerimetro());

// console.log("\nRectángulo:");
// console.log("Área:", rectangulo.calcularArea());
// console.log("Perímetro:", rectangulo.calcularPerimetro());

// console.log("\nTriángulo:");
// console.log("Área:", triangulo.calcularArea());
// console.log("Perímetro:", triangulo.calcularPerimetro());
