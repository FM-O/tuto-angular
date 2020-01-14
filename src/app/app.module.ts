import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HotelComponent } from './hotel/hotel.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { VilleComponent } from './VillesExample/ville/ville.component';
import { AdresseComponent } from './VillesExample/adresse/adresse.component';
import { EmployeComponent } from './VillesExample/employe/employe.component';
import { SelectionComponent } from './VillesExample/selection/selection.component';
import { PersonneComponent } from './ExempleSport/personne/personne.component';
import { ContactComponent } from './Forms/contact/contact.component';
import { EleveComponent } from './Forms/eleve/eleve.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HotelComponent,
    EnseignantComponent,
    EtudiantComponent,
    VilleComponent,
    AdresseComponent,
    EmployeComponent,
    SelectionComponent,
    PersonneComponent,
    ContactComponent,
    EleveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
