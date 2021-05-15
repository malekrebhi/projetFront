import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrateur } from '../administrateur';
import { AdministrateurService } from '../administrateur.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  idAdmin!: number;
  admin : Administrateur = new Administrateur();

  constructor( private adminService:AdministrateurService, private route:ActivatedRoute,  private router:Router) { }

  ngOnInit(): void {
    this.idAdmin=this.route.snapshot.params['idAdmin'];
    this.adminService.getAdminById(this.idAdmin).subscribe(data => {this.admin=data;},error => console.log(error));
  }

  goToAdminList(){
    this.router.navigate(['/admins']);
  }



  onSubmit(){
    this.adminService.updateAdmin(this.idAdmin,this.admin).subscribe(data =>{this.goToAdminList();},error => console.log(error));
  }
  

}
