import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadesService } from 'src/app/servicios/habilidades/habilidades.service';
import { ModalNuevaSkillComponent } from '../modal-nueva-skill/modal-nueva-skill.component';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { ErrorServiceService } from 'src/app/servicios/autenticacion/error-service';
import { TokenService } from 'src/app/servicios/autenticacion/token.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  listaHabilidades: Habilidad[] = [];
  mostrar: boolean = false;
  id: number = 0;
  progresoString!: string;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 0;
  verDescripcion: boolean = true;
  descrip!: string;
  descripNombre!: string;

  constructor(private _servicioHabil: HabilidadesService, public dialog: MatDialog,
    private toastr: ToastrService, private router: Router, private tokenService: TokenService,
    private errorService: ErrorServiceService) { }

  colorGet(tipo: string) {
    if (tipo == 'Hard') {
      this.color = 'warn';
    } else {
      this.color = 'primary';
    }
    return this.color;
  }
  valueGet(progreso: number) {
    this.value = progreso;
    if (progreso == 25) this.progresoString = 'Principiante';
    else if (progreso == 50) this.progresoString = 'Intermedio';
    else if (progreso == 75) this.progresoString = 'Avanzado';
    else if (progreso == 100) this.progresoString = 'Experto';
    return this.value;
  }

  ngOnInit(): void {
    this.obtenerListaHab();
  }

  obtenerListaHab() {
    this._servicioHabil.obtenerTodos().subscribe(
      data => this.listaHabilidades = data
    )
  }

  eliminarHab(hab: Habilidad) {
    if (this.tokenService.isAdmin()) {
      this._servicioHabil.eliminarHabilidad(hab).subscribe(
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
    return this.toastr.success('Elemento Habilidad Eliminado', 'Ok', {
      timeOut: 2000
    }), this.ngOnInit();

  }

  verDescrip(habil: Habilidad) {
    this.verDescripcion = !this.verDescripcion;
    this.listaHabilidades.forEach(hab => {
      if (hab.id == habil.id) {
        this.descrip = hab.descripcion;
        this.descripNombre = hab.nombre;
      }
    })
  }

  noDescrip() {
    this.verDescripcion = !this.verDescripcion;
  }

  openDialog(id: number) {
    if (this.tokenService.isAdmin()) {
      const accion = String(id);
      const dialogRef = this.dialog.open(ModalNuevaSkillComponent,
        {
          data: accion
        })
      dialogRef.afterClosed().subscribe(
        data => {
          this.ngOnInit();
        }
      );
    } else {
      this.errorService.show(403);
    }
  }

}
