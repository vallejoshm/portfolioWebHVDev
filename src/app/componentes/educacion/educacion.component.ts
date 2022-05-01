import { EducacionService } from 'src/app/servicios/educacion/educacion.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalNuevaEduComponent } from '../modal-nueva-edu/modal-nueva-edu.component';
import { Educacion } from 'src/app/modelos/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  listaEducacion: Educacion[] = [];
  mostrar: boolean = true;
  avanceSi: boolean = true;
  selected: string = '';
  unaEdu: any;

  constructor(public dialog: MatDialog, private _servicioEduc: EducacionService) { }


  obtenerUna(edu: Educacion) {
    this.listaEducacion.forEach(element => {
      if(Object.is(element,edu))
        this.unaEdu=element;
    });
    this.mostrar=!this.mostrar;
    this.obtenerLista();
  } 
  obtenerLista(){
    this._servicioEduc.obtenerEducacion().subscribe(listaEducacion => this.listaEducacion = listaEducacion);
  }

  ngOnInit(): void {
    this.obtenerLista();
  }

  openDialog(){
    const dialogRef = this.dialog.open(ModalNuevaEduComponent);
    dialogRef.afterClosed().subscribe(
      data => {
        this.ngOnInit();
      }
    );
  }

}

