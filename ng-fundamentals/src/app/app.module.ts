import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import { ToastrModule } from "ngx-toastr";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { appRoutes } from "./routes";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/events-list-resolver.service";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    },
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm("You have unsaved changes, do you wish to cancel?");

  return true;
}
