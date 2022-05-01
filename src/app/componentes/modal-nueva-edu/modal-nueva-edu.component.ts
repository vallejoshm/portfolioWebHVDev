import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { EducacionComponent } from '../educacion/educacion.component';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Output,ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-modal-nueva-edu',
  templateUrl: './modal-nueva-edu.component.html',
  styleUrls: ['./modal-nueva-edu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalNuevaEduComponent implements OnInit {

  @Output() nuevoItemEvent = new EventEmitter<Educacion>();
  id!: number;
  opcion!: string;
  avanceSi: boolean = true;
  finalizada!: string;
  enCurso!: string;
  nombreCarrera!: string;
  descripcion!: string;
  avanceCarr!:number;
  nombreInstitucion!: string;
  direccion!: string;
  telefono!: string;
  paginaWeb!: string;
  fechaInicio!: string;
  fechaFin!: string;
  nuevaEdu!: Educacion;

  constructor(public dialogRef: MatDialogRef<ModalNuevaEduComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EducacionComponent,
    private eduServ: EducacionService, private toastr: ToastrService, private router: Router) {
  }

  crearNuevaEdu() {
    this.nuevaEdu = new Educacion(this.id, this.opcion, this.nombreCarrera, this.avanceCarr,
      this.descripcion, this.nombreInstitucion, this.direccion, this.telefono, this.paginaWeb, this.fechaInicio, this.fechaFin);
    this.eduServ.nuevaEducacion(this.nuevaEdu).subscribe(
      data => {
        this.toastr.success('Elemento Educacion Creado', 'Ok', {
          timeOut: 2000
        }),this.router.navigate(['inicio'])
        
      },
      err => {
        this.toastr.error(err.error.Mensaje, 'No Se ha agregado el elemento', {
          timeOut: 2000
        }),
        this.router.navigate(['inicio'])
      }
    );
  }
  estado() {
    let avance = 0;
    if (this.avanceSi) avance = 100;
    return avance;
  }

  ngOnInit(): void {
  }

  onClickNo(): void {
    this.dialogRef.close();
  }

  opcionElegida(ev: MatSelectChange): void {
    this.opcion = (ev.source.selected as MatOption).viewValue;
    if (this.opcion == this.finalizada) {
      this.avanceSi = false;
    } else if (this.opcion == this.enCurso) {
      this.avanceSi = true;
    }
  }

  public nuevoItem(edu: Educacion){
    this.nuevoItemEvent.emit(edu);
  }


}

