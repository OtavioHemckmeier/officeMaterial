import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['app.component.css'],

})
export class AppComponent {
  title = 'officematerial';

  get showMenu(): boolean {
    return localStorage.getItem("showMenu") === "show"
  }

  get isLogged(): boolean {
    return !!localStorage.getItem("sessionUser")
  }
}
