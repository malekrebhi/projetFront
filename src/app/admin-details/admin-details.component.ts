import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Administrateur } from '../administrateur';
import { AdministrateurService } from '../administrateur.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  idAdmin!:number;
  admin!: Administrateur;
  constructor( private route:ActivatedRoute, private adminService:AdministrateurService) { }

  ngOnInit(): void {
    this.idAdmin=this.route.snapshot.params['idAdmin'];
    this.admin=new Administrateur();
    this.adminService.getAdminById(this.idAdmin).subscribe(data => {this.admin=data;});
  }

}
