import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personnel } from '../personnel';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-create-personnel',
  templateUrl: './create-personnel.component.html',
  styleUrls: ['./create-personnel.component.css']
})
export class CreatePersonnelComponent implements OnInit {

  personnel : Personnel = new Personnel();

  constructor(private personnelService: PersonnelService ,  private router:Router) { }

  ngOnInit(): void {
  }

  goToPersonnelsList(){
    this.router.navigate(['/personnels']);
  }

  savePersonnel(){
    this.personnelService.createPersonnel(this.personnel).subscribe(data =>{console.log(data); this.goToPersonnelsList();}, error => console.log(error));
  }

  onSubmit(){
    console.log(this.personnel);
    this.savePersonnel();
  }

}
