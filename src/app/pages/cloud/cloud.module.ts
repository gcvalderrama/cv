import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CloudRoutingModule, routedComponents } from './cloud-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    CloudRoutingModule,    
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CloudModule { }
