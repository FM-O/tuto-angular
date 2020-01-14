import { Component, OnInit, ContentChild } from '@angular/core';
import { VilleComponent } from '../ville/ville.component';

@Component({
  selector: 'adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  @ContentChild(VilleComponent, null) ville:VilleComponent;
  title= 'Adresse';

  constructor() { }

  ngOnInit() {
  }

}
