import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

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

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  registro(){
    const {name, email, password} = this.miFormulario.value;
    this.authService.registro(name, email, password)
    .subscribe(ok=>{
      console.log(ok);
      if(ok===true){
        this.router.navigateByUrl('/dashboard');
      }else{
        Swal.fire('Error', ok, 'error');
      }
    })
  }

}
