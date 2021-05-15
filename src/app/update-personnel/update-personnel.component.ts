import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personnel } from '../personnel';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-update-personnel',
  templateUrl: './update-personnel.component.html',
  styleUrls: ['./update-personnel.component.css']
})
export class UpdatePersonnelComponent implements OnInit {

  idPersonnel!:number;
  personnel : Personnel = new Personnel();

  constructor(private personnelService:PersonnelService, private route:ActivatedRoute,  private router:Router) { }

  ngOnInit(): void {
    this.idPersonnel=this.route.snapshot.params['idPersonnel'];
    this.personnelService.getPersonnelById(this.idPersonnel).subscribe(data => {this.personnel=data;},error => console.log(error));
  }


  goToPersonnelsList(){
    this.router.navigate(['/personnels']);
  }

  onSubmit(){
    this.personnelService.updatePersonnel(this.idPersonnel,this.personnel).subscribe(data =>{this.goToPersonnelsList();},error => console.log(error));

  }
}
