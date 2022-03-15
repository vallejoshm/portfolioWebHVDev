
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  softSkills : any = [
    {
      tipo: 'soft',
      skill: 'habilidad soft',
      descripcion:'algo de la habilidad 0'     
    },
    {
      tipo: 'soft',
      skill: 'habilidad soft',
      descripcion:'algo de la habilidad 1'     
    },
    {
      tipo: 'soft',
      skill: 'habilidad soft',
      descripcion:'algo de la habilidad 2'     
    },
    {
      tipo: 'soft',
      skill: 'habilidad soft',
      descripcion:'algo de la habilidad 3'     
    },
    {
      tipo: 'soft',
      skill: 'habilidad soft',
      descripcion:'algo de la habilidad 4'     
    },
    {
      tipo: 'soft',
      skill: 'habilidad soft',
      descripcion:'algo de la habilidad 5'
    },
    {
      tipo: 'hard',
      skill: 'habilidad hard',
      descripcion:'algo de la habilidad 6'
    },
    {
      tipo: 'hard',
      skill: 'habilidad hard',
      descripcion:'algo de la habilidad 7'
    },
    {
      tipo: 'soft',
      skill: 'habilidad soft', 
      descripcion:'algo de la habilidad 8'
    },
    {
      tipo: 'hard',
      skill: 'habilidad hard',
      descripcion:'algo de la habilidad 9'
    },
    {
      tipo: 'soft',
      skill: 'habilidad soft',
      descripcion:'algo de la habilidad 10'     
    },
    {
      tipo: 'hard',
      skill: 'habilidad hard',
      descripcion:'algo de la habilidad 11'
    },{
      tipo: 'hard',
      skill: 'habilidad hard',
      descripcion:'algo de la habilidad 12'
    },
    {
      tipo: 'hard',
      skill: 'habilidad hard',
      descripcion:'algo de la habilidad 13'
    },
    {
      tipo: 'soft',
      skill: 'habilidad soft',
      descripcion:'algo de la habilidad 14'     
    }
  ];

  constructor() { }
  obtenerTodos(){
    return this.softSkills;
  }
}
