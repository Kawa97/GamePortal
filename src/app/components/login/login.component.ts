import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  username:String;
  password:String;

onSubmit(){
  if(this.username== "ciao" && this.password== "ciao"){
    console.log("e ciao");
  }
  else{
    console.log("NOPE");
  }
}

}
