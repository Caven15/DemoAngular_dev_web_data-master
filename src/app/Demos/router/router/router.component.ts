import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements OnInit {

  idUtilisateur : number = 5

  constructor(private _Router : Router, private _form : FormsModule) { }

  ngOnInit(): void {
  }

  redirectToChrono(){
    this._Router.navigate(['exoChrono'])
  }

  redirectTosnapshot(){
    this._Router.navigate(['snapshot/' + this.idUtilisateur])
  }
}
