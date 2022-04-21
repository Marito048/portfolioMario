import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'bootstrap-popup';
  loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password:  ['', [Validators.required, Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group({
          deviceId: ['17867868768'],
          deviceType: ['DEVICE_TYPE_ANDROID'],
          notificationToken:['6765757eececc34']
        })

      });
  }

  get emailField(): any {
    return this.loginForm.get('email');
  }

  get passwordField(): any {
    return this.loginForm.get('password');
  }

  loginFormSubmit(): void {
    console.log(this.loginForm.value);
    // Call Api
  }
}
