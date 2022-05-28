import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['patricio fuenzalida', [Validators.required]],
    email: ['patricio@web.cl', [Validators.required, Validators.email]],
    password: ['123', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  registro(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
    this.router.navigateByUrl('/dashboard');
  }

}
