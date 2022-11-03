import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-one-way',
  templateUrl: './binding-one-way.component.html',
  styleUrls: ['./binding-one-way.component.scss']
})
export class BindingOneWayComponent implements OnInit {
  // délcarations de ma variables a l'interieur de mon composant
  public maVariable = "Bonjour !!!"
  constructor() { }

  ngOnInit(): void {
  }

}
