import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RendezVous } from '../rendez-vous';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-rdv-details',
  templateUrl: './rdv-details.component.html',
  styleUrls: ['./rdv-details.component.css']
})
export class RdvDetailsComponent implements OnInit {

  idRDV!:number;
  rdv!: RendezVous
  constructor(private route:ActivatedRoute, private rdvService:RendezVousService) { }

  ngOnInit(): void {
    this.idRDV=this.route.snapshot.params['idRDV'];
    this.rdv=new RendezVous();
    this.rdvService.getRdvById(this.idRDV).subscribe(data => {this.rdv=data;});
 
  }

}
