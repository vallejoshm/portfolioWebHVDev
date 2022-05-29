import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/header/nav/nav/nav.component';
import { BannerComponent } from './componentes/header/banner/banner/banner.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalNuevaEduComponent } from './componentes/modal-nueva-edu/modal-nueva-edu.component';
import { ModalNuevaExpComponent } from './componentes/modal-nueva-exp/modal-nueva-exp.component';
import { ModalNuevaSkillComponent } from './componentes/modal-nueva-skill/modal-nueva-skill.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ModalNuevoProyectoComponent } from './componentes/modal-nuevo-proyecto/modal-nuevo-proyecto.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { interceptorProvider } from './interceptors/edu-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    InicioComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ModalNuevaEduComponent,
    ModalNuevaExpComponent,
    ModalNuevaSkillComponent,
    LoginComponent,
    RegistroComponent,
    ModalNuevoProyectoComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    MatProgressBarModule,
    AutocompleteLibModule,
    MatProgressSpinnerModule,
    MatCardModule,
    CarouselModule.forRoot()
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
