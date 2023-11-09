import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../app_services/user.service';
import { UserAuthService } from '../app_services/user-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  isLogging: boolean = false;
  errorMessage: string = '';
  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService, private userAuthService: UserAuthService, private router: Router) { }


  onSubmit(loginForm: any) {
    this.isLogging = true;
    this.subscriptions.push(
      this.userService.login(loginForm).subscribe(
        (response: any) => {
          let authToken = response.body.token;
          this.userAuthService.setToken(authToken);
          this.userAuthService.storeAuthUserInCache(response.body.user);
          this.router.navigateByUrl('/dashboard');
        },
        (error: any) => {
          this.errorMessage = "Please check credentials and try again.";
          location.reload();
        }
      )
    )
    this.isLogging = false;
  }
}   
