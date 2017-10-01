import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

name:string;
email:string;
mobile:number;
data:Object;

@Output() passvalues = new EventEmitter<Object>();




  constructor() { 

  	this.name="Senthil";
  	this.email="senthil@gmail.com";
  	this.mobile = 9894338170;

  }

  onclick(){

  	this.data = {name:this.name,email:this.email,mobile:this.mobile};
  	this.passvalues.emit(this.data);

  }



}
