import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-year-round',
  templateUrl: './year-round.component.html',
  styleUrls: ['./year-round.component.scss']
})
export class YearRoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
