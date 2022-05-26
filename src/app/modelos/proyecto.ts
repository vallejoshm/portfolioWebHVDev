export class Proyecto {
    id: number;
    nombre: string;
    subtitulo: string;
    descripcion: string;
    imagenes: string[];
    stack: string[];
    link: string;
    creacion: string
    creacionFin: string;

    constructor(id: number, nombre: string, subtitulo: string, descripcion: string, imagenes: string[],
         stack: string[], link: string, creacion: string, creacionFin: string) {
        this.id = id;
        this.nombre = nombre;
        this.subtitulo = subtitulo;
        this.descripcion = descripcion;
        this.imagenes = imagenes;
        this.stack = stack;
        this.link = link;
        this.creacion = creacion;
        this.creacionFin = creacionFin;
    }
}
