import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-nueva-edu',
  templateUrl: './modal-nueva-edu.component.html',
  styleUrls: ['./modal-nueva-edu.component.css'],
})
export class ModalNuevaEduComponent implements OnInit {

  ide!: number;
  opcion!: string;
  avanceSi: boolean = true;
  finalizada: string = 'Finalizada';
  enCurso: string = 'En curso';
  nombreCarrera!: string;
  descripcion!: string;
  avanceCarr!: number;
  nombreInstitucion!: string;
  direccion!: string;
  telefono!: string;
  paginaWeb!: string;
  fechaInicio!: string;
  fechaFin!: string;
  nuevaEdu: any;
  titulo: string = '';
  nombreBoton: string = '';
  dato!: string;
  editar: boolean = false;

  constructor(public dialogRef: MatDialogRef<ModalNuevaEduComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private _eduServ: EducacionService, private toastr: ToastrService, private router: Router) {
    this.dato = data;
  }

  crearNuevaEdu() {
    if (this.dato == '-1') {
      this.crear();
      this.persistirNuevo(this.nuevaEdu);
    } else {
      this.crear();
      if(this.editar)this.persistirEdicion(this.nuevaEdu, Number(this.dato));
    }
  }

  crear() {
    this.nuevaEdu = new Educacion(this.ide, this.opcion, this.nombreCarrera, this.avanceCarr,
      this.descripcion, this.nombreInstitucion, this.direccion, this.telefono, this.paginaWeb,
       this.fechaInicio, this.fechaFin);
  }
  
  persistirNuevo(edu: Educacion) {
    this._eduServ.nuevaEducacion(this.nuevaEdu).subscribe(
      data => {
        this.toastr.success('Elemento Educacion Creado', 'Ok', {
          timeOut: 2000
        }), this.router.navigate(['inicio'])

      },
      err => {
        this.toastr.error(err.error.Mensaje, 'No Se ha agregado el elemento', {
          timeOut: 2000
        }),
          this.router.navigate(['inicio'])
      }
    );
  }
  persistirEdicion(edu: Educacion, id: number) {
    this._eduServ.editarEducacion(this.nuevaEdu, id).subscribe(
      data => {
        this.toastr.success('Elemento Educacion Editado', 'Ok', {
          timeOut: 2000
        }), this.router.navigate(['inicio'])

      },
      err => {
        this.toastr.error(err.error.Mensaje, 'No Se ha editado el elemento', {
          timeOut: 2000
        }),
          this.router.navigate(['inicio'])
      }
    );
  }

  estado() {
    let avance = 0;
    if (!this.avanceSi) avance = 100;
    this.avanceCarr = avance;
    return avance;
  }

  ngOnInit(): void {

    if (this.dato == '-1') {
      this.titulo = 'Crear Nuevo Item Educacion';
      this.nombreBoton = 'Crear';
    } else {
      this._eduServ.obtenerUnaServ(Number(this.dato)).subscribe(resp => {  
        this.opcion = resp.status;
        this.nombreCarrera = resp.titulo;
        this.descripcion = resp.descripCarrera;
        this.avanceCarr = resp.avance;
        this.nombreInstitucion = resp.nombre;
        this.direccion = resp.direccion;
        this.telefono = resp.telefono;
        this.paginaWeb = resp.paginaWeb;
        this.fechaInicio = resp.fechaInicio;
        this.fechaFin = resp.fechaFin;  
      });  
    this.titulo = 'Editar Item Educacion';
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
  this.opcion = (ev.source.selected as MatOption).viewValue;
  if(this.opcion == this.finalizada) {
  this.avanceSi = false;
  this.avanceCarr = this.estado();
} else if (this.opcion == this.enCurso) {
  this.avanceSi = true;
}
  
  }

}

