import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from '../rendez-vous';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-rdv-list',
  templateUrl: './rdv-list.component.html',
  styleUrls: ['./rdv-list.component.css']
})
export class RdvListComponent implements OnInit {

  rdvs!: RendezVous[];
  constructor( private rdvService: RendezVousService,private router:Router) { }

  ngOnInit(): void {

    this.getRdv();
  }

  private getRdv(){
    this.rdvService.getRdVList().subscribe(data => {this.rdvs=data;})
  }


  updateRdv(idRDV: number){
    this.router.navigate(['update-rdv',idRDV]);

  }

  deleteRdv(idRDV: number){
    this.rdvService.deleteRdv(idRDV).subscribe(data => {console.log(data); this.getRdv();});


  }

  rdvDetails(idRDV: number){
    this.router.navigate(['rdv-details',idRDV]);

  }

}
