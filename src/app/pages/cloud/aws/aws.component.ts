import { Component } from '@angular/core';

@Component({
  selector: 'ngx-cloud-aws',
  styleUrls: ['./aws.component.scss'],
  templateUrl: './aws.component.html',
})
export class AWSComponent {
  cameras: any[] = [{
    title: 'AWS Solution Architect',
    source: 'assets/images/solution_architect.png',
  },{
    title: 'AWS Developer Associate',
    source: 'assets/images/aws_developer.png',
  },];

  
}