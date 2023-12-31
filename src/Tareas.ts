class Tarea {
  nombre: string;
  fechaVencimiento: Date;
  completada: boolean;

  constructor(nombre: string, fechaVencimiento: Date) {
    this.nombre = nombre;
    this.fechaVencimiento = fechaVencimiento;
    this.completada = false;
  }

  completar() {
    this.completada = true;
  }
}

export class ListaDeTareas {
  private tareas: Tarea[];

  constructor() {
    this.tareas = [];
  }

  agregarTarea(nombre: string, fechaVencimiento: Date) {
    const tarea = new Tarea(nombre, fechaVencimiento);
    this.tareas.push(tarea);
  }

  eliminarTarea(nombre: string) {
    const tareaIndex = this.tareas.findIndex(tarea => tarea.nombre === nombre);
    if (tareaIndex !== -1) {
      this.tareas.splice(tareaIndex, 1);
    }
  }

  listarTareas() {
    if(this.tareas.length === 0) {
      console.log("There is not tareas :(")
    } else {
      console.log("Lista de Tareas:");
      this.tareas.forEach((tarea, index) => {
        const estado = tarea.completada ? "Completada" : "Pendiente";
        console.log(`${index + 1}. ${tarea.nombre} - Fecha de Vencimiento: ${tarea.fechaVencimiento.toDateString()} - Estado: ${estado}`);
      });
    }
  }
}

// ejemplo de uso // copiar en index.ts
// const tarea1 = new Tarea("Hacer la tarea de matemáticas", new Date("2023-09-10"))
// const tarea2 = new Tarea("Comprar víveres", new Date("2023-09-08"))

// const listaTareas = new ListaDeTareas();

// listaTareas.agregarTarea(tarea1);
// listaTareas.agregarTarea(tarea2);

// listaTareas.listarTareas();

// listaTareas.tareas[0].completar();
// listaTareas.eliminarTarea("Comprar víveres");

// listaTareas.listarTareas();