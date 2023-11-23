import { Component } from '@angular/core';
import { FicheDS } from '../model/ficheDS.model';

@Component({
  selector: 'app-liste-ds',
  templateUrl: './liste-ds.component.html',
  styleUrls: ['./liste-ds.component.css']
})
export class ListeDSComponent {
  fiche! : FicheDS[];

  constructor() {
    this.fiche = [
    {idFiche : 1, competence : "Plomberie", experience : 5, renumeration :3000 },

     ];
    }
    supprimerFiche(f: FicheDS) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf) {
        const index = this.fiche.indexOf(f);

        if (index !== -1) {
          this.fiche.splice(index, 1);
        }
      }
    }

}
