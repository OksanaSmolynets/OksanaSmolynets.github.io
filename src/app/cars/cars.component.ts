import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  // canAddCar = false;
  // constructor (){
  //   setTimeout(()=>{
  //     this.canAddCar = true
  //   }, 4000)
  // }
  addCarStatus = '';
  addCar(){
    this.addCarStatus = "Машина додана"
  }
  inputText = ''
  // onKeyUp(event: Event){
  //   console.log(event)
  //   this.inputText = (<HTMLInputElement>event.target).value;    
  // }
  onKeyUp(value){
    console.log(value)
    this.inputText = value;    
  }
}
