import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  constructor() { }

  ngOnInit(): void {
    this.employees=[{
      "id":1,
      "firstName": "John",
      "lastName":"Wick",
      "email":"Jwick46@hotmail.com",
      "contact":987-764-7643
    },
    {
      "id":2,
      "firstName": "Rock",
      "lastName":"Johnson",
      "email":"Rock@icon.com",
      "contact":965-477-9754
    }]
  }

}
