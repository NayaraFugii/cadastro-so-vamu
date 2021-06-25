import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms"
import { ReactiveFormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';
import { HttpClientModule} from "@angular/common/http"

import { HttpService} from "./pages/shared/register.service"
import {Ng2SearchPipeModule} from "ng2-search-filter"
import {NgbPaginationModule, NgbAlertModule} from "@ng-bootstrap/ng-bootstrap"


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgbAlertModule,
    NgbPaginationModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
