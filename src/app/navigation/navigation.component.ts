import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.35s ease-in-out')
      ]),
      transition('* => void', [
        animate('0.35s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class NavigationComponent implements OnInit {
  isColonyCultureShowing: boolean = false;
  isLifeColonyShowing: boolean = false;
  isVisitantsShowing: boolean = false;

  clicks = fromEvent(document, 'click');

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  constructor() { }

  ngOnInit(): void {
  }

}
