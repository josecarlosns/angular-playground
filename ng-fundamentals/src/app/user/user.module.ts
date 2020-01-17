import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileComponent } from "./profile.component";
import { userRoutes } from "./user.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent],
  providers: []
})
export class UserModule {}
