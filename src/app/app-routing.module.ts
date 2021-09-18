import { NavitemComponent } from './navitem/navitem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewformComponent } from './newform/newform.component';


const routes: Routes = [
  {path:'newform',component:NewformComponent},
  {path:'navitem',component:NavitemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
