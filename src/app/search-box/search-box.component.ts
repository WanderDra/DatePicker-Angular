import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @ViewChild('searchBox', {static:true}) searchBox?: ElementRef;

  search: string = '';

  data = new Observable<Array<number>>((observer) => {
    observer.next([1, 2, 3, 4, 5]);
  });

  constructor() { }

  ngOnInit(): void {
    fromEvent(this.searchBox?.nativeElement, 'keyup').pipe(
      debounceTime(500),
      tap(() => {
        this.data.subscribe((data) => {
          console.log(data);
        });
      })
    ).subscribe();
  }

}
