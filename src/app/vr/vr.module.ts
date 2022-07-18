import { NgModule } from '@angular/core';
import { VrRoutingModule } from './vr-routing.module';
import { SharedModule } from '../navigation/shared.module';


@NgModule({
  declarations: [],
  imports: [
   SharedModule,
    VrRoutingModule
  ]
})
export class VrModule { }
