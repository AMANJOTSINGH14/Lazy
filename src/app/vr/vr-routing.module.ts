import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VComponent } from './v/v.component'
const routes: Routes = [
  {path:'v', component : VComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VrRoutingModule { }
