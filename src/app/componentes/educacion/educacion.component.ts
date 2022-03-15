import { EducacionService } from 'src/app/servicios/educacion/educacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  instEducativas : any=[];

  mostrar:boolean = true;

  unaInst: any;

  constructor(private _servicioEduc:EducacionService) {

    this.instEducativas= this._servicioEduc.obtenerEducacion();

   }

   obtenerUna(i:number){
     
    this.unaInst = this._servicioEduc.obtenerUna(i);
    this.mostrar=!this.mostrar;

   }

  ngOnInit(): void {
  }

}
