import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../service/login/login.service";
import { Router } from "@angular/router";
import { Login } from "./login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: "",
    password: ""
  }
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }
  verifyUserLogged(): void {
    if(!!localStorage.getItem("sessionUser")) this.router.navigate(["/dashboard"])
  }

  sendLogin(): void {
    this.loginService.sendLogin(this.login)
  }
}
