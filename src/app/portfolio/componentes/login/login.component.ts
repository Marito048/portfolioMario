import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/portfolio/servicios/interface/Persona';
import { UserService } from 'src/app/portfolio/servicios/apirest/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  persona!: Persona;
  formulario!: FormGroup; // crear una variable para el formulario... TODO ESTA EN LA MASTERCLASS 8.1

  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { //inyectar formBuilder para los formularios reactivos
    // crea el formulario con los campos necesarios
    this.formulario = this.formBuilder.group({
      username: ['', Validators.required], 
      password: ['', Validators.required]
    });
   }

   get username() {
    return this.formulario.get('username');
  }

    get password() {
    return this.formulario.get('password');
  }

  ngOnInit(): void {
    //probablemente acá quiera cargar algo...
  }

  loginFalso() {
    //pedir al post...    
    this.userService.login("olivia", "1234").subscribe(
      data => {
        this.persona = data;
        console.log(this.persona);
        localStorage.setItem("persona", JSON.stringify(this.persona));
        this.volverAlHome();
      }
    );
  }

  login() {
    //pedir al post...    
    this.userService.login( this.formulario.value.username, this.formulario.value.password).subscribe(
      data => {
        this.persona = data;
        console.log(this.persona);
        localStorage.setItem("persona", JSON.stringify(this.persona));
        this.volverAlHome();
      }
    );
  }

  volverAlHome() {
    this.router.navigate(['']);
  }
}


// export class LoginComponent implements OnInit {
//   title = 'bootstrap-popup';
//   loginForm!:FormGroup;

//   constructor(private formBuilder:FormBuilder) { }

//   ngOnInit(): void {
//     this.loginForm =this.formBuilder.group(
//       {
//         email: ['', [Validators.required, Validators.email]],
//         password:  ['', [Validators.required, Validators.minLength(8)]],
//         deviceInfo:this.formBuilder.group({
//           deviceId: ['17867868768'],
//           deviceType: ['DEVICE_TYPE_ANDROID'],
//           notificationToken:['6765757eececc34']
//         })

//       });
//   }

//   get emailField(): any {
//     return this.loginForm.get('email');
//   }

//   get passwordField(): any {
//     return this.loginForm.get('password');
//   }

//   loginFormSubmit(): void {
//     console.log(this.loginForm.value);
//     // Call Api
//   }
// }
