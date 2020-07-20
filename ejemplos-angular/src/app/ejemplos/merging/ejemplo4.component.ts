import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css']
})
export class Ejemplo4Component implements OnInit {

  mergeOutput: number;

  constructor() { }

  ngOnInit(): void {
    this.mergeOutput = 0;
  }

  mergeOperator(): void {
    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(map((ev) => interval(1000)));
    const result = higherOrder.pipe(mergeAll());

    result.subscribe(item => {
      this.mergeOutput = item;
    });
  }
}
