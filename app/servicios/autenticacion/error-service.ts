import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {

  constructor(private toastr: ToastrService, private router: Router, private tokenService: TokenService) { }

  show(status: number) {
    if (status === 401){
      this.tokenService.logOut();
      this.toastr.error('','Sesión Expirada', {
        timeOut: 5000}) ;
      this.router.navigate(['/login']);
      }
      else{
      
      this.toastr.error('','No tiene permisos de administrador', {
        timeOut: 3000}) ;
      
      }
      }
    }
    

