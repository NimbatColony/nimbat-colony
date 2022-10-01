import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    document.getElementById('menu-button')?.click();
  }

  toggleSidenav(): void {
    this.toggleEvent.emit();
  }
}
