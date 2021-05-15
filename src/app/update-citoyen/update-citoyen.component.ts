import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Citoyen } from '../citoyen';
import { CitoyenService } from '../citoyen.service';

@Component({
  selector: 'app-update-citoyen',
  templateUrl: './update-citoyen.component.html',
  styleUrls: ['./update-citoyen.component.css']
})
export class UpdateCitoyenComponent implements OnInit {

  idCitoyen!:number;
  citoyen : Citoyen = new Citoyen();
  constructor(private citoyenService:CitoyenService, private route:ActivatedRoute,  private router:Router) { }

  ngOnInit(): void {
    this.idCitoyen=this.route.snapshot.params['idCitoyen'];
    this.citoyenService.getCitoyenById(this.idCitoyen).subscribe(data => {this.citoyen=data;},error => console.log(error));
  }



  goToCitoyensList(){
    this.router.navigate(['/citoyens']);
  }

  onSubmit(){
    this.citoyenService.updateCitoyen(this.idCitoyen,this.citoyen).subscribe(data =>{this.goToCitoyensList();},error => console.log(error));

  }

}
