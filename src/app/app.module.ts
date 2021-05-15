import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { CentreListComponent } from './centre-list/centre-list.component';
import { CitoyenListComponent } from './citoyen-list/citoyen-list.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { RdvListComponent } from './rdv-list/rdv-list.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { CreateCentreComponent } from './create-centre/create-centre.component';
import { CreateCitoyenComponent } from './create-citoyen/create-citoyen.component';
import { CreatePersonnelComponent } from './create-personnel/create-personnel.component';
import { CreateRdvComponent } from './create-rdv/create-rdv.component';
import { FormsModule } from '@angular/forms';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateCentreComponent } from './update-centre/update-centre.component';
import { UpdateCitoyenComponent } from './update-citoyen/update-citoyen.component';
import { UpdatePersonnelComponent } from './update-personnel/update-personnel.component';
import { UpdateRdvComponent } from './update-rdv/update-rdv.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { CentreDetailsComponent } from './centre-details/centre-details.component';
import { CitoyenDetailsComponent } from './citoyen-details/citoyen-details.component';
import { PersonnelDetailsComponent } from './personnel-details/personnel-details.component';
import { RdvDetailsComponent } from './rdv-details/rdv-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminListComponent,
    CentreListComponent,
    CitoyenListComponent,
    PersonnelListComponent,
    RdvListComponent,
    CreateAdminComponent,
    CreateCentreComponent,
    CreateCitoyenComponent,
    CreatePersonnelComponent,
    CreateRdvComponent,
    UpdateAdminComponent,
    UpdateCentreComponent,
    UpdateCitoyenComponent,
    UpdatePersonnelComponent,
    UpdateRdvComponent,
    AdminDetailsComponent,
    CentreDetailsComponent,
    CitoyenDetailsComponent,
    PersonnelDetailsComponent,
    RdvDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
