import { Component, OnInit } from '@angular/core';
import { from, of, fromEvent } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {

  ofExample: Array<any>;
  ofMultipleExample: Array<any>;
  fromExample: Array<any>;
  fromIterator: Array<any>;
  fromEventExample;

  constructor() { }

  ngOnInit(): void {
    this.ofExample = [];
    this.ofMultipleExample = [];
    this.fromExample = [];
    this.fromIterator = [];
  }

  createOf(): void {
    of(10, 20, 30)
    .subscribe(item => {
      this.ofExample.push(item);
    });
  }

  createOfMultiple(): void {
    of([1, 2, 3], 20, true, 8.4, 'Hello World')
    .subscribe(item => {
      this.ofMultipleExample.push(item);
    });
  }

  createFrom(): void {
    const array = [10, 20, 30];
    const result = from(array);

    result.subscribe(item => {
      this.fromExample.push(item);
    });
  }

  createFromGenerator(): void {
    function* generateDoubles(seed: number) {
      let i = seed;
      while (true) {
        yield i;
        i = 2 * i; // double it
      }
    }

    const iterator = generateDoubles(3);
    const result = from(iterator).pipe(take(10));

    result.subscribe(item => {
      this.fromIterator.push(item)
    });
  }

  createFromEvent(): void {
    const clicks = fromEvent(document, 'click');

    clicks.subscribe((item: MouseEvent) => {
      this.fromEventExample = `(${item.x}, ${item.y})`;
    });
  }

}
