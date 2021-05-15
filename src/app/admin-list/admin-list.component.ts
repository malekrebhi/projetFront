import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrateur } from '../administrateur';
import { AdministrateurService } from '../administrateur.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admins!: Administrateur[];

  constructor( private adminService: AdministrateurService, private router:Router) { }

  ngOnInit(): void {
    
    this.getAdmins();
  }

  private getAdmins(){
    this.adminService.getAdminsList().subscribe(data => {this.admins=data;});
  }

  updateAdmin(idAdmin: number){
    this.router.navigate(['update-admin',idAdmin]);

  }

  deleteAdmin(idAdmin: number){
    this.adminService.deleteAdmin(idAdmin).subscribe(data => {console.log(data); this.getAdmins();});


  }
  adminDetails(idAdmin: number){
    this.router.navigate(['admin-details',idAdmin]);
  }
  
}
