import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersons: SalesPerson[] = [
    new SalesPerson("Joe", "Doe", "joedoe@email.com", 1000),
    new SalesPerson("Martin", "Noble", "martinnoble@email.com", 232),
    new SalesPerson("Claire", "Murphy", "murphy.claire@email.com", 25000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
