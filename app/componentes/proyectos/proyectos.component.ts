import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectosService } from 'src/app/servicios/proyectos/proyectos-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalNuevoProyectoComponent } from '../modal-nuevo-proyecto/modal-nuevo-proyecto.component';
import { ErrorServiceService } from 'src/app/servicios/autenticacion/error-service';
import { TokenService } from 'src/app/servicios/autenticacion/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  mostrar: boolean = true;
  listaProy: Proyecto[] = [];

  constructor(public dialog: MatDialog, private _proyService: ProyectosService, private toastr: ToastrService,
    private router: Router, private tokenService: TokenService, private errorService: ErrorServiceService) { }

  ngOnInit(): void {
    this.traerListaProy();
  }

  traerListaProy() {
    this._proyService.obtenerProyectos().subscribe(
      data => this.listaProy = data
    )
  }

  mostrarDetalle(): void {
    this.mostrar = !this.mostrar;
  }

  openDialog(id: number) {
    if (this.tokenService.isAdmin()) {
      const accion = String(id);
      const dialogRef = this.dialog.open(ModalNuevoProyectoComponent,
        {
          data: accion
        });
      dialogRef.afterClosed().subscribe(
        data => {
          this.ngOnInit();
        }
      );
    } else {
      this.errorService.show(403);
    }
  }

  eliminarHab(proy: Proyecto) {
    if (this.tokenService.isAdmin()) {
      this._proyService.eliminarProyecto(proy).subscribe(
        data => {
          this.eliminado(), (err: { error: { Mensaje: string | undefined; }; }) => {
            this.toastr.error(err.error.Mensaje, 'No Se ha Eliminado el elemento', {
              timeOut: 2000
            })
          }
        }
      )
    } else {
      this.errorService.show(403);
    }
  }

  eliminado() {
    return this.toastr.success('Elemento Proyecto Eliminado', 'Ok', {
      timeOut: 2000
    }), this.ngOnInit();

  }

}
