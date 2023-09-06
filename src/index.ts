import { ListaDeTareas } from "./tareas";
import { Circulo,Rectangulo,Triangulo } from "./calculadora"
import { Biblioteca,Libro } from "./Libros";
import { Perro } from "./Mascota";

function main () {
  console.log('hello world')
}

main()

const perro = new Perro(`Pepita`)

perro.jugar();
perro.jugar();
perro.jugar();

console.log(perro);
console.log(perro.hablar());
