import { v4 as uuidv4 } from 'uuid';//npm i uuid && npm i @types/uuid

export class Libro {
    private id: string = uuidv4();
    private availability: boolean = true;
    constructor(private tittle: string, private author: string) {}
    getId(): string {
        return this.id;
    }
    getTittle(): string {
        return this.tittle;
    }
    getAvailability(): boolean {
        return this.availability;
    }
    setBorrowed(): void {
        this.availability = !this.availability;
    }
}

export class Biblioteca {
    lista: Libro[] = [];

    constructor() {
        this.lista = [];
    }

    addBook(libro:any): void {
        this.lista.push(libro);
    }

    getBook(bookId:string): Array<Libro> {
        return this.lista.filter((libro) => libro.getId() === bookId);
    }

    borrowed(bookId: string): void {
        const libro = this.lista.find((libro) => libro.getId() === bookId);
        if(!libro){
            return console.log("No poseemos el libro");
        }
        
        if (libro.getAvailability()) {
            console.log(`El libro ${libro.getTittle()} ha sido prestado`);
            return libro.setBorrowed();
        }
        return console.log("El Libro ya fue prestado");
    }
    returnIt(bookId: string): void {
        const libro = this.lista.find((libro) => libro.getId() === bookId);
        if(!libro){
            return console.log("No poseemos el libro");
        }

        if (!libro.getAvailability()) {
            console.log("Libro devuelto");
            return libro.setBorrowed();
        }
        return console.log(`No se puede devolver el libro ${libro.getTittle()}`);
    }
}

// Ejemplo de uso
// const libro1 = new Libro("harry potter","JKR")
// const libro2 = new Libro("harry potter 2","JKR")

// const biblioteca = new Biblioteca()

// biblioteca.addBook(libro1)
// biblioteca.addBook(libro2)

// console.log(biblioteca);

// biblioteca.borrowed(libro1.getId())

// biblioteca.borrowed(libro1.getId())

// console.log(biblioteca);

// biblioteca.returnIt(libro2.getId())