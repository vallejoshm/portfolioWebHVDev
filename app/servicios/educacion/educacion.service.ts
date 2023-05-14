import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/modelos/educacion';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionURL = environment.educacionURL;
  constructor(private httpClient: HttpClient) { }

  obtenerEducacion(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.educacionURL + 'traerlistaeducacion');
  }
   obtenerUnaServ(id: number): Observable<Educacion> {
     return this.httpClient.get<Educacion>(this.educacionURL + `traerunaeducacion/${id}`);
   }
  nuevaEducacion(edu: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.educacionURL + 'nuevaeducacion', edu);
  }
  eliminarEducacion(edu: Educacion): Observable<Educacion>{
    return this.httpClient.delete<Educacion>(this.educacionURL + `eliminareducacion/${edu.id}`);
  }
  editarEducacion(edu: Educacion, id: number): Observable<Educacion> {
    return this.httpClient.put<Educacion>(this.educacionURL + `editareducacion/${id}`,edu);
  }
}
