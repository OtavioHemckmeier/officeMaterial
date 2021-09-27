import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../service/register/register.service'
import {RegisterModel} from "./register.model";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Grupo {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  dataUser: RegisterModel = {
    userType: "",
    name: "",
    email: "",
    password: "",
  }

  constructor(private register: RegisterService) { }

  ngOnInit(): void {
  }
  grupos: Grupo[] = [
    {value: 'adm', viewValue: 'Administrador'},
    {value: 'almoxarife', viewValue: 'Almoxarife'},
    {value: 'solicitante', viewValue: 'Solicitante'}
  ];

  registerUser(): void {
    if(!!this.dataUser.userType && !!this.dataUser.name && !!this.dataUser.email && !!this.dataUser.password && this.dataUser.password.length >= 7){
      this.register.createUser(this.dataUser)
    }
  }
}
