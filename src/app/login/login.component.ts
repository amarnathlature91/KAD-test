import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const message = params['message'];
    });
  }

  me: string = this.route.snapshot.params['message'];
}
