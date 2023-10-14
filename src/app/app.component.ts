import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(1000)]),
      transition(':leave', animate(500, style({ opacity: 0 }))),
    ]),
  ]
})
export class AppComponent {
  title = 'kad_e_tech';
  

 
  
}
