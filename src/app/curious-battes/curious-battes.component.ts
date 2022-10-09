import { Component, OnInit } from '@angular/core';
import ic from './cc.json';

@Component({
  selector: 'app-curious-battes',
  templateUrl: './curious-battes.component.html',
  styleUrls: ['./curious-battes.component.scss']
})
export class CuriousBattesComponent implements OnInit {
  questions: Question[] = ic.questions;
  constructor() {
    console.log(this.questions);
   }

  ngOnInit(): void {
  }

}

export interface Question {
  question: string;
  answers: string[];
}