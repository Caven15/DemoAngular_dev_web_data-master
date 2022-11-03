import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Fan } from 'src/app/Shared/models/fan.model';
import { FanServiceService } from 'src/app/Shared/Services/fan-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private _fanService : FanServiceService,private _router :  Router, private _activatedRoute: ActivatedRoute) { }

  fan : Fan;

  ngOnInit(): void {

    let idFan = this._activatedRoute.snapshot.params["idFan"]

    this.fan = this._fanService.ReadOne(idFan);

  }

  RedirectionToList(){
    this._router.navigate(["fan/list"])
  }

}
