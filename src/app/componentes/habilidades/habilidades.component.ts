import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/servicios/habilidades/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  
  softSkills : any[];
  mostrar : boolean = false;
  id :number=0;
    
  constructor( private _servicioHabil : HabilidadesService) {

    this.softSkills= this._servicioHabil.obtenerTodos();

   }

   mostrarDescripcion(i : number, tipoHabil : string,event:Event){
    this.id = i;
    this.mostrar = true;
    if(tipoHabil=="soft"){
      (<SVGSVGElement>event.target).style.color="rgb(53,53,175)";
    }else{
      (<SVGSVGElement>event.target).style.color="rgb(238,53,53)";
    }
    
    
  }

  ngOnInit(): void {
  }

}
