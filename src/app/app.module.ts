import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DemoRouterModule } from './router/router.module';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { DetailGameComponent } from './components/detail-game/detail-game.component';
import { LoginService } from './services/login.service';


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
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
