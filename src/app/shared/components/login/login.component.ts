import { Component } from '@angular/core';
import { StylesModule } from '../../styles/styles.module';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [StylesModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  visibleLoginPopup: boolean = false;
  form: FormGroup = this.fb.group({
    username: [{value: 'rubenalarcongalvez', disabled: true}, Validators.required],
    password: ['', Validators.required],
  });;
  loginFailed: boolean = false;
  errorMessages: Message[] = [{ severity: 'info', detail: 'Wrong password' }];

  constructor(private fb: FormBuilder, private storageService: StorageService, private authService: AuthService) {}

  public get loggedIn() : boolean {
    return this.storageService.isLoggedIn();
  }  

  login() {
    if (this.form.valid) {
      this.authService.login(this.form.get('username')?.value, this.form.get('password')?.value).subscribe({
        next: (token: string) => {
          this.loginFailed = false;
          this.storageService.saveUser({username: this.form.get('username')?.value, token: token});
        },
        error: (err) => {
          this.loginFailed = true;
        }
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
