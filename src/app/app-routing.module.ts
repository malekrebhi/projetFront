import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { CentreDetailsComponent } from './centre-details/centre-details.component';
import { CentreListComponent } from './centre-list/centre-list.component';
import { CitoyenDetailsComponent } from './citoyen-details/citoyen-details.component';
import { CitoyenListComponent } from './citoyen-list/citoyen-list.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { CreateCentreComponent } from './create-centre/create-centre.component';
import { CreateCitoyenComponent } from './create-citoyen/create-citoyen.component';
import { CreatePersonnelComponent } from './create-personnel/create-personnel.component';
import { CreateRdvComponent } from './create-rdv/create-rdv.component';
import { PersonnelDetailsComponent } from './personnel-details/personnel-details.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { RdvDetailsComponent } from './rdv-details/rdv-details.component';
import { RdvListComponent } from './rdv-list/rdv-list.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateCentreComponent } from './update-centre/update-centre.component';
import { UpdateCitoyenComponent } from './update-citoyen/update-citoyen.component';
import { UpdatePersonnelComponent } from './update-personnel/update-personnel.component';
import { UpdateRdvComponent } from './update-rdv/update-rdv.component';

const routes: Routes = [
  {path:'admins', component: AdminListComponent},
  {path:'', redirectTo:'admins',pathMatch:'full'},
  {path:'centres', component: CentreListComponent},
  {path:'citoyens', component: CitoyenListComponent},
  {path:'personnels', component: PersonnelListComponent},
  {path:'rdvs', component: RdvListComponent},
  {path:'create-admin', component: CreateAdminComponent},
  {path:'create-centre', component: CreateCentreComponent},
  {path:'create-citoyen', component: CreateCitoyenComponent},
  {path:'create-personnel', component: CreatePersonnelComponent},
  {path:'create-rdv', component: CreateRdvComponent},
  {path:'update-admin/:idAdmin', component: UpdateAdminComponent},
  {path:'update-centre/:idCentre', component: UpdateCentreComponent},
  {path:'update-citoyen/:idCitoyen', component: UpdateCitoyenComponent},
  {path:'update-personnel/:idPersonnel', component: UpdatePersonnelComponent},
  {path:'update-rdv/:idRDV', component: UpdateRdvComponent},
  {path:'admin-details/:idAdmin', component: AdminDetailsComponent},
  {path:'centre-details/:idCentre', component: CentreDetailsComponent},
  {path:'citoyen-details/:idCitoyen', component: CitoyenDetailsComponent},
  {path:'personnel-details/:idPersonnel', component: PersonnelDetailsComponent},
  {path:'rdv-details/:idRDV', component: RdvDetailsComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
