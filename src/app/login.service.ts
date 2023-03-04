import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userinfo:User[] = [
    new User("Ramesh","12345"),
    new User("Mahesh","12345"),
    new User("Suresh","12345")
  ];
  constructor() { }
  checkUserDetails(uname:string,pswd:string): boolean
  {
     var ucheck = false;
     for(let i = 0;i<this.userinfo.length;i++){
      if (this.userinfo[i].username == uname && this.userinfo[i].password == pswd) {
        ucheck = true;
      } 
      return ucheck;
     }
    
  }
}
