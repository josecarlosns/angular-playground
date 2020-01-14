import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  template: `
    <event-thumbnail [event]="event1" #thumbnail></event-thumbnail>
    <h3>{{thumbnail.someProp}}</h3>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log</button>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: "Angular Connect",
    date: "09/26/2036",
    time: "10:00 am",
    price: 599.99,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "1057 DT",
      city: "London",
      country: "England"
    }
  };
}
