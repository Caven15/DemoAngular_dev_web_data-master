import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  ouvert : boolean = false
  listeDonnee : string[] = ["pommes", "poires", "bananes", "oranges"]

  listeUtilisateurs : {nom : string, role : string}[] =[
    {nom : "Alex", role : "Admin"},
    {nom : "Axel", role : "user"},
    {nom : "Jessica", role : "user"},
    {nom : "Noémie", role : "user"},
    {nom : "Pierre", role : "user"},
    {nom : "Aurélien", role : "user"},
    {nom : "Imen", role : "user"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  inversion() : void {
    this.ouvert = !this.ouvert
  }
}
