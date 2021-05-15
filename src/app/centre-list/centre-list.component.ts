import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentreVacc } from '../centre-vacc';
import { CentreVaccService } from '../centre-vacc.service';

@Component({
  selector: 'app-centre-list',
  templateUrl: './centre-list.component.html',
  styleUrls: ['./centre-list.component.css']
})
export class CentreListComponent implements OnInit {

  centres!: CentreVacc[];

  constructor( private centreService: CentreVaccService,private router:Router) { }

  ngOnInit(): void {

    this.getCentres();
    
  }

  private getCentres(){
    this.centreService.getCentresList().subscribe(data => {this.centres = data;});
  }

  updateCentre(idCentre: number){
    this.router.navigate(['update-centre',idCentre]);

  }

  deleteCentre(idCentre: number){
    this.centreService.deleteCentre(idCentre).subscribe(data => {console.log(data); this.getCentres();});

  }

  centreDetails(idCentre: number){
    this.router.navigate(['centre-details',idCentre]);
  }
}
