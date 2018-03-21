import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DemoRouterModule } from './Router/router/router.module';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { DetailGameComponent } from './components/detail-game/detail-game.component';
import { ItemGameService } from './services/item-game.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    DetailGameComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    DemoRouterModule
  ],
  providers: [ItemGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
