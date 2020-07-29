import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  alerta = 'alert-danger';
  loading = false;

  propiedades: any = {
    danger: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(): void {
    this.loading = true;

    setTimeout(() =>  this.loading = false, 3000);
  }

}
