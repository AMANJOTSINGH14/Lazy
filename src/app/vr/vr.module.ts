import { NgModule } from '@angular/core';
import { VrRoutingModule } from './vr-routing.module';
import { SharedModule } from '../navigation/shared.module';
import { VComponent } from './v/v.component';


@NgModule({
  declarations: [
    VComponent
  ],
  imports: [
   SharedModule,
    VrRoutingModule
  ]
})
export class VrModule { }
