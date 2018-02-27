import { Component, OnInit } from '@angular/core';

const SERVER_STATUSES = {
  ONLINE: 'online',
  OFFLINE: 'offline'
};

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  id = 10;
  status = SERVER_STATUSES.OFFLINE;
  constructor() {
    this.status = Math.random() > 0.5 ? SERVER_STATUSES.OFFLINE : SERVER_STATUSES.ONLINE;
  }

  ngOnInit() {
  }

  isServerOnline() {
    return this.status === SERVER_STATUSES.ONLINE;
  }

  getServerStatus() {
    return this.status;
  }

}
