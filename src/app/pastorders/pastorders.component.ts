import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

//Step 1: Create an Interface for object type with variables
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

  //Step 2: Create an object array
  pastOrderes: Pastorders[] = [];

  //Step 3:
    //a) Import httpClientModule in app.module.ts file
    //b) Create Constructor arguments for http variables(Automaticaly Inject the Objects)
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
     //Setp 4: Load objects from wb/API(Url ekata call karala data set kirima)
    this.http.get<Pastorders[]>('')
    //warahan Atyulata pass karanawa url eka
  }



  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,

  ]);
  hide = true;
  panelOpenState = false;


}
