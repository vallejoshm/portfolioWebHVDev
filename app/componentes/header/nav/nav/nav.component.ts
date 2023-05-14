import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/servicios/autenticacion/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLogged = false;

  constructor( private _tokenService: TokenService, private toastr : ToastrService,
     private router: Router) { }

  ngOnInit(): void {
    if (this._tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this._tokenService.logOut();
    this.router.navigate(['login']);
  }

  toIndex(): void{
    if(this.isLogged) this.router.navigate(['inicio']);
  }

}
