import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/list/list.component';
import { DetailGameComponent } from './component/detail-game/detail-game.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DetailGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
