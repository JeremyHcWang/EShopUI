import { Component } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin:boolean = false;
  flag:boolean = false;
  loginData:User = {
    Username: "",
    Password: ""
  }

  constructor(private authService:AuthService, private router:Router) { }

  Login(form:NgForm){
    if (form.valid){
      this.loginData.Username = form.value.username;
      this.loginData.Password = form.value.password;
      this.authService.LoginServ(this.loginData).subscribe(data => {
        if (data){
          this.flag = true;
          setTimeout(() => {
            this.router.navigateByUrl('/products');
        }, 3000);
      }
      else{
        this.invalidLogin = true;
      };
    });
    }
  }

}
