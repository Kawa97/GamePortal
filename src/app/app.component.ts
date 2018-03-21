import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged:boolean;
  
  constructor(private loginService :LoginService) {
    this.logged = sessionStorage.getItem('username') !== null && sessionStorage.getItem('username') !== undefined;
    this.loginService.mySubject$.subscribe(logged =>{this.logged=logged;});
  }
}
