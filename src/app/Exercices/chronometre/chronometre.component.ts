import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.scss']
})
export class ChronometreComponent implements OnInit {

  seconde : number = 0
  minute : number = 0
  timer : any

  constructor() { }

  ngOnInit(): void {
  }

  start(): void {
    this.timer = setInterval(() => {
      this.seconde++
      if (this.seconde == 60) {
        this.minute++
        this.seconde = 0
      }
    }, 1000)
  }

  pause(): void {
    clearInterval(this.timer)
  }

  reset(): void {
    this.seconde = 0
  }
}
