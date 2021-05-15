import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Citoyen } from '../citoyen';
import { CitoyenService } from '../citoyen.service';

@Component({
  selector: 'app-create-citoyen',
  templateUrl: './create-citoyen.component.html',
  styleUrls: ['./create-citoyen.component.css']
})
export class CreateCitoyenComponent implements OnInit {

  citoyen : Citoyen = new Citoyen();

  constructor( private citoyenService: CitoyenService,  private router:Router) { }

  ngOnInit(): void {
  }

  goToCitoyensList(){
    this.router.navigate(['/citoyens']);
  }


  saveCitoyen(){
    this.citoyenService.createCitoyen(this.citoyen).subscribe(data =>{console.log(data); this.goToCitoyensList();}, error => console.log(error));
  }


  onSubmit(){
    console.log(this.citoyen);
    this.saveCitoyen();
  }
}
