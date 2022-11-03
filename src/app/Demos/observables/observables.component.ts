import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { Subject } from 'rxjs';
import { ObservableService } from 'src/app/Shared/Services/observable.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor(private _observable : ObservableService) { }





  ngOnInit(): void {

    this._observable.myObservable.subscribe({
      next: (result : string) => console.log("Mon resultat a reussi : " + result),
      error: (err : string) => console.log("Le code a eu une erreur : " + err),
      complete: () => console.log("Code Terminé")
    })





  }

  onClick(){
    this._observable.onclick();
  }

}
