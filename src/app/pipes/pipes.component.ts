import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  employeename: string = "Satyam Kumar";
  salary: number = 45000;
  n: number = 98256700;
  // x: number = 100;
  // x: number = 0.5;
  x: number = 0.25;
  dt:Date = new Date();
  //Date variable can be used to prnt date and time in different fromats
  person: Object = {"pname":"Kiran","age":"30","LOC":"Bangalore"};
  constructor() { }

  ngOnInit(): void {
  }

}
