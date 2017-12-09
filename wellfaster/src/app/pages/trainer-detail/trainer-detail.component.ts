import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css']
})
export class TrainerDetailComponent implements OnInit {

  constructor() { }

  max: number = 5;
  rate: number = 4;
  isReadonly: boolean = true;

  ngOnInit() {
  }

}
