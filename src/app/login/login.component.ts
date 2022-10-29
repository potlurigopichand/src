import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  document: any;

  constructor(@Inject(DOCUMENT) document:Document) { this.document=document}
  ngOnInit(): void {}
   
  
  login(){
    if (this.document.getElementById('name').value=='gopi'&&this.document.getElementById('password').value=='1234') {
      alert('submitted')
      
    }else{
      alert('error Username/Password')
    }
   } 
  
}

