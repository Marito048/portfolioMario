import { PortfolioComponent } from '../app/portfolio/portfolio.component';
import { LoginComponent } from '../app/portfolio/componentes/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from '../app/portfolio/componentes/encabezado/encabezado.component';
import { AcercaComponent } from '../app/portfolio/componentes/acerca/acerca.component';
import { LaboralComponent } from '../app/portfolio/componentes/laboral/laboral.component';
import { EducacionComponent } from '../app/portfolio/componentes/educacion/educacion.component';
import { SkillsComponent } from '../app/portfolio/componentes/skills/skills.component';
import { ProyectosComponent } from '../app/portfolio/componentes/proyectos/proyectos.component';
import { PublicidadComponent } from '../app/portfolio/componentes/publicidad/publicidad.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CertificadosComponent } from '../app/portfolio/componentes/certificados/certificados.component';
import { AddButtonComponent } from '../app/portfolio/componentes/botones/add-button/add-button.component';
import { EditButtonComponent } from '../app/portfolio/componentes/botones/edit-button/edit-button.component';
import { DeleteButtonComponent } from '../app/portfolio/componentes/botones/delete-button/delete-button.component';




@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    EncabezadoComponent,
    AcercaComponent,
    LaboralComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    PublicidadComponent,
    LoginComponent,
    CertificadosComponent,
    AddButtonComponent,
    EditButtonComponent,
    DeleteButtonComponent


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    NgCircleProgressModule.forRoot({
      "backgroundGradient": true,
      "backgroundColor": "#ffffff",
      "backgroundGradientStopColor": "#7f7676",
      "backgroundPadding": -10,
      "radius": 60,
      "maxPercent": 100,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#1ca6a3",
      "innerStrokeWidth": 0,
      "subtitleColor": "#444444",
      "showInnerStroke": false,
      "responsive": true,
      "startFromZero": false,
      "lazy": true
    }),

    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
