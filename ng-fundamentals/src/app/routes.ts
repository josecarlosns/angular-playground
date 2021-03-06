import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventsListComponent,
  EventListResolver,
  CreateSessionComponent
} from "./events";
import { LoginComponent } from "./user/login.component";

export const appRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"]
  },
  { path: "events/session/new", component: CreateSessionComponent },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: {
      events: EventListResolver
    }
  },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "user", loadChildren: "./user/user.module#UserModule" },
  { path: "login", component: LoginComponent }
];
