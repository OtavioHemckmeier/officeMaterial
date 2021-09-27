import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get isLogged(): boolean {
    return !!localStorage.getItem("sessionUser")
  }

  logout(): void {
    localStorage.removeItem("sessionUser")
    this.router.navigate(["/login"])
    setTimeout(function (){
      location.reload()
    }, 500)
  }

  handleShowMenu(): void {
    localStorage.setItem("showMenu", localStorage.getItem("showMenu") === "show" ? "hide" : "show")
  }
}
