import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  partners = [
    { name: 'SUDLER & HENNESSEY', imageUrl: 'src\assets\images\clientspage\sudler.png' },
    { name: 'infomiez', imageUrl: 'assets\images\clientspage\clientLogos\sudler.png' },
    { name: 'Hudson Data inc', imageUrl: 'assets/partner3.jpg' },
    { name: 'IntraMed', imageUrl: 'assets/partner3.jpg' },
    { name: 'Medforce', imageUrl: 'assets/partner3.jpg' },

  ];

}
