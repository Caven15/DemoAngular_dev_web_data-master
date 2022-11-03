import { Injectable } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { Fan } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanServiceService {

  private FakeDbFan : Fan[] =
  [
    {Id : 1 ,Nom : "Samuel", BirthDate : new Date(), SerieFav : "Stranger things"}
  ]

  constructor() { }

  //CRUD

  Create(fan : Fan){
    fan.Id = this.FakeDbFan[this.FakeDbFan.length -1].Id + 1
    this.FakeDbFan.push(fan);
  }

  ReadOne(id : number) : Fan{



    let fan = this.FakeDbFan.find((fan) => fan.Id == id)


    return fan;

    }


  ReadAll() : Fan[] {
    return this.FakeDbFan;
  }

  Update(id : number, fanUpdated : Fan){
    this.FakeDbFan.splice(this.FakeDbFan.findIndex((fan) => fan.Id == id), 1, fanUpdated)
  }

  Delete(id : number){

    this.FakeDbFan.splice(this.FakeDbFan.findIndex((fan) => fan.Id == id), 1)

  }


}
