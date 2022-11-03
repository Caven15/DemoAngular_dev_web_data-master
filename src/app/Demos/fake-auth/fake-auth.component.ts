import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from 'src/app/Shared/Services/fake-auth.service';

@Component({
  selector: 'app-fake-auth',
  templateUrl: './fake-auth.component.html',
  styleUrls: ['./fake-auth.component.scss']
})
export class FakeAuthComponent implements OnInit {

  constructor() { }

  isConnected : boolean = false

  ngOnInit(): void {
  }

  connexion(){
    this.isConnected = true
    sessionStorage.setItem("isConnected" , "1")
  }

  logout(){
    this.isConnected = false
    sessionStorage.clear()
  }

}
