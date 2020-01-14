import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'ville',
  templateUrl: './ville.component.html'
})
export class VilleComponent implements OnInit {

  @Input() 
  villeId:      string;
  @Input()
  villeName:    string;


  constructor() { }

  ngOnInit() {
  }

}
