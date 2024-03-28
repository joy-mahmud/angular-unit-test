import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-unit-test';
  showmsg(msg:any): string{
    return msg
  }

  addition(num1:number,num2:number){
    return num1+num2
  }
}
