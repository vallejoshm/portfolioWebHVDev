import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadesService } from 'src/app/servicios/habilidades/habilidades.service';
import { ModalNuevaSkillComponent } from '../modal-nueva-skill/modal-nueva-skill.component';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';


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

  constructor(private _servicioHabil: HabilidadesService, public dialog: MatDialog,
    private toastr: ToastrService, private router: Router) {}

  colorGet(tipo: string){
    if(tipo == 'Hard'){
      this.color = 'warn';
    }else{
      this.color = 'primary';
    }
    return this.color;
  }
  valueGet(progreso: number){
      this.value = progreso;
      if (progreso==25) this.progresoString = 'Principiante';
      else if (progreso==50) this.progresoString = 'Intermedio';
      else if (progreso==75) this.progresoString = 'Avanzado';
      else if (progreso==100) this.progresoString = 'Experto';
      return this.value;
  }

  // mostrarDescripcion(i: number, tipoHabil: string, event: Event) {
  //   this.id = i;
  //   this.mostrar = true;
  //   if (tipoHabil == "soft") {
  //     (<SVGSVGElement>event.target).style.color = "rgb(53,53,175)";
  //   } else {
  //     (<SVGSVGElement>event.target).style.color = "rgb(238,53,53)";
  //   }


  // }

  ngOnInit(): void {
    this.obtenerListaHab();
  }

  obtenerListaHab(){
    this._servicioHabil.obtenerTodos().subscribe(
      data => this.listaHabilidades = data
    )
  }

  eliminarHab(hab: Habilidad){
    this._servicioHabil.eliminarHabilidad(hab).subscribe(
      data => {
        this.eliminado(), (err: { error: { Mensaje: string | undefined; }; }) => {
          this.toastr.error(err.error.Mensaje, 'No Se ha Eliminado el elemento', {
            timeOut: 2000
          })
        }
      }
    )
  }

  eliminado() {
    return this.toastr.success('Elemento Habilidad Eliminado', 'Ok', {
      timeOut: 2000
    }), this.ngOnInit();

  }

  openDialog(id: number) {
    const accion = String(id);
    const dialogRef = this.dialog.open(ModalNuevaSkillComponent,
      {
        data:accion
      })
    dialogRef.afterClosed().subscribe(
      data => {
        this.ngOnInit();
      }
    );

  }

}
