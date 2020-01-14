import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  nomEmploye:string='Amira';
  dateEntree:string='15 mai 2019';
  technologies:string='ASP.net, Angular, PHP, Java';
  homeTown:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  onChangeCity() {
    this.homeTown = (this.homeTown === true) ? false : true;
  }

}
