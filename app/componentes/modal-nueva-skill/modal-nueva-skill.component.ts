import { Component, Inject, OnInit } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habilidad } from 'src/app/modelos/habilidad';
import { ExperienciaService } from 'src/app/servicios/experiencia/experiencia.service';
import { HabilidadesService } from 'src/app/servicios/habilidades/habilidades.service';

@Component({
  selector: 'app-modal-nueva-skill',
  templateUrl: './modal-nueva-skill.component.html',
  styleUrls: ['./modal-nueva-skill.component.css']
})
export class ModalNuevaSkillComponent implements OnInit {

  ide!: number;
  opcionTipo!: string;
  opcionProg!: string;
  hard: string = 'Hard';
  soft: string = 'Soft';
  descripcion!: string;
  tipo!: string;
  nombre!: string;
  progreso!: number;
  principiante: string = 'Principiante';
  intermedio: string = 'Intermedio';
  avanzado: string = 'Avanzado';
  experto: string = 'Experto';
  nuevaHab!: any;
  titulo: string = '';
  nombreBoton: string = '';
  dato!: string;
  editar: boolean = false;

  constructor(public dialogRef: MatDialogRef<ModalNuevaSkillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private _habServ: HabilidadesService, private toastr: ToastrService, private router: Router) {
    this.dato = data;
  }

  crearNuevaExp() {
    if (this.dato == '-1') {
      this.crear();
      this.persistirNuevo(this.nuevaHab);
    } else {
      this.crear();
      if (this.editar)this.persistirEdicion(this.nuevaHab, Number(this.dato));
    }
  }

  crear() {
    this.nuevaHab = new Habilidad(this.ide, this.nombre, this.tipo, this.descripcion, this.progreso);
  }

  persistirNuevo(hab: Habilidad) {
    this._habServ.nuevaHabilidad(this.nuevaHab).subscribe(
      data => {
        this.toastr.success('Elemento Habilidad Creado', 'Ok', {
          timeOut: 2000
        }), this.ngOnInit()

      },
      err => {
        this.toastr.error(err.error.Mensaje, 'No Se ha agregado el elemento', {
          timeOut: 2000
        }),
          this.router.navigate(['inicio'])
      }
    );
  }
  persistirEdicion(hab: Habilidad, id: number) {
    this._habServ.editarHabilidad(this.nuevaHab, id).subscribe(
      data => {
        this.toastr.success('Elemento Habilidad Editado', 'Ok', {
          timeOut: 2000
        }), this.ngOnInit()

      },
      err => {
        this.toastr.error(err.error.Mensaje, 'No Se ha editado el elemento', {
          timeOut: 2000
        }),
          this.router.navigate(['inicio'])
      }
    );
  }

  ngOnInit(): void {

    if (this.dato == '-1') {
      this.titulo = 'Crear Nuevo Item Habilidades';
      this.nombreBoton = 'Crear';
    } else {
      this._habServ.obtenerUna(Number(this.dato)).subscribe(resp => {
        this.nombre = resp.nombre;
        this.tipo = resp.tipo;
        this.descripcion = resp.descripcion;
        this.progreso = resp.progreso;
      });
      this.titulo = 'Editar Item Experiencia';
      this.nombreBoton = 'Editar';
    }
  }

  onClickSi(): void {
    this.editar = true;
  }

  onClickNo(): void {
    this.editar = false;
    this.dialogRef.close();
    this.toastr.error( 'No Se ha editado el elemento')
  }

  opcionElegida(ev: MatSelectChange): void {
    this.opcionTipo = (ev.source.selected as MatOption).viewValue;
    if (this.opcionTipo == this.hard) {
      this.tipo = 'Hard';
    } else if (this.opcionTipo == this.soft) {
      this.tipo = 'Soft';
    }
  }
  opcionProgreso(ev: MatSelectChange): void {
    this.opcionProg= (ev.source.selected as MatOption).viewValue;
    if (this.opcionProg == this.principiante) {
      this.progreso = 25;
    } else if (this.opcionProg == this.intermedio) {
      this.progreso = 50;
    }else if (this.opcionProg == this.avanzado) {
      this.progreso = 75;
    }else if (this.opcionProg == this.experto) {
      this.progreso = 100;
    }
  }

}
