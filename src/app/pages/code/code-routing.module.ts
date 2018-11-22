import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeComponent } from './code.component';
import { FunctionsComponent } from './functions/functions.component';
const routes: Routes = [{
  path: '',
  component: CodeComponent,
  children: [ 

  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CodeRoutingModule {

}

export const routedComponents = [
    CodeComponent, FunctionsComponent
 ];
