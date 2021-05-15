import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentreVacc } from '../centre-vacc';
import { CentreVaccService } from '../centre-vacc.service';

@Component({
  selector: 'app-centre-details',
  templateUrl: './centre-details.component.html',
  styleUrls: ['./centre-details.component.css']
})
export class CentreDetailsComponent implements OnInit {

  idCentre!:number;
  centre!: CentreVacc;
  constructor(private route: ActivatedRoute, private centreService:CentreVaccService) { }

  ngOnInit(): void {
    this.idCentre=this.route.snapshot.params['idCentre'];
    this.centre=new CentreVacc();
    this.centreService.getCentreById(this.idCentre).subscribe(data => {this.centre=data;});
  }

}
