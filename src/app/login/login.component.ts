import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mydob: string = null;
  constructor() { }
  ngOnInit(): void {

  }

  dateSelected(val) {
    this.mydob= val;
  }

  onsubmit(form){
    if(form.valid){
      alert('Submitted Successfully');
      form.reset();
    }
  }

}
