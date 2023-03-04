import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  personname:string="";
  gender:string="";
  msg:string="";
  pincode:number=0;
  location:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  ShowValues()
  {
      this.msg = "Name : " + this.personname + "<br />Gender : " + this.gender;
      this.msg += "<br />Location : " + this.location + "<br />Pincode : " + this.pincode;
  }
}
