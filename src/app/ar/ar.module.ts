import { NgModule } from '@angular/core';
import { ArRoutingModule } from './ar-routing.module';
import { SharedModule } from '../navigation/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ArRoutingModule
  ]
})
export class ArModule { }
