import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NavBarComponent } from "./nav/navbar.component";
import { ToastrModule } from "ngx-toastr";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { EventsAppComponent } from "./events-app.component";
import {
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventService,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  DurationPipe
} from "./events";
import { LoginComponent } from "./user/login.component";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SessionListComponent } from "./events/event-details/session-list.component";
import { CollapsibleWellComponent } from "./common/collapsible-well.component";
import { JQ_TOKEN } from "./common/jquery.service";
import { SimpleModalComponent } from "./common/simple-modal.component";
import { ModalTriggerDirective } from "./common/modal-trigger.directive";

let jquery = window["$"];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component,
    LoginComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    EventRouteActivator,
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService,
    { provide: JQ_TOKEN, useValue: jquery }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm("You have unsaved changes, do you wish to cancel?");

  return true;
}
