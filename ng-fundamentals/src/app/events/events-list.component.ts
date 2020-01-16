import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "events-list",
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"
            #thumbnail
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private toastr: ToastrService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data.events;
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
