import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  templateUrl: "./login.component.html",
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
    `
  ]
})
export class LoginComponent {
  userName: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) {}

  login(formValue) {
    this.authService.loginUser(formValue.userName, formValue.password);

    this.router.navigate(["events"]);
  }

  cancel() {
    this.router.navigate(["events"]);
  }
}
