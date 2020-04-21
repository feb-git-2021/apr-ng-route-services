import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  
    <h6>
     This a TEST Component in test folder
    </h6>
    <p (click)="test()">{{title}} using interpolation syntax</p>
    <img [src]="" alt="{{title}}" [title]="cHeight"/>
    <button class="btn btn-primary">Test</button>
  `,
  styles: [
    `
    h6{
      color:white;
      background-color:red;
    }
    p{
      cursor:pointer;
    }
    `
  ]
})
export class TestComponent implements OnInit {
  title:string='Angular Fundamental Concepts'
  cWidth:number=200
  cHeight:number=100

  constructor() { }

  ngOnInit(): void { 
      //component life cycle hook method
      console.log('Ngon init method of Test component executed')
  }

  test():void{
    console.log('Test method called')
    
  }

}
