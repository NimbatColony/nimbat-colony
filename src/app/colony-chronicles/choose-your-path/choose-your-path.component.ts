import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-choose-your-path',
    templateUrl: './choose-your-path.component.html',
    styleUrls: ['./choose-your-path.component.scss'],
    standalone: false
})
export class ChooseYourPathComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
