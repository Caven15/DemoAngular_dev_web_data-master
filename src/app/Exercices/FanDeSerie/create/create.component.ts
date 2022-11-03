import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fan } from 'src/app/Shared/models/fan.model';
import { FanServiceService } from 'src/app/Shared/Services/fan-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private _formBuilder : FormBuilder,
    private _fanService : FanServiceService,
    private _router : Router
    ) { }

    FanCreateForm : FormGroup;
    fan: Fan;

  ngOnInit(): void {

    this.FanCreateForm = this._formBuilder.group({
      Nom : [null, [Validators.required]],
      BirthDate : [null, [Validators.required]],
      SerieFav : [null, [Validators.required]]
    })

  }

  Submit(){


    this.fan = {
      Id : 0,
      Nom : this.FanCreateForm.value.Nom,
      BirthDate : this.FanCreateForm.value["BirthDate"],
      SerieFav : this.FanCreateForm.value["SerieFav"]
    }

    this._fanService.Create(this.fan);

    this._router.navigate(["fan/list"])

  }

}
