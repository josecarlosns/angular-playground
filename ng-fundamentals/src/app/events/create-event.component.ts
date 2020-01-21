import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/event.service";
import { IEvent } from "./shared/event.model";

@Component({
  templateUrl: "./create-event.component.html",
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class CreateEventComponent implements OnInit {
  isDirty = true;
  event: IEvent = {
    location: {}
  } as IEvent;

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {
    // this.event = {
    //   name: "Angular Connect",
    //   date: new Date("9/26/2036"),
    //   time: "10:00 am",
    //   price: 599.99,
    //   imageUrl: "/assets/images/angularconnect-shield.png",
    //   location: {
    //     address: "1057 DT",
    //     city: "London",
    //     country: "England"
    //   }
    // };
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(["/events"]);
  }

  cancel() {
    this.router.navigate(["/events"]);
  }
}
