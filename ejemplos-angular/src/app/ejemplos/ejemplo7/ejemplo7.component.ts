import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-ejemplo7',
  templateUrl: './ejemplo7.component.html',
  styleUrls: ['./ejemplo7.component.css']
})
export class Ejemplo7Component implements OnInit {
  toArrayExample;

  constructor() { }

  ngOnInit(): void {
  }

  toArrayOperator(): void {
    const source = interval(1000);
    const example = source.pipe(
      take(10),
      toArray()
    );

    example.subscribe(result => {
      this.toArrayExample = result;
    });
  }

}
