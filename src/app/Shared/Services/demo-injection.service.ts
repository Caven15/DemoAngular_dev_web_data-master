import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoInjectionService {

  constructor(
    
  ) { }


  test(){
    console.log("Mon service foncrionne !")
  }
}
