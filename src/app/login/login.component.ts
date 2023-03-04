
import { Component, OnInit, Inject } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string = "";
password: string = "";
msg: string = "";
  
constructor(@Inject(LoginService) private ls:LoginService) 
{

 }

  ngOnInit(): void {
  }
  CheckLoginDetails(frm:any){
    if(frm.valid){
      if (this.ls.checkUserDetails(this.username, this.password) == true) {
        this.msg = "User Details are Correct";
      } else {
        this.msg = "Please check username/password";
      }
    }
    else{
      this.msg ="Invalid form"
    }
    
  }

}
