import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar"
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterModel} from "../../template/register/register.model";
import {Router} from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

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

  createUser(dataUser: RegisterModel) {
      let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: ''},
        body: JSON.stringify({
          userType: dataUser.userType,
          name: dataUser.name,
          email: dataUser.email,
          password: dataUser.password
        })
      };

      fetch(`${this.baseUrl}/signup`, options)
          .then(res => res.json())
          .then(res => {
            if(!!res.userCreated){
                this.showMessage(res.message, false)
                this.router.navigate(["/login"])
            }else if(!!res.errors.length){
                this.showMessage(res.errors[0].msg, true)
            }
          })
          .catch(err => {
              this.showMessage(err.message, true)
          });
  }
}
