import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CodeRoutingModule, routedComponents } from './code-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    CodeRoutingModule,    
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CodeModule { }
