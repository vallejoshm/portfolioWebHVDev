import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/modelos/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionURL = 'http://localhost:8080/'
  constructor(private httpClient: HttpClient) { }

  obtenerEducacion(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.educacionURL + 'traerlistaeducacion');
  }
  // obtenerUnaServ(edu:Educacion): Observable<any> {
  //   return this.httpClient.get<Educacion>(this.educacionURL + `traerunaeducacion/${edu}`);
  // }
  nuevaEducacion(edu: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.educacionURL + 'nuevaeducacion', edu);
  }
  eliminarEducacion(edu: Educacion): Observable<Educacion>{
    return this.httpClient.delete<Educacion>(this.educacionURL + `eliminareducacion/${edu.id}`)
  }
}
