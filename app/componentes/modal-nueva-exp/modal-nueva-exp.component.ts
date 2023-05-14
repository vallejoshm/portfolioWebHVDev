import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia/experiencia.service';
import { Experiencia } from 'src/app/modelos/experiencia';
@Component({
  selector: 'app-modal-nueva-exp',
  templateUrl: './modal-nueva-exp.component.html',
  styleUrls: ['./modal-nueva-exp.component.css']
})
export class ModalNuevaExpComponent implements OnInit {

  ide!: number;
  opcion!: string;
  trabajoActual: boolean = true;
  actual: string = 'Si';
  noActual: string = 'No';
  descripTareas!: string;
  nombreEmpresa!: string;
  direccion!: string;
  telefono!: string;
  paginaWeb!: string;
  fechaInicio!: string;
  fechaFin!: string;
  nuevaExp: any;
  cargo!: string;
  titulo: string = '';
  nombreBoton: string = '';
  dato!: string;
  editar:boolean = false;

  constructor(public dialogRef: MatDialogRef<ModalNuevaExpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private _expServ: ExperienciaService, private toastr: ToastrService, private router: Router) {
    this.dato = data;
  }

  crearNuevaExp() {
    if (this.dato == '-1') {
      this.crear();
      this.persistirNuevo(this.nuevaExp);
    } else {
      this.crear();
      if (this.editar)this.persistirEdicion(this.nuevaExp, Number(this.dato));
    }
  }

  crear() {
    this.nuevaExp = new Experiencia(this.ide, this.trabajoActual, this.nombreEmpresa, this.cargo, this.descripTareas,
       this.direccion, this.telefono, this.paginaWeb, this.fechaInicio, this.fechaFin);
  }
  
  persistirNuevo(edu: Educacion) {
    this._expServ.nuevaExperiencia(this.nuevaExp).subscribe(
      data => {
        this.toastr.success('Elemento Experiencia Creado', 'Ok', {
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
  persistirEdicion(exp: Experiencia, id: number) {
    this._expServ.editarExperiencia(this.nuevaExp, id).subscribe(
      data => {
        this.toastr.success('Elemento Experiencia Editado', 'Ok', {
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

  ngOnInit(): void {

    if (this.dato == '-1') {
      this.titulo = 'Crear Nuevo Item Experiencia';
      this.nombreBoton = 'Crear';
    } else {
      this._expServ.obtenerUnaServ(Number(this.dato)).subscribe(resp => {  
        this.cargo = resp.cargo;
        this.descripTareas = resp.descripTareas;
        this.nombreEmpresa = resp.nombreEmpresa;
        this.direccion = resp.direccion;
        this.telefono = resp.telefono;
        this.paginaWeb = resp.paginaWeb;
        this.fechaInicio = resp.fechaInicio;
        this.fechaFin = resp.fechaFin; 
       
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
  this.opcion = (ev.source.selected as MatOption).viewValue;
  if(this.opcion == this.actual) {
  this.trabajoActual = true;
} else if (this.opcion == this.noActual) {
  this.trabajoActual = false;
}
  }
}
