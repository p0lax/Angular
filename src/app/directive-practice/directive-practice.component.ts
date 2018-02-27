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
    this.toggleActions.push(this.toggleActions.length + 1);
    console.log(this.toggleActions);
    this.isDetailsVisible = !this.isDetailsVisible;
  }

}
