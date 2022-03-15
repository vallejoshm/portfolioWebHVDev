import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  mostrar: boolean = true;
  ver: boolean = false;
  descripExp: any[];
  unaExp:any;

  constructor(private _servicioExp: ExperienciaService) {

    this.descripExp = _servicioExp.obtenerExp();

   }

   obtenerUna(i:number){

    this.unaExp = this._servicioExp.obtenerUnaExp(i);
    this.mostrar = !this.mostrar;

   }

   verExpNoIt(){
     this.ver = !this.ver;    
   }

  ngOnInit(): void {
  }

}
