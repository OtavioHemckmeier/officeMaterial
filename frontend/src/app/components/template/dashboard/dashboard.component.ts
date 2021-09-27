import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router"
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-dashboard',
    styleUrls: ['./dashboard.component.css'],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    verifyUserLogged(): void {
        if (!localStorage.getItem("sessionUser")) this.router.navigate(["/login"])
    }

    get userName(): string {
        const session = localStorage.getItem("sessionUser")

        if (!!session) {
            const dataUser = JSON.parse(session);
            return dataUser.userName
        } else {
            return ""
        }
    }
    get userEmail(): string {
        const session = localStorage.getItem("sessionUser")

        if (!!session) {
            const dataUser = JSON.parse(session);
            return dataUser.userEmail
        } else {
            return ""
        }
    }
    get userType(): string {
        const session = localStorage.getItem("sessionUser")

        if (!!session) {
            const dataUser = JSON.parse(session);
            switch (dataUser.userType){
                case "adm": return "Administrador";
                case "almoxarife": return "Almoxarife";
                case "solicitante": return "Solicitante";
                default: return ""
            }
        } else {
            return ""
        }
    }

    get showMenu(): boolean {
        return localStorage.getItem("showMenu") === "show"
    }

    get isLogged(): boolean {
        return !!localStorage.getItem("sessionUser")
    }
}
