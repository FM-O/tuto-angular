import { Component, OnInit, QueryList, ContentChildren, Query } from '@angular/core';
import { VilleComponent } from '../ville/ville.component';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  @ContentChildren(VilleComponent)
  topVilles: QueryList<VilleComponent>;

  @ContentChildren(VilleComponent, {descendants: true})
  allVilles: QueryList<VilleComponent>;

  constructor() { }

  ngOnInit() {
  }

}
