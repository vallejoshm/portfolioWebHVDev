
export class Habilidad {

    id: number;
    nombre: string;
    tipo: string;
    descripcion: string;
    progreso: number;

    constructor(id: number, nombre: string, tipo: string, descripcion: string, progreso: number) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.progreso = progreso;
    }

}