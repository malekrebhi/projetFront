import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personnel } from '../personnel';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-personnel-details',
  templateUrl: './personnel-details.component.html',
  styleUrls: ['./personnel-details.component.css']
})
export class PersonnelDetailsComponent implements OnInit {

  idPersonnel!:number;
  personnel!:Personnel;
  constructor(private route:ActivatedRoute,private personnelService:PersonnelService) { }

  ngOnInit(): void {
    this.idPersonnel=this.route.snapshot.params['idPersonnel'];
    this.personnel=new Personnel();
    this.personnelService.getPersonnelById(this.idPersonnel).subscribe(data => {this.personnel=data;});
 
  }

}
