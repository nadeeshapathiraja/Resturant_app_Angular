import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
