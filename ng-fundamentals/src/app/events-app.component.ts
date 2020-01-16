import { Component } from "@angular/core";

@Component({
  selector: "events-app",
  template: `
    <div class="body-container">
      <navbar></navbar>
      <router-outlet></router-outlet>
    </div>
  `
})
export class EventsAppComponent {
  title = "ng-fundamentals";
}
