import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreVacc } from '../centre-vacc';
import { CentreVaccService } from '../centre-vacc.service';

@Component({
  selector: 'app-update-centre',
  templateUrl: './update-centre.component.html',
  styleUrls: ['./update-centre.component.css']
})
export class UpdateCentreComponent implements OnInit {

  idCentre!:number;
  centre: CentreVacc=new CentreVacc();

  constructor(private centreService:CentreVaccService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.idCentre=this.route.snapshot.params['idCentre'];
    this.centreService.getCentreById(this.idCentre).subscribe(data => {this.centre=data;},error => console.log(error));
  }


  goToCentresList(){
    this.router.navigate(['/centres']);
  }

  onSubmit(){
    this.centreService.updateCentre(this.idCentre,this.centre).subscribe(data =>{this.goToCentresList();},error => console.log(error));

  }
}
