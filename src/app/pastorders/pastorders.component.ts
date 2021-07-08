import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

//1. Create an Interface for object type with variables
export interface Pastorders{
  id: string;
  date: string;
  name: string;
  address: string;
  phone: string;
  // order: string;
  price: number;

}

@Component({
  selector: 'app-pastorders',
  templateUrl: './pastorders.component.html',
  styleUrls: ['./pastorders.component.css']
})
export class PastordersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,

  ]);
  hide = true;
  panelOpenState = false;


}
