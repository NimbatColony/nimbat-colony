import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
    selector: 'app-stream',
    templateUrl: './stream.component.html',
    styleUrls: ['./stream.component.scss'],
    standalone: false
})
export class StreamComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private doc: Document) {
    this.doc.location.href = 'https://picarto.tv/TheNimbatColony';
   }

  ngOnInit(): void {
  }

}
