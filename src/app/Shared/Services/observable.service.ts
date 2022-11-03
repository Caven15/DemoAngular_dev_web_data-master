import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService implements OnInit {

  constructor() { }

  myObservable : Subject<string> = new Subject<string>();

  ngOnInit() : void {


  }

  onclick(){
    this.myObservable.error("pomme")
  }

}
