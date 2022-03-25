import { SkillsComponent } from './componentes/skills/skills.component';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { AcercaComponent } from "./componentes/acerca/acerca.component";
import { EducacionComponent } from "./componentes/educacion/educacion.component";
import { EncabezadoComponent } from "./componentes/encabezado/encabezado.component";
import { LaboralComponent } from "./componentes/laboral/laboral.component";
import { LoginComponent } from "./componentes/login/login.component";


const appRoutes =[
  {path: '', component: AppComponent, pathMatch: "full"},
  {path: 'logear', component: LoginComponent, pathMatch:"full"},
  {path: 'portfolio', component: AppComponent},
  {path: 'encabezado', component:EncabezadoComponent},
  {path: 'acerca', component:AcercaComponent},
  {path: 'laboral', component: LaboralComponent},
  {path: 'educacion', component: EducacionComponent},
  
];

