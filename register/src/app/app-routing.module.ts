import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component'

import { ListComponent } from "./pages/list/list.component"
import { RegisterComponent} from "./pages/register/register.component";
import { EditComponent } from "./pages/edit/edit.component"  

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'edit', component: EditComponent}
  
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
