import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notable-nimbats',
  templateUrl: './notable-nimbats.component.html',
  styleUrls: ['./notable-nimbats.component.scss']
})
export class NotableNimbatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onMouseMove(elementName: string, e: any) {
    const element = document.querySelector("#" + elementName);
    if (element != null) {
      if (elementName == 'fidget') {
        element.setAttribute("style", `background-position-x: ${-0.325 * e.layerX}px;background-position-y: ${-2.15 * e.layerY + 290}px`);
        console.log(`${-e.clientX}px`);
        console.log(e);
      }
      if (elementName == 'lyra') {
        element.setAttribute("style", `background-position-x: ${-0.345 * e.layerX + 100}px;background-position-y: ${-1.475* e.layerY + 555}px`);
        console.log(`${-e.clientY}px`);
        console.log(e);
      }
      if (elementName == 'frequency') {
        element.setAttribute("style", `background-position-x: ${-0.335 * e.layerX + 100}px;background-position-y: ${-1.425* e.layerY + 155}px`);
        console.log(`${-e.clientY}px`);
        console.log(e);
      }
      if (elementName == 'maia') {
        element.setAttribute("style", `background-position-x: ${-0.35 * e.layerX + 100}px;background-position-y: ${-1* e.layerY + 225}px`);
        console.log(`${-e.clientY}px`);
        console.log(e);
      }
      if (elementName == 'nohra') {
        element.setAttribute("style", `background-position-x: ${-0.35 * e.layerX + 150}px;background-position-y: ${-.65* e.layerY + 155}px`);
        console.log(`${-e.clientY}px`);
        console.log(e);
      }
      if (elementName == 'wavey') {
        element.setAttribute("style", `background-position-x: ${-0.3 * e.layerX + 75}px;background-position-y: ${-1.15* e.layerY + 400}px`);
        console.log(`${-e.clientY}px`);
        console.log(e);
      }
    }
  }
}
