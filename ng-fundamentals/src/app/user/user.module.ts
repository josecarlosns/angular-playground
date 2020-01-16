import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ProfileComponent } from "./profile.component";
import { userRoutes } from "./user.routes";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes), FormsModule],
  declarations: [ProfileComponent],
  providers: []
})
export class UserModule {}
