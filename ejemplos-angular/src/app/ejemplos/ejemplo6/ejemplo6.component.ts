import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-ejemplo6',
  templateUrl: './ejemplo6.component.html',
  styleUrls: ['./ejemplo6.component.css']
})
export class Ejemplo6Component implements OnInit {

  catchErrorExample: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.catchErrorExample = [];
  }

  catchErrorOperator(): void {
    of(1, 2, 3, 4, 5).pipe(
      map(n => {
        if (n === 4) {
          throw new Error('four!');
        }

        return n;
      }),
      catchError(err => of('I', 'II', 'III', 'IV', 'V')),
    )
    .subscribe(item => {
      this.catchErrorExample.push(item);
    });
  }

}
