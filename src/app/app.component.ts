import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StorageService } from './shared/services/storage.service';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

//So we can have it classified
export enum SocialLoginMethods {
  Google = 'google',
  Facebook = 'facebook',
  Github = 'github',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  socialLoginMethods = SocialLoginMethods;
  messages: Message[] = [];

  constructor(private readonly fb: FormBuilder, private readonly storageService: StorageService, private readonly authService: AuthService, private readonly router: Router, private messageService: MessageService) {}

  get loggedIn() : boolean {
    // return this.authService.getCurrentUser() != null; //It is a bit slow to detect it on first instance
    return this.storageService.isLoggedIn(); //In case we use localStorage
  } 

  //Instead of using lots of methods, I prefer to unify it (just a way, you can vary it)
  socialLogin(socialLoginMethod: SocialLoginMethods) {
    this.authService.socialLogin(socialLoginMethod).then((userCredential) => {
      userCredential.user.getIdToken(true).then((token) => {
        this.storageService.saveUser({
          email: userCredential.user.email!,
          token: token
        });
        this.router.navigateByUrl('');
        this.messageService.add({ severity: 'info', summary: 'Logged in successfully', life: 3000 });
      });
    })
    .catch((err) => {
      console.error(err);
      this.messageService.add({ severity: 'error', summary: 'Something went wrong', detail: 'Try it again', life: 3000 });
    });
  }

  logout() {
    this.authService.logout();
    this.messageService.add({ severity: 'info', summary: 'Logged out', life: 3000 });
  }
}
