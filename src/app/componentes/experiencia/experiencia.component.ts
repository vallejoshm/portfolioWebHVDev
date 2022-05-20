import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia/experiencia.service';
import { ModalNuevaEduComponent } from '../modal-nueva-edu/modal-nueva-edu.component';
import { ModalNuevaExpComponent } from '../modal-nueva-exp/modal-nueva-exp.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  mostrar: boolean = true;
  listaExperiencia: Experiencia[]= [];
  unaExp!: Experiencia;


  constructor(private _servicioExp: ExperienciaService, public dialog: MatDialog,
      private toastr: ToastrService, private router: Router) { }
   

  ngOnInit(): void {
    this.obtenerListaExp();
  }

  openDialog(id: number){
    const accion = String(id);
    const dialogRef = this.dialog.open(ModalNuevaExpComponent,
      {
        data:accion
      });
    dialogRef.afterClosed().subscribe(
      data => {
        this.obtenerListaExp();
      }
    );
  }
  

  obtenerListaExp(){
    this._servicioExp.obtenerExperiencia().subscribe(
      data => this.listaExperiencia = data
    )
  }

  obtenerUna(exp: Experiencia){
    this.listaExperiencia.forEach(element => {
      if (Object.is(element, exp))
        this.unaExp = element;
    });
    this.mostrar = !this.mostrar;
    
    this.obtenerListaExp();
  }

  eliminarExp(exp:Experiencia){
    this._servicioExp.eliminarExperiencia(exp).subscribe(
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
    return this.toastr.success('Elemento Educacion Eliminado', 'Ok', {
      timeOut: 2000
    }), this.ngOnInit();

  }





}
