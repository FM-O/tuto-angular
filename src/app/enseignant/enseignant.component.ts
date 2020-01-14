import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  nomEnseignant:    string='Mr Arnaud';
  question:         string='Quel est la superficie de la France, exprimée en km² ?';
  reponse:          number=643901;
  reponseEtudiant:  number;
  isAnswerCorrect:  boolean;

  constructor() { }

  ngOnInit() {
  }

  saveData(std:number):void {
    this.reponseEtudiant = Number(std);
    this.isAnswerCorrect = this.reponse === this.reponseEtudiant;
  }
}
