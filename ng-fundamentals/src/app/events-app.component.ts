import { Component } from "@angular/core";

@Component({
  selector: "events-app",
  template: `
    <div class="body-container">
      <navbar></navbar>
      <events-list></events-list>
    </div>
  `
})
export class EventsAppComponent {
  title = "ng-fundamentals";
}
