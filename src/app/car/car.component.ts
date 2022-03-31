import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent  {
carName = "Mercedes";
carYear = "2021";

getCarName() {
return this.carName
}
 

}
