import { Component, ViewChild, ElementRef } from '@angular/core';
import { BuiltinType } from '@angular/compiler';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  cache: number;
  operator: string;
  freshresult: boolean;
  @ViewChild('display', { static: false }) display: ElementRef;

  constructor() {
    this.cache = 0;
    this.operator = '';
  }

  ngAfterViewInit() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        this.clickHander(event);
      })
    });
  }

  clickHander(event) {
    console.log(event.target.id);
    switch (event.target.id) {
      case 'add':
        this.cache = this.display.nativeElement.innerHTML;
        this.display.nativeElement.innerHTML = '';
        this.operator = 'add';
        break;
      case 'subtract':
        this.cache = this.display.nativeElement.innerHTML;
        this.display.nativeElement.innerHTML = '';
        this.operator = 'subtract';
        break;
      case 'multiply':
        this.cache = this.display.nativeElement.innerHTML;
        this.display.nativeElement.innerHTML = '';
        this.operator = 'multiply';
        break;
      case 'divide':
        this.cache = this.display.nativeElement.innerHTML;
        this.display.nativeElement.innerHTML = '';
        this.operator = 'divide';
        break;
      case 'dot':
        this.display.nativeElement.innerHTML += event.target.innerText;
        break;
      case 'enter':
        this.display.nativeElement.innerHTML = this.calculate(this.display.nativeElement.innerHTML);
        this.cache = 0;
        this.operator = '';
        this.freshresult = true;
        //this.display.nativeElement.innerHTML = eval("this."+this.operator+"(this.cache,this.display.nativeElement.innerHTML);");
        break;
      default:
        if (this.freshresult) {
          this.display.nativeElement.innerHTML = '';
        }
        this.display.nativeElement.innerHTML += event.target.innerText;
        break;
    }    
  }

  add(arg0: number, arg1: number): number {
    return +arg0 + +arg1;
  }

  subtract(arg0: number, arg1: number): number {
    return arg0 - arg1;
  }

  divide(arg0: number, arg1: number): number {
    return arg0 / arg1;
  }

  multiply(arg0: number, arg1: number): number {
    return arg0 * arg1;
  }

  calculate(arg0: number): number {
    var tmp = 0;
    tmp = eval("this."+this.operator+"(this.cache,arg0);");
    console.log(tmp);
    return tmp;
  }
}
