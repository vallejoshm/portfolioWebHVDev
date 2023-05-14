export class Experiencia {

    id: number;
    logo: string;
    trabajoActual: boolean;
    nombreEmpresa: string;
    cargo: string;
    descripTareas: string;
    direccion: string;
    telefono: string;
    paginaWeb: string;
    fechaInicio: string;
    fechaFin: string;


    constructor(id: number, trabajoActual: boolean, nombreEmpresa: string, cargo: string, descripTareas: string,
        direccion: string, telefono: string, paginaWeb: string,
        fechaInicio: string, fechaFin: string) {
        this.id = id;
        this.trabajoActual = trabajoActual;
        this.nombreEmpresa = nombreEmpresa;
        this.cargo = cargo;
        this.descripTareas = descripTareas;
        this.direccion = direccion;
        this.telefono = telefono;
        this.paginaWeb = paginaWeb;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.logo = nombreEmpresa;
    }


}