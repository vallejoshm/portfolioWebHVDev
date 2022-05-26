import { Component, Inject, OnInit } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectosService } from 'src/app/servicios/proyectos/proyectos-service.service';

@Component({
  selector: 'app-modal-nuevo-proyecto',
  templateUrl: './modal-nuevo-proyecto.component.html',
  styleUrls: ['./modal-nuevo-proyecto.component.css']
})
export class ModalNuevoProyectoComponent implements OnInit {

  ide!: number;
  stack: string[] = [];
  imagenes: string[] = [];
  finalizado: string = 'Si';
  noFinalizado: string = 'No';
  descripcion!: string;
  nombre!: string;
  link!: string;
  creacion!: string;
  creacionFin!: string;
  nuevoProy: any;
  subtitulo!: string;
  titulo: string = '';
  nombreBoton: string = '';
  dato!: string;
  editar:boolean = false;
  opcion!: string;
  fin:boolean = false;

  constructor(public dialogRef: MatDialogRef<ModalNuevoProyectoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private _proyService: ProyectosService, private toastr: ToastrService, private router: Router) {
    this.dato = data;
  }

  agregar(item: string, tipo: string): void {
    if(tipo == 'img'){
      this.imagenes.push(item);
    }else if (tipo == 'stk'){
       this.stack.push(item);
    }
  }

  crearNuevoProy() {
    if (this.dato == '-1') {
      this.crear();
      this.persistirNuevo(this.nuevoProy);
    } else {
      this.crear();
      if (this.editar)this.persistirEdicion(this.nuevoProy, Number(this.dato));
    }
  }

  crear() {
    this.nuevoProy = new Proyecto(this.ide, this.nombre, this.subtitulo, this.descripcion, this.imagenes,
       this.stack, this.link, this.creacion, this.creacionFin);
  }
  
  persistirNuevo(proy: Proyecto) {
    this._proyService.nuevoProyecto(this.nuevoProy).subscribe(
      data => {
        this.toastr.success('Elemento Creado', 'Ok', {
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
  persistirEdicion(proy: Proyecto, id: number) {
    this._proyService.editarProyecto(this.nuevoProy, id).subscribe(
      data => {
        this.toastr.success('Elemento Editado', 'Ok', {
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
      this.titulo = 'Crear Nuevo Proyecto';
      this.nombreBoton = 'Crear';
    } else {
      this._proyService.obtenerUnaServ(Number(this.dato)).subscribe(resp => {  
        this.nombre = resp.nombre;
        this.subtitulo = resp.subtitulo;
        this.descripcion = resp.descripcion;
        this.imagenes = resp.imagenes;
        this.stack = resp.stack;
        this.link = resp.link;
        this.creacion = resp.creacion;
        this.creacionFin = resp.creacionFin; 
      });  
    this.titulo = 'Editar Proyecto';
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
   if(this.opcion == this.finalizado) {
   this.fin = true;
 } else if (this.opcion == this.noFinalizado) {
   this.fin = false;
 }
  }
}
