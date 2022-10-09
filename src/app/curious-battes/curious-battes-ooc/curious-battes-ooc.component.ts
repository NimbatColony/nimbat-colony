import { Component, OnInit } from '@angular/core';
import { Question } from '../curious-battes.component';
import ooc from './cc-ooc.json';

@Component({
  selector: 'app-curious-battes-ooc',
  templateUrl: './curious-battes-ooc.component.html',
  styleUrls: ['./curious-battes-ooc.component.scss']
})
export class CuriousBattesOocComponent implements OnInit {
  questions: Question[] = ooc.questions;
  constructor() {
    console.log(this.questions);
   }

  ngOnInit(): void {
  }

}