import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrateur } from '../administrateur';
import { AdministrateurService } from '../administrateur.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  admin : Administrateur = new Administrateur();

  constructor(private adminService:AdministrateurService , private router:Router) { }

  ngOnInit(): void {
  }

  goToAdminList(){
    this.router.navigate(['/admins']);
  }


  saveAdmin(){
    this.adminService.createAdmin(this.admin).subscribe(data =>{console.log(data); this.goToAdminList();}, error => console.log(error));
  }


  onSubmit(){
    console.log(this.admin);
    this.saveAdmin();

  }

}
