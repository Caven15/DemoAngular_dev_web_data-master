import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-snapshot-param',
  templateUrl: './snapshot-param.component.html',
  styleUrls: ['./snapshot-param.component.scss']
})
export class SnapshotParamComponent implements OnInit {

  dataSnapshot :number = 0

  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSnapshot = this._activatedRoute.snapshot.params['idUtilisateur']
  }

}
