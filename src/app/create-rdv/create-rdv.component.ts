import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from '../rendez-vous';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-create-rdv',
  templateUrl: './create-rdv.component.html',
  styleUrls: ['./create-rdv.component.css']
})
export class CreateRdvComponent implements OnInit {

  rdv : RendezVous = new RendezVous();

  constructor(private rdvService: RendezVousService,  private router:Router) { }

  ngOnInit(): void {
  }


  goToRdvsList(){
    this.router.navigate(['/rdvs']);
  }

  saveRdv(){
    this.rdvService.createRdv(this.rdv).subscribe(data =>{console.log(data); this.goToRdvsList();}, error => console.log(error));
  }

  onSubmit(){
    console.log(this.rdv);
    this.saveRdv();
  }

}