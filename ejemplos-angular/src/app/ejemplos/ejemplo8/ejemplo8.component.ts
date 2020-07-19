import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-ejemplo8',
  templateUrl: './ejemplo8.component.html',
  styleUrls: ['./ejemplo8.component.css']
})
export class Ejemplo8Component implements OnInit {
  findExample: number;
  findExample2: number;

  constructor() { }

  ngOnInit(): void {
  }

  findOperator(): void {
    const array = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
    const result = array.pipe(find((item: number) => item === 10));

    result.subscribe((item: number) => {
      this.findExample = item;
    });
  }

  simpleFindOperator(): void {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    this.findExample2 = array.find((item: number) => item === 10);
  }

}
