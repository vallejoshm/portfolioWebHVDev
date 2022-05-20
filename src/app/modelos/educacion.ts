
export class Educacion {

    id: number;
    status: string;
    titulo: string;
    avance: number;
    nombre: string;
    direccion: string;
    telefono: string;
    paginaWeb: string;
    descripCarrera: string;
    fechaInicio: string;
    fechaFin: string;


    constructor(id: number, status: string, titulo: string, avance: number, descripCarrera: string,
        nombre: string, direccion: string, telefono: string, paginaWeb: string,
        fechaInicio: string, fechaFin: string) {
        this.id = id;
        this.status = status;
        this.titulo = titulo;
        this.avance = avance;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.paginaWeb = paginaWeb;
        this.descripCarrera = descripCarrera;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    

}
