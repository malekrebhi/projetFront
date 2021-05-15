import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVous } from '../rendez-vous';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-update-rdv',
  templateUrl: './update-rdv.component.html',
  styleUrls: ['./update-rdv.component.css']
})
export class UpdateRdvComponent implements OnInit {


  idRDV!:number
  rdv : RendezVous = new RendezVous();

  constructor(private rdvService:RendezVousService, private route:ActivatedRoute,  private router:Router) { }

  ngOnInit(): void {
    this.idRDV=this.route.snapshot.params['idRDV'];
    this.rdvService.getRdvById(this.idRDV).subscribe(data => {this.rdv=data;},error => console.log(error));
  }

  goToRdvsList(){
    this.router.navigate(['/rdvs']);
  }

  onSubmit(){
    this.rdvService.updateRdv(this.idRDV,this.rdv).subscribe(data =>{this.goToRdvsList();},error => console.log(error));

  }

}
