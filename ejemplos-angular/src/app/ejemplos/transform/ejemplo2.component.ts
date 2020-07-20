import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit {

  mapExample: Array<any>;
  mapIterableExample: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.mapExample = [];
    this.mapIterableExample = [];
  }

  transformMap(): void {
    const array = [10, 20, 30];
    const result = from(array).pipe(map((item: number) => {
      return item * 2;
    }));

    result.subscribe(item => {
      this.mapExample.push(item);
    });
  }

  transformMapSimple(): void {
    this.mapIterableExample = [1, 2, 3].map((item: number) =>  item * 10 );
  }

}
