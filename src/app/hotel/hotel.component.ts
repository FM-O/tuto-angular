import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotelName:      string  = 'Grand hotel';
  hotelStars:     number  = 5;
  hotelLocation:  string  = 'Paris';
  message:        string  = 'Vous n\'avez pas de réservation(s)';
  isReserved:     boolean = false;
  clientName:     string  = '';
  residentNumber: string  = '1';
  isYellow:       boolean = false;
  isFontBig:      boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getNombreResidents():number {
    return 198;
  }

  onReservation():void {
    this.isReserved=true;
    this.message='Votre réservation est confirmée';
  }

  onNameTyping(evt: Event):void {
    this.clientName=(<HTMLInputElement>evt.target).value;
  }
}
