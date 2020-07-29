import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <app-ng-style></app-ng-style>
     <app-css></app-css>
     <app-clases></app-clases>

     <p [appResaltado]="'red'">
       Hola Mundo
     </p>

     <app-ng-swich></app-ng-swich>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
