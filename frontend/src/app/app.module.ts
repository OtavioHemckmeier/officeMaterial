import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from './components/template/footer/footer.component';
import { LoginComponent } from './components/template/login/login.component';
import { DashboardComponent } from './components/template/dashboard/dashboard.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { RegisterComponent } from './components/template/register/register.component';

import { FormsModule } from "@angular/forms"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

import { HttpClientModule } from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import { SolicitacoesComponent } from './components/template/solicitacoes/solicitacoes.component';
import { ViewsolicitacoesComponent } from './components/template/viewsolicitacoes/viewsolicitacoes.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableSolicitacoesComponent } from './components/component/table-solicitacoes/table-solicitacoes.component';
import { CloseComponent } from './components/component/close/close.component';
import { AproveComponent } from './components/component/aprove/aprove.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    SolicitacoesComponent,
    ViewsolicitacoesComponent,
    TableSolicitacoesComponent,
    CloseComponent,
    AproveComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSnackBarModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatOptionModule,
        MatSelectModule,
        HttpClientModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatSortModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
