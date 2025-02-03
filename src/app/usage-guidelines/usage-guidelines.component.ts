import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-usage-guidelines',
    templateUrl: './usage-guidelines.component.html',
    styleUrls: ['./usage-guidelines.component.scss'],
    standalone: false
})
export class UsageGuidelinesComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  onMouseMove(elementName: string, e: any) {
    const element = document.querySelector("#" + elementName);
    if (element) {
      element.setAttribute("style", `background-position-x: ${-0.1*e.layerX}px;background-position-y: ${-0.60*e.layerY}px`);
      console.log(`${-e.clientX}px`);
      console.log(e);
    }
  }
}
