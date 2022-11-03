import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from 'src/app/Shared/models/fan.model';
import { FanServiceService } from 'src/app/Shared/Services/fan-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(
    private _fanService : FanServiceService,
    private _activatedRoute : ActivatedRoute,
    private _formBuilder : FormBuilder,
    private _router : Router
    ) { }

  fan : Fan;
  idFan : number
  UpdateFormGroup : FormGroup;

  ngOnInit(): void {

    this.idFan = this._activatedRoute.snapshot.params["idFan"]

    this.fan = this._fanService.ReadOne(this.idFan)

    this.UpdateFormGroup = this._formBuilder.group({
      Nom : [null, [Validators.required]],
      BirthDate : [null, [Validators.required]],
      SerieFav : [null, [Validators.required]]
    })


  }

  Submit(){

    this.fan = {
      Id : this.idFan,
      Nom : this.UpdateFormGroup.value["Nom"],
      BirthDate : this.UpdateFormGroup.value["BirthDate"],
      SerieFav : this.UpdateFormGroup.value["SerieFav"]
    }

    this._fanService.Update(this.idFan, this.fan)

    this._router.navigate(["fan/list"])

  }

}
