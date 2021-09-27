import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar"
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from "../../template/login/login.model";
import {Router} from "@angular/router";
import 'lodash';

declare const _:any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:8080/auth"

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private router: Router) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  sendLogin(dataLogin: Login) {
    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: ''},
      body: JSON.stringify({
        email: dataLogin.email,
        password: dataLogin.password
      })
    };

    fetch(`${this.baseUrl}/login`, options)
        .then(res => res.json())
        .then(response => {
          if(!!response && !!response.token){
            localStorage.setItem("sessionUser", JSON.stringify(response))
            this.showMessage(`Bem vindo(a) ${response.userName}!`)
            this.router.navigate(["/list"])
          }else if(!!_.get(response, "error.message")){
            this.showMessage(_.get(response, "error.message"), true)
          }
        })
        .catch(err => console.error('error:' + err));
  }
}
