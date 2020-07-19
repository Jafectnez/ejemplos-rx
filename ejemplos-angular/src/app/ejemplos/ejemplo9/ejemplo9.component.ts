import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-ejemplo9',
  templateUrl: './ejemplo9.component.html',
  styleUrls: ['./ejemplo9.component.css']
})
export class Ejemplo9Component implements OnInit {

  countExample: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.countExample = [];
  }

  countOperator(): void {
    const array = of(1, 10, 'Hello World', true, 2.5);
    const result = array.pipe(count());

    result.subscribe(item => {
      this.countExample.push(item);
    });
  }
}
