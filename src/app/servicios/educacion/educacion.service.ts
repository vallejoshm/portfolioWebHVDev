import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  br:string="<br>";
  instEducativas: any =[
    {
      status: 'En curso',
      titulo: 'Tecnicatura Universitaria en Informática',
      avance: 22.2,
      descripcion:{
        subtitulo:'Quienes se egresen de la Tecnicatura Universitaria en Informática podrán:',
        descrip:' Desarrollar programas o componentes de programas informáticos, bajo la supervisión del líder del proyecto.La formación incluye el desarrollo de las capacidades técnicas necesarias para realizar tareas de codificación y testing de software, además de asistir al líder del proyecto en las actividades de análisis de requerimientos, especificación y diseño. A su vez, estará capacitado para intervenir en las restantes etapas del ciclo de vida del software ya que contará con conocimientos de ingeniería de software, metodologías de desarrollo y formalismos de especificación y diseño.',

      }, 
      logo: 'logo ungs.png',
      datos: {
        nombre: 'Universidad Nacional de General Sarmiento',
        direccion:'Juan Maria Gutierrez 1150, El Polvorines, Malvinas Argentinas, Buenos Aires, Argentina',
        telefono:'011 4669 7500',
        web: 'https://www.ungs.edu.ar/',
      }
    }
    ,
    {
      status: 'En curso',
      titulo: 'Curso de Desarrollo Web Full Stack, plan Argentina Programa',
      avance: 22.2,
      descripcion:{
        subtitulo:'Quienes finalicen el curso de Desarrollador Web Full Stack Tecnicatura Universitaria en Informática obtendrán:',
        descrip: ' certificación conjunta del Ministerio de Desarrollo Productivo, la Cámara de la Industria Argentina de Software(CESSI) y el Instituto Nacional de Tecnología Industrial de Desarrollador Web Full Stack Junior.',
      },
      logo: 'logo inti.png',
      datos: {
        nombre:'Ministerio de desarrollo productivo.',
        direccion:'Av. Pres. Julio A. Roca 651, CABA, Buenos Aires, Argentina',
        telefono:'',
        web: 'https://www.argentina.gob.ar/produccion',
      }
    },
    {
      status: 'En curso',
      titulo: 'Bachiller en Humanidades y Ciencias Sociales.',
      avance: 100,
      descripcion: 'General Don José de San Martín es un instituto de gestión privada, mixto, de jornada simple y de formación laica.',
      logo: 'logo isam.jpg',
      datos: {
        nombre: 'Instituto General Don José de San Martin',
        direccion:'Avellaneda 3128, Moreno , Mariano Moreno , Buenos Aires, Argentina',
        telefono:'0237.4686405',
        web: '',
      }
    }
  ];

  constructor() { }

  obtenerEducacion(){
    return this.instEducativas;
  }
  obtenerUna(i:number){
    return this.instEducativas[i];
  }
}
