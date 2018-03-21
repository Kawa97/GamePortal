import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  
  constructor(private loginService :LoginService,private router:Router) { }

  ngOnInit() {
   if (this.loginService.controllaLogin){
     this.router.navigate(['home']);
   }
  }
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
