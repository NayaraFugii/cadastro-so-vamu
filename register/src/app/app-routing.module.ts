import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component'

import { ListComponent } from "./pages/list/list.component"
import { RegisterComponent} from "./pages/register/register.component"  

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
