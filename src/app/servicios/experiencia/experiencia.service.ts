import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/modelos/experiencia';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaURL = environment.experienciaURL;
  constructor(private httpClient: HttpClient) { }

  obtenerExperiencia(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.experienciaURL + 'traerlistaexperiencia');
  }
  obtenerUnaServ(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.experienciaURL + `traerunaexperiencia/${id}`);
  }
  nuevaExperiencia(exp: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.experienciaURL + 'nuevaexperiencia', exp);
  }
  eliminarExperiencia(exp: Experiencia): Observable<Experiencia> {
    return this.httpClient.delete<Experiencia>(this.experienciaURL + `eliminarexperiencia/${exp.id}`);
  }
  editarExperiencia(exp: Experiencia, id: number): Observable<Experiencia> {
    return this.httpClient.put<Experiencia>(this.experienciaURL + `editarexperiencia/${id}`, exp);
  }
}