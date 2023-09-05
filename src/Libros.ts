import { v4 as uuidv4 } from 'uuid';

export class Libro {
    private  id: string = uuidv4();
    constructor(private tittle: string, private author: string, private availability: boolean) {
    }
}

class listaDeLibros {
    libros: Libro[] = [];
    
    constructor(){
        this.libros = [];
    }
    borrowed(){
        
    }
    returnIt(){

    }
}