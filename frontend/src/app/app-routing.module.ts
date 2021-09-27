import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/template/login/login.component';
import { DashboardComponent } from './components/template/dashboard/dashboard.component';
import { RegisterComponent } from './components/template/register/register.component';
import { SolicitacoesComponent } from './components/template/solicitacoes/solicitacoes.component';
import { ViewsolicitacoesComponent } from './components/template/viewsolicitacoes/viewsolicitacoes.component';
import {AproveComponent} from "./components/component/aprove/aprove.component";
import {CloseComponent} from "./components/component/close/close.component";


const routes: Routes = [
    {
        path: "list",
        component: ViewsolicitacoesComponent
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "solicitations",
        component: SolicitacoesComponent
    },
    {
        path: "solicitacao/done/:id",
        component: AproveComponent
    },
    {
        path: "solicitacao/close/:id",
        component: CloseComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
