import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DemoRouterModule } from './Router/router/router.module';
import { HeaderComponent } from './Components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    DemoRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
