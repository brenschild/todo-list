import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(user, password){
    if(user==="in28minutes" && password==="dummy"){
      sessionStorage.setItem('authenticateUser', user);
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user == null);
  }

  logoutUser(){
    sessionStorage.removeItem('authenticateUser');
  }
}
