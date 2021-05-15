import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Citoyen } from '../citoyen';
import { CitoyenService } from '../citoyen.service';

@Component({
  selector: 'app-citoyen-list',
  templateUrl: './citoyen-list.component.html',
  styleUrls: ['./citoyen-list.component.css']
})
export class CitoyenListComponent implements OnInit {

  citoyens!: Citoyen[];

  constructor( private citoyenService: CitoyenService,private router:Router) { }

  ngOnInit(): void {

   this.getCitoyens();

  }

  private getCitoyens(){
    this.citoyenService.getCitoyensList().subscribe(data =>{this.citoyens=data;});
  }


  updateCitoyen(idCitoyen: number){
    this.router.navigate(['update-citoyen',idCitoyen]);

  }

  deleteCitoyen(idCitoyen: number){
    this.citoyenService.deleteCitoyen(idCitoyen).subscribe(data => {console.log(data); this.getCitoyens();});


  }

  citoyenDetails(idCitoyen: number){
    this.router.navigate(['citoyen-details',idCitoyen]);

  }

}
