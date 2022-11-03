import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demos-pipe',
  templateUrl: './demos-pipe.component.html',
  styleUrls: ['./demos-pipe.component.scss']
})
export class DemosPipeComponent implements OnInit {

  nom : string = "Jean"
  somme : number = 345
  dateNaissance = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
