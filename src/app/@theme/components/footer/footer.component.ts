import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Based on <b><a href="https://akveo.com" target="_blank">Akveo</a></b> template, 2018</span>
    <div class="socials">
      <a href="https://github.com/gcvalderrama" target="_blank" class="ion ion-social-github"></a>            
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
