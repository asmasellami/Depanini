import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginEntrepriseComponent } from './login-entreprise/login-entreprise.component';
import { DashboardDEComponent } from './dashboard-de/dashboard-de.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardDsComponent } from './dashboard-ds/dashboard-ds.component';
import { FicheDSComponent } from './fiche-ds/fiche-ds.component';
import { ListeDSComponent } from './liste-ds/liste-ds.component';
import { UpdateFicheDSComponent } from './update-fiche-ds/update-fiche-ds.component';
import { UpdateCompteDSComponent } from './update-compte-ds/update-compte-ds.component';
import { UpdateCompteDeComponent } from './update-compte-de/update-compte-de.component';


const routes: Routes = [
  {path: "acceuil", component : AcceuilComponent},
  {path: "loginEnt", component : LoginEntrepriseComponent},
  {path: "dashDE", component : DashboardDEComponent},
  {path: "dashDS", component : DashboardDsComponent},
  {path: "register", component : RegisterComponent},
  {path: "login", component : LoginComponent},
  {path: "ficheDS", component : FicheDSComponent},
  {path: "listeDS", component : ListeDSComponent},
  {path: "updateficheDS", component : UpdateFicheDSComponent},
  {path: "updacompteDS", component : UpdateCompteDSComponent},
  {path: "updacompteDE", component : UpdateCompteDeComponent},
  {path: "", redirectTo: "acceuil", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
