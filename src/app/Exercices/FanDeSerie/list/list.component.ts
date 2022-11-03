import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from 'src/app/Shared/models/fan.model';
import { FanServiceService } from 'src/app/Shared/Services/fan-service.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  fans : Fan[] = [];

  constructor(private _fanService : FanServiceService, private _router : Router) { }

  ngOnInit(): void {

    this.fans = this._fanService.ReadAll();

  }

  RedirectionToCreate(){
    this._router.navigate(["fan/create"])
  }

  RedirectionToDetails(id : number){
    this._router.navigate(["fan/details/" + id])
  }

  RedirectionToUpdate(id : number){
    this._router.navigate(["fan/update/" + id])
  }

  Delete(id : number){
    this._fanService.Delete(id);
    //this._router.navigate["fan/list"]
  }
}
