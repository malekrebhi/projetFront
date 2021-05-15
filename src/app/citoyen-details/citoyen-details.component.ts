import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Citoyen } from '../citoyen';
import { CitoyenService } from '../citoyen.service';

@Component({
  selector: 'app-citoyen-details',
  templateUrl: './citoyen-details.component.html',
  styleUrls: ['./citoyen-details.component.css']
})
export class CitoyenDetailsComponent implements OnInit {

  idCitoyen!: number;
  citoyen!: Citoyen;
  constructor(private route:ActivatedRoute,private citoyenService: CitoyenService) { }

  ngOnInit(): void {
    this.idCitoyen=this.route.snapshot.params['idCitoyen'];
    this.citoyen=new Citoyen();
    this.citoyenService.getCitoyenById(this.idCitoyen).subscribe(data => {this.citoyen=data;});
  }

}
