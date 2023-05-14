import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EduGuardService } from './guards/edu-guard.service';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path: 'contacto', component: ContactoComponent, canActivate: [EduGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'inicio', component: InicioComponent, canActivate: [EduGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: '', component: LoginComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
