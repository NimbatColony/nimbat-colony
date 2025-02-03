import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
    selector: 'app-discord',
    templateUrl: './discord.component.html',
    styleUrls: ['./discord.component.scss'],
    standalone: false
})
export class DiscordComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private doc: Document) {
    this.doc.location.href = 'https://discord.gg/CTjE4hVErm';
   }

  ngOnInit(): void {
  }

}
