import { Component } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerData:User = {
    Username: "",
    Password: ""
  };
  registerForm!:FormGroup;
  submitted:boolean = false;
  flag:boolean = false;
  constructor(private fb:FormBuilder, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', Validators.required]
    });
  }

  get RegisterFormControl(){
    return this.registerForm.controls;
  }

  Register(){
    if (this.registerForm.valid){
      this.registerData.Username = this.registerForm.controls['username'].value;
      this.registerData.Password = this.registerForm.controls['password'].value;
      this.authService.RegisterServ(this.registerData).subscribe(data => {
        if (data){
          this.submitted = true;
          setTimeout(() => {
            this.router.navigateByUrl('/Login');
          }, 3000);
        }
        else {
          this.flag = true;
        }
      });
    };
  }
}
