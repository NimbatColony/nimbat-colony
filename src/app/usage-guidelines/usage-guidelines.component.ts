import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage-guidelines',
  templateUrl: './usage-guidelines.component.html',
  styleUrls: ['./usage-guidelines.component.scss']
})
export class UsageGuidelinesComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  onMouseMove(elementName: string, e: any) {
    const element = document.querySelector("#" + elementName);
    if (element) {
      element.setAttribute("style", `background-position-x: ${-e.layerX}px;background-position-y: ${-e.layerY}px`);
      console.log(`${-e.clientX}px`);
      console.log(e);
    }
  }
}
