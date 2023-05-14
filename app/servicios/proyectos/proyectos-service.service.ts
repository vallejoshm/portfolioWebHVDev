import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/modelos/proyecto';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyectoURL= environment.proyectoURL;

  constructor(private httpClient: HttpClient) { }

  obtenerProyectos(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.proyectoURL + 'traerlistaproyecto');
  }
  obtenerUnaServ(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proyectoURL + `traerunproyecto/${id}`);
  }
  nuevoProyecto(pro: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.proyectoURL + 'nuevoproyecto', pro);
  }
  eliminarProyecto(pro: Proyecto): Observable<Proyecto> {
    return this.httpClient.delete<Proyecto>(this.proyectoURL + `eliminarproyecto/${pro.id}`);
  }
  editarProyecto(pro: Proyecto, id: number): Observable<Proyecto> {
    return this.httpClient.put<Proyecto>(this.proyectoURL + `editarproyecto/${id}`, pro);
  }
}
