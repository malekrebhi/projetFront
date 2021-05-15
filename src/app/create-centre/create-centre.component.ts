import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentreVacc } from '../centre-vacc';
import { CentreVaccService } from '../centre-vacc.service';

@Component({
  selector: 'app-create-centre',
  templateUrl: './create-centre.component.html',
  styleUrls: ['./create-centre.component.css']
})
export class CreateCentreComponent implements OnInit {

  centre: CentreVacc=new CentreVacc();

  constructor(private centreService:CentreVaccService,  private router:Router) { }

  ngOnInit(): void {
  }

  goToCentresList(){
    this.router.navigate(['/centres']);
  }

  saveCentre(){
    this.centreService.createCentre(this.centre).subscribe(data =>{console.log(data); this.goToCentresList();}, error => console.log(error));
  }

  onSubmit(){
    console.log(this.centre);
    this.saveCentre();
  }

}
