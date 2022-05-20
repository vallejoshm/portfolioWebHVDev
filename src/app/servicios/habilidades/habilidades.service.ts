
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from 'src/app/modelos/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  // softSkills : any = [
  //   {
  //     tipo: 'soft',
  //     skill: 'habilidad soft',
  //     descripcion:'algo de la habilidad 0'     
  //   },
  //   {
  //     tipo: 'soft',
  //     skill: 'habilidad soft',
  //     descripcion:'algo de la habilidad 1'     
  //   },
  //   {
  //     tipo: 'soft',
  //     skill: 'habilidad soft',
  //     descripcion:'algo de la habilidad 2'     
  //   },
  //   {
  //     tipo: 'soft',
  //     skill: 'habilidad soft',
  //     descripcion:'algo de la habilidad 3'     
  //   },
  //   {
  //     tipo: 'soft',
  //     skill: 'habilidad soft',
  //     descripcion:'algo de la habilidad 4'     
  //   },
  //   {
  //     tipo: 'soft',
  //     skill: 'habilidad soft',
  //     descripcion:'algo de la habilidad 5'
  //   },
  //   {
  //     tipo: 'hard',
  //     skill: 'habilidad hard',
  //     descripcion:'algo de la habilidad 6'
  //   },
  //   {
  //     tipo: 'hard',
  //     skill: 'habilidad hard',
  //     descripcion:'algo de la habilidad 7'
  //   },
  //   {
  //     tipo: 'soft',
  //     skill: 'habilidad soft', 
  //     descripcion:'algo de la habilidad 8'
  //   },
  //   {
  //     tipo: 'hard',
  //     skill: 'habilidad hard',
  //     descripcion:'algo de la habilidad 9'
  //   },
  //   {
  //     tipo: 'soft',
  //     skill: 'habilidad soft',
  //     descripcion:'algo de la habilidad 10'     
  //   },
  //   {
  //     tipo: 'hard',
  //     skill: 'habilidad hard',
  //     descripcion:'algo de la habilidad 11'
  //   },{
  //     tipo: 'hard',
  //     skill: 'habilidad hard',
  //     descripcion:'algo de la habilidad 12'
  //   },
  //   {
  //     tipo: 'hard',
  //     skill: 'habilidad hard',
  //     descripcion:'algo de la habilidad 13'
  //   },
  //   {
  //     tipo: 'soft',
  //     skill: 'habilidad soft',
  //     descripcion:'algo de la habilidad 14'     
  //   }
  // ];
  habilidadesURL = 'http://localhost:8080/'

  constructor(private httpClient: HttpClient) { }

  obtenerTodos(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.habilidadesURL + 'traerlistahabilidades');
  }
  nuevaHabilidad(hab: Habilidad): Observable<Habilidad>{
    return this.httpClient.post<Habilidad>(this.habilidadesURL + 'nuevahabilidad',hab);
  }
  editarHabilidad(hab: Habilidad, id: number): Observable<Habilidad>{
    return this.httpClient.put<Habilidad>(this.habilidadesURL + `editarhabilidad/${id}`,hab);
  }
  obtenerUna(id: number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.habilidadesURL + `traerunahabilidad/${id}`);
  }
  eliminarHabilidad(hab: Habilidad): Observable<Habilidad> {
    return this.httpClient.delete<Habilidad>(this.habilidadesURL + `eliminarhabilidad/${hab.id}`);
  }
}
