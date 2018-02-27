import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotificationCenterComponent } from './notification-center/notification-center.component';
import { NotificationComponent } from './notification/notification.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { UserNameComponent } from './user-name/user-name.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationCenterComponent,
    NotificationComponent,
    ServersComponent,
    ServerComponent,
    UserNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
