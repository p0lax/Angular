import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  id: number = 10;
  status: string = 'offline';
  constructor() { }

  ngOnInit() {
  }

  getServerStatus() {
    return this.status;
  }

}
