import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService :LoginService) { }

  username:string;
  password:string;

onSubmit(){
  if(this.username== "ciao" && this.password== "ciao"){
    console.log("e ciao");
    this.loginService.Login(this.username,this.password);
  }
  else{
    console.log("NOPE");
  }
}

}
