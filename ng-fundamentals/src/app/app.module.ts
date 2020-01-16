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

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
