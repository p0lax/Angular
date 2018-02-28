import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent implements OnInit {
  toggleActions = [];
  isDetailsVisible = false;

  constructor() { }

  ngOnInit() {}

  onToggleDetails() {
    this.toggleActions.push(new Date());
    console.log(this.toggleActions);
    this.isDetailsVisible = !this.isDetailsVisible;
  }

}
