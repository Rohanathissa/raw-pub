import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data = [
    {
      id: 1,
      name: 'Abc',
      email: 'abc@mail.com',
      isExpand: false,
      address: [
        {
          add1: 'Delhi',
          add2: 'Bangalore',
        }
      ]
    },
    {
      id: 2,
      name: 'Xyz',
      email: 'xyz@mail.com',
      isExpand: false,
      address: [
        {
          add1: 'Mumbai',
          add2: 'Pune',
        }
      ]
    },
    {
      id: 3,
      name: 'ijk',
      email: 'ijk@mail.com',
      isExpand: false,
      address: [
        {
          add1: 'Chennai',
          add2: 'Bangalore',
        }
      ]
    },
    {
      id: 4,
      name: 'def',
      email: 'def@mail.com',
      isExpand: false,
      address: [
        {
          add1: 'Kolkata',
          add2: 'Hyderabad',
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
