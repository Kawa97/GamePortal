import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private loginService :LoginService,private router:Router){}
canActivate() {
    if(this.loginService.controllaLogin()){
        console.log("Loggato");
        return true;
    }
    else{
        this.router.navigate(["/login"]);
        return false;
    }
    }
}