import { Component } from '@angular/core';
import { StylesModule } from '../../styles/styles.module';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  login() {
    
  }
}
