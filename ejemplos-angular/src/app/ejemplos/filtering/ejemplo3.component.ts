import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.css']
})
export class Ejemplo3Component implements OnInit {

  filterExample: Array<any>;
  filterExample2: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.filterExample = [];
    this.filterExample2 = [];
  }

  filterOperator(): void {
    const array = from([1, 2, 5, 4, 8, 7, 9]);
    const result = array.pipe(filter(item => item % 2 === 0));

    result.subscribe((item: number) => {
      this.filterExample.push(item);
    });
  }

  filterOperator2(): void {
    const array = from([1, 2, 5, 4, 8, 7, 9]);
    const result = array.pipe(filter(item => item % 2 !== 0));

    result.subscribe((item: number) => {
      this.filterExample2.push(item);
    });
  }
}
