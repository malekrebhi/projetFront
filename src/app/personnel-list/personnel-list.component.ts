import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personnel } from '../personnel';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-personnel-list',
  templateUrl: './personnel-list.component.html',
  styleUrls: ['./personnel-list.component.css']
})
export class PersonnelListComponent implements OnInit {

  personnels!: Personnel[];

  constructor( private personnelService: PersonnelService,private router:Router) { }

  ngOnInit(): void {
    
    this.getPersonnels();
  }

  private getPersonnels(){
    this.personnelService.getPersonnelList().subscribe(data =>{this.personnels=data;})
  }

  updatePersonnel(idPersonnel: number){
    this.router.navigate(['update-personnel',idPersonnel]);

  }

  deletePersonnel(idPersonnel: number){
    this.personnelService.deletePersonnel(idPersonnel).subscribe(data => {console.log(data); this.getPersonnels();});
  }

  personnelDetails(idPersonnel: number){
    this.router.navigate(['personnel-details',idPersonnel]);

  }
}
