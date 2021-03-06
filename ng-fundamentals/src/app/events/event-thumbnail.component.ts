import { Component, Input } from "@angular/core";
import { IEvent } from "./shared/event.model";

@Component({
  selector: "event-thumbnail",
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{ event?.name | uppercase }}</h2>
      <div>Date: {{ event?.date | date: "dd/MM/yyyy" }}</div>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: {{ event?.price | currency:'USD' }}</div>
      <div [hidden]="!event?.location">
        <span>Location: {{ event?.location.address }}</span>
        <span class="pad-left"
          >{{ event?.location.city }}, {{ event?.location.country }}</span
        >
      </div>
      <div *ngIf="event?.onlineUrl">Online URL: {{ event?.onlineUrl }}</div>
    </div>
  `,
  styles: [
    `
      .green {
        color: #009800 !important;
      }
      .bold {
        font-weight: bold;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    return {
      green: this.event.time === "8:00 am",
      bold: this.event.time === "9:00 am"
    };
  }

  getStartTimeStyle() {
    return {
      color: this.event.time === "8:00 am" ? "#003300" : "#bbb",
      "font-weight": this.event.time === "8:00 am" ? "bold" : "normal"
    };
  }
}
