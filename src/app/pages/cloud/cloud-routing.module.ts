import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudComponent } from './cloud.component';
import { AWSComponent } from './aws/aws.component';
import { AzureComponent } from './azure/azure.component';
import { GoogleComponent } from './google/google.component';
const routes: Routes = [{
  path: '',
  component: CloudComponent,
  children: [ 
    {
        path: 'aws',
        component: AWSComponent,
    },
    {
        path: 'azure',
        component: AzureComponent,
    },
    {
        path: 'google',
        component: GoogleComponent,
    },
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
export class CloudRoutingModule {

}

export const routedComponents = [
    CloudComponent, AWSComponent, AzureComponent, GoogleComponent, 
 ];
