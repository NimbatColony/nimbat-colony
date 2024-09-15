import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  isColonyCultureShowing: boolean = false;
  isLifeShowing: boolean = false;
  isSticky: boolean = false;

  // @HostListener('window:scroll', ['$event']) onScroll() {
  //   if (window.scrollY > 100) {
  //     this.isSticky = true;
  //   } else {
  //     this.isSticky = false;
  //   }
  // }
  @Output() toggleEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    document.getElementById('menu-button')?.click();
  }

  toggleSidenav(): void {
    this.toggleEvent.emit();
  }
}
