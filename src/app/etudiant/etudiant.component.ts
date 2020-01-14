import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  nomEtudiant:string = 'Marie Rigal';
  @Input()
  questionEnseignant: string;
  @Output()
  answerEvent = new EventEmitter<string>();
  reponseSaisie:string = '';

  constructor() { }

  ngOnInit() {
  }

  addReponse():void {
    this.answerEvent.emit(this.reponseSaisie);
  }

}
