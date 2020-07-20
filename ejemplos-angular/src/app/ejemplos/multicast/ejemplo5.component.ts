import { Component, OnInit } from '@angular/core';
import { from, Observable, Subject, ConnectableObservable } from 'rxjs';
import { tap, map, multicast, take } from 'rxjs/operators';

@Component({
  selector: 'app-ejemplo5',
  templateUrl: './ejemplo5.component.html',
  styleUrls: ['./ejemplo5.component.css']
})
export class Ejemplo5Component implements OnInit {

  tapExample: Array<any>;
  tapResultExample: Array<any>;

  subcription: Array<any>;
  multicasts: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.tapExample = [];
    this.tapResultExample = [];

    this.subcription = [];
    this.multicasts = [];
  }

  tapOperator(): void {
    const array = from([1, 2, 3]);
    const result = array.pipe(
      tap((item: number) => {
        this.tapExample.push(item);
      }),
      map((item: number) => {
        return item * 10;
      })
    );

    result.subscribe((item: number) => {
      this.tapResultExample.push(item);
    });
  }

  multicastOperator(): void {
    const observable = new Observable(function subscribe(subscriber) {
      try {
        subscriber.next(Math.random());
      } catch (e) {
        subscriber.error(e);
      }
    });

    observable.subscribe(item => {
      this.subcription.push(item);
    });

    observable.subscribe(item => {
      this.subcription.push(item);
    });

    const multicastObservable = observable.pipe(multicast(new Subject()));

    multicastObservable.subscribe(item => {
      this.multicasts.push(item);
    });

    multicastObservable.subscribe(item => {
      this.multicasts.push(item);
    });

    (multicastObservable as ConnectableObservable<any>).connect();
  }
}
