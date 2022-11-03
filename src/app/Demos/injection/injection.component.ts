import { Component, OnInit } from '@angular/core';
import { DemoInjectionService } from 'src/app/Shared/Services/demo-injection.service';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.scss']
})
export class InjectionComponent implements OnInit {

  constructor(private _demoI : DemoInjectionService) { }

  ngOnInit(): void {
    this._demoI.test()
  }

}
