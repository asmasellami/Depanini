import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginEntrepriseComponent } from './login-entreprise/login-entreprise.component';
import { DashboardDEComponent } from './dashboard-de/dashboard-de.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardDsComponent } from './dashboard-ds/dashboard-ds.component';
import { FicheDSComponent } from './fiche-ds/fiche-ds.component';
import { FormsModule } from '@angular/forms';
import { ListeDSComponent } from './liste-ds/liste-ds.component';
import { UpdateFicheDSComponent } from './update-fiche-ds/update-fiche-ds.component';
import { UpdateCompteDSComponent } from './update-compte-ds/update-compte-ds.component';
import { UpdateCompteDeComponent } from './update-compte-de/update-compte-de.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginEntrepriseComponent,
    DashboardDEComponent,
    RegisterComponent,
    LoginComponent,
    DashboardDsComponent,
    FicheDSComponent,
    ListeDSComponent,
    UpdateFicheDSComponent,
    UpdateCompteDSComponent,
    UpdateCompteDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
