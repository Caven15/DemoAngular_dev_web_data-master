import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  constructor() { }

  login(){
    sessionStorage.setItem("isConnected" , "1")
  }

  logout(){
    sessionStorage.clear()
  }

  etatConnexion(){
    return parseInt(sessionStorage.getItem("isConnected"))
  }
}
