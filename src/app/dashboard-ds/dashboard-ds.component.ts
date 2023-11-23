import { Component } from '@angular/core';
import { FicheDS } from '../model/ficheDS.model';

@Component({
  selector: 'app-dashboard-ds',
  templateUrl: './dashboard-ds.component.html',
  styleUrls: ['./dashboard-ds.component.css']
})
export class DashboardDsComponent {
  fiche: FicheDS[] = [];


}
