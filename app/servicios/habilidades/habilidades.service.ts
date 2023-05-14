
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from 'src/app/modelos/habilidad';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  habilidadesURL = environment.habilidadesURL;

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
