import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private currentUserSubject = new BehaviorSubject<UserWAdmin>({} as UserWAdmin);
  // public currentUser = this.currentUserSubject.asObservable();

  // private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  // public isLoggedIn = this.isLoggedInSubject.asObservable();

  // jwtHelper = new JwtHelperService();

  constructor(private http:HttpClient) { }

  RegisterServ(registerData:User):Observable<boolean> {
    return this.http.post<boolean>("https://authapp.jollystone-4c42e2d6.eastus2.azurecontainerapps.io/register", registerData).pipe(map((response:any) => {
      if (response) {
        return true;
      } else {
        return false;
      }
    }));
  }

  LoginServ(loginData:User):Observable<boolean>{
    return this.http.post<boolean>("https://authapp.jollystone-4c42e2d6.eastus2.azurecontainerapps.io/login", loginData).pipe(map((response: any) => {
      if (response){
        localStorage.setItem('token', response.jwtToken);
        localStorage.setItem('username', response.username);
        //this.populateUserInfoFromToken();
        return true;
      }
      else{
        return false;
      }
    }));
  }

  Logout(){
    localStorage.removeItem('token');
    // this.currentUserSubject.next({} as UserWAdmin);
    // this.isLoggedInSubject.next(false);
  }
}
