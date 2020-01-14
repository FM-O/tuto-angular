import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {

  userForm:FormGroup = new FormGroup({
    nom: new FormControl('Alexandra'),
    age: new FormControl(20, Validators.required),
    ville: new FormControl(),
    pays: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit() {
    console.log(`Nom: ${this.userForm.get('nom').value}`);
    console.log(`Age: ${this.userForm.get('age').value}`);
    console.log(`Ville: ${this.userForm.get('ville').value}`);
    console.log(`Pays: ${this.userForm.get('pays').value}`);
  }

  setDefaultValues():void {
    this.userForm.setValue({nom: 'Amira', age: 45, ville: 'Texas', pays: 'USA'});
  }
}
