import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "online-classes",loadChildren : ()=> import('./online-classes/online-classes.module').then(mod=>mod.OnlineClassesModule)},
  { path: "ar",loadChildren : ()=> import('./ar/ar.module').then(mod=>mod.ArModule)},
  { path: "vr",loadChildren : ()=> import('./vr/vr.module').then(mod=>mod.VrModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
