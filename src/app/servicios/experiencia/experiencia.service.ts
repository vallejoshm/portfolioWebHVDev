import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  descripExperiencia: any = [

    {
      logo: 'logo ungs.png',
      empresa: 'Universidad Nacional de General Sarmiento',//este dato esta repetido
      cargo: 'Supervisor de mantenimiento',
      tareas: 'Reparación, mantenimiento e instalación de equipos de climatización individuales y centrales. Supervisión de auxiliares de mantenimiento para realizar las tareas mencionadas capacitando al personal y coordinando con otras áreas y dependencias.',
      datos: {
        nombre: 'Universidad Nacional de General Sarmiento',
        direccion: 'Juan Maria Gutierrez 1150, Los Polvorines, Malvinas Argentinas, Buenos Aires, Argentina',
        telefono: '011 4669 7500',
        web:'https://www.ungs.edu.ar/'        
      }
    },
    {
      logo: 'logo victor.png',
      empresa: 'Victor Jr Bar Universitario',
      cargo: 'Mozo Mostrador',
      tareas: 'cajero; atención al público general de la Universidad; asistencia en la organización de eventos de la Universidad; reposición de mercadería y control de stock.',
      datos: {
        nombre: 'Victor Jr Bar Universitario',
        direccion: 'Juan Maria Gutierrez 1150, Los Polvorines, Malvinas Argentinas, Buenos Aires, Argentina',
        telefono: '011 4669 7510',
        web:'https://victor-bar-meal-delivery.negocio.site/?utm_source=gmb&utm_medium=referral'        
      }
    },
    {
      logo: 'logo aires.png',
      empresa: 'Trabajo independiente',
      cargo: 'Técnico de equipos de climatización',
      tareas: 'Reparación, mantenimiento e instalación de equipos de climatización individuales y centrales.',
      datos: {
        nombre: 'Victor Jr Bar Universitario',
        direccion: 'Juan Maria Gutierrez 1150, Los Polvorines, Malvinas Argentinas, Buenos Aires, Argentina',
        telefono: '011 4669 7510',
        web:'https://victor-bar-meal-delivery.negocio.site/?utm_source=gmb&utm_medium=referral'        
      }
    }
  ];


  constructor() { }

  obtenerExp() {
    return this.descripExperiencia;
  }
  obtenerUnaExp(i: any){
    return this.descripExperiencia[i];
  }
}



